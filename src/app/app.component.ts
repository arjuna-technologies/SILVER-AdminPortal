//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { ConsentTypeModel } from './model/consent-type-model';
import { ConsentTypesModel } from './model/consent-types-model';
import { ConsentTypeDefLoaderService } from './datasources/consent-type-def-loader.service';
import { ConsentRendererDefLoaderService } from './datasources/consent-renderer-def-loader.service';

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent
{
    public displayedColumns: string[];

    public username:         string;
    public consentTypes:     ConsentTypesModel;
    public consentTypeId:    string;
    public consentTypeName:  string;
    public consentDetail:    string;
    public consentPurpose:   string;

    public constructor(private dialog: MatDialog, private consentTypeDefLoaderService: ConsentTypeDefLoaderService, private consentRendererDefLoaderService: ConsentRendererDefLoaderService)
    {
        this.displayedColumns = [ 'name', 'published', 'deprecated' ];

        this.username        = '';
        this.consentTypes    = null;
        this.consentTypeId   = '';
        this.consentTypeName = '';
        this.consentDetail   = '';
        this.consentPurpose  = '';
    }

    public openLoginDialog(): void
    {
        if (this.username === '')
        {
            const loginDialogRef = this.dialog.open(LoginDialogComponent);
            loginDialogRef.afterClosed().subscribe((username) => { this.login(username, ''); });
        }
        else
            this.logout();
    }

    private login(username: string, password: string): void
    {
        if (username === 'Admin')
        {
            this.username = username;

            this.loadConsentTypes();
        }
        else
        {
            this.username        = '';
            this.consentTypes    = null;
            this.consentTypeId   = '';
            this.consentTypeName = '';
            this.consentDetail   = '';
            this.consentPurpose  = '';
        }
    }

    private logout(): void
    {
        this.username        = '';
        this.consentTypes    = null;
        this.consentTypeId   = '';
        this.consentTypeName = '';
        this.consentDetail   = '';
        this.consentPurpose  = '';
    }

    private loadConsentTypes(): void
    {
        this.consentTypeDefLoaderService.getConsentTypeDefs()
            .then
            (
                (consentTypeDefs) =>
                {
                    let consentTypes = [];
                    for (const consentTypeDef of consentTypeDefs)
                    {
                        const consentType: ConsentTypeModel = new ConsentTypeModel();

                        consentType.id        = consentTypeDef.id;
                        consentType.name      = consentTypeDef.name;
                        consentType.creatable = true;
                        consentType.active    = false;

                        consentTypes.push(consentType);
                    }

                    this.consentTypes = new ConsentTypesModel(consentTypes);
                }
            )
            .catch(() => { this.consentTypes = null; } );
    }

    private loadConsentRenderer(consentType: ConsentTypeModel): void
    {
        this.consentTypeId   = consentType.id;
        this.consentTypeName = consentType.name;

        this.consentRendererDefLoaderService.getConsentRendererDefByType(this.consentTypeId, 'StyleA')
            .then
            (
                (consentRendererDef) =>
                {
                }
            )
            .catch(() => { } );
    }
}
