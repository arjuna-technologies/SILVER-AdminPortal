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
    public username:     string;
    public consentTypes: ConsentTypeModel[];
    public rendererText: string;

    public constructor(private dialog: MatDialog, private consentTypeDefLoaderService: ConsentTypeDefLoaderService, private consentRendererDefLoaderService: ConsentRendererDefLoaderService)
    {
        this.username     = '';
        this.consentTypes = [];
        this.rendererText = 'JSON';
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
            this.username     = '';
            this.consentTypes = [];
            this.rendererText = 'JSON';
        }
    }

    private logout(): void
    {
        this.username = '';
    }

    private loadConsentTypes(): void
    {
        this.consentTypeDefLoaderService.getConsentTypeDefs()
            .then
            (
                (consentTypeDefs) =>
                {
                    this.consentTypes = [];
                    for (const consentTypeDef of consentTypeDefs)
                    {
                        const consentTypes: ConsentTypeModel = new ConsentTypeModel();

                        consentTypes.name          = consentTypeDef.name;
                        consentTypes.consentTypeId = consentTypeDef.id;

                        console.log('loadConsentType:' + consentTypes.consentTypeId);

                        this.consentTypes.push(consentTypes);
                    }
                }
            )
            .catch(() => { this.consentTypes = []; } );
    }

    private loadConsentRenderer(consentTypeId: string): void
    {
        console.log('loadConsentRendererText:' + consentTypeId);
        this.consentRendererDefLoaderService.getConsentRendererDefByType(consentTypeId, 'StyleA')
            .then
            (
                (consentRendererDef) =>
                {
                    this.rendererText = consentRendererDef.id;
                }
            )
            .catch(() => { this.rendererText = 'Error' } );
    }
}
