//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { ConsentTemplateModel } from './model/consent-template-model';
import { ConsentTypeDefLoaderService } from './datasources/consent-type-def-loader.service';

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent
{
    public username: string;
    public consentTemplates: ConsentTemplateModel[];

    public constructor(private dialog: MatDialog, private consentTypeDefLoaderService: ConsentTypeDefLoaderService)
    {
        this.username = '';

        this.loadConsentTemplates();
    }

    public openLoginDialog(): void
    {
        if (this.username === '')
        {
            const loginDialogRef = this.dialog.open(LoginDialogComponent);
        }
        else
        {
            this.username = '';
        }
    }

    private loadConsentTemplates(): void
    {
        this.consentTypeDefLoaderService.getConsentTypeDefs()
            .then
            (
                (consentTypeDefs) =>
                {
                    this.consentTemplates = [];
                    for (const consentTypeDef of consentTypeDefs)
                    {
                        const consentTemplates: ConsentTemplateModel = new ConsentTemplateModel();

                        consentTemplates.name          = consentTypeDef.name;
                        consentTemplates.consentTypeId = consentTypeDef.id;

                        this.consentTemplates.push(consentTemplates);
                    }
                }
            )
            .catch(() => { this.consentTemplates = [] } );
    }
}
