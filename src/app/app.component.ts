//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginFailureDialogComponent } from './login-failure-dialog/login-failure-dialog.component';

import { ConsentTypeModel } from './model/consent-type-model';
import { ConsentTypesModel } from './model/consent-types-model';
import { ConsentRendererComponentModel } from './model/consent-renderercomponent-model';
import { ConsentRendererComponentsModel } from './model/consent-renderercomponents-model';
import { TextComponentRendererDef } from './datasources/text-component-renderer-def';
import { ConstraintComponentRendererDef } from './datasources/constraint-component-renderer-def';
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

    public username:                  string;
    public consentTypes:              ConsentTypesModel;
    public consentTypeId:             string;
    public consentTypeName:           string;
    public consentRendererId:         string;
    public consentRendererName:       string;
    public consentRendererComponents: ConsentRendererComponentsModel;
    public consentRendererComponent:  ConsentRendererComponentModel;
    public consentDetail:             string;
    public consentPurpose:            string;

    public constructor(private dialog: MatDialog, private consentTypeDefLoaderService: ConsentTypeDefLoaderService, private consentRendererDefLoaderService: ConsentRendererDefLoaderService)
    {
        this.displayedColumns = [ 'name', 'published', 'deprecated' ];

        this.username                  = '';
        this.consentTypes              = new ConsentTypesModel([]);
        this.consentTypeId             = '';
        this.consentTypeName           = '';
        this.consentRendererId         = '';
        this.consentRendererName       = '';
        this.consentRendererComponents = new ConsentRendererComponentsModel([]);
        this.consentRendererComponent  = new ConsentRendererComponentModel();
        this.consentDetail             = '';
        this.consentPurpose            = '';
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

    public doUpdateCancel(): void
    {
        this.consentTypeId             = '';
        this.consentTypeName           = '';
        this.consentRendererId         = '';
        this.consentRendererName       = '';
        this.consentRendererComponents = new ConsentRendererComponentsModel([]);
        this.consentRendererComponent  = new ConsentRendererComponentModel();
        this.consentDetail             = '';
        this.consentPurpose            = '';
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
            this.username                  = '';
            this.consentTypes              = new ConsentTypesModel([]);
            this.consentTypeId             = '';
            this.consentTypeName           = '';
            this.consentRendererId         = '';
            this.consentRendererName       = '';
            this.consentRendererComponents = new ConsentRendererComponentsModel([]);
            this.consentRendererComponent  = new ConsentRendererComponentModel();
            this.consentDetail             = '';
            this.consentPurpose            = '';

            const loginFailureDialogRef = this.dialog.open(LoginFailureDialogComponent);
        }
    }

    private logout(): void
    {
        this.username                  = '';
        this.consentTypes              = new ConsentTypesModel([]);
        this.consentTypeId             = '';
        this.consentTypeName           = '';
        this.consentRendererId         = '';
        this.consentRendererName       = '';
        this.consentRendererComponents = new ConsentRendererComponentsModel([]);
        this.consentRendererComponent  = new ConsentRendererComponentModel();
        this.consentDetail             = '';
        this.consentPurpose            = '';
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
                        consentType.active    = true;

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
                    this.consentRendererId   = consentRendererDef.id;
                    if (consentRendererDef.descriptionRendererDefs[0])
                        this.consentRendererName = consentRendererDef.descriptionRendererDefs[0].text;

                    const consentRendererComponents = [];
                    for (const componentRendererDef of consentRendererDef.componentRendererDefs)
                    {
                        const consentRendererComponent: ConsentRendererComponentModel = new ConsentRendererComponentModel();

                        if (componentRendererDef instanceof TextComponentRendererDef)
                        {
                            consentRendererComponent.type = 'text';
                            consentRendererComponent.text = (componentRendererDef as TextComponentRendererDef).valueTextComponentRendererDefs[0].text;
                        }
                        else if (componentRendererDef instanceof ConstraintComponentRendererDef)
                        {
                            consentRendererComponent.type = 'constraint';
                            consentRendererComponent.name = (componentRendererDef as ConstraintComponentRendererDef).descriptionRendererDefs[0].text;
                        }
                        else
                            consentRendererComponent.type = 'unknown';

                        consentRendererComponents.push(consentRendererComponent);
                    }
                    this.consentRendererComponents = new ConsentRendererComponentsModel(consentRendererComponents);

                    this.consentDetail  = '';
                    this.consentPurpose = '';
                }
            )
            .catch
            (
                () =>
                {
                    this.consentRendererId         = '';
                    this.consentRendererName       = '';
                    this.consentRendererComponents = new ConsentRendererComponentsModel([]);
                    this.consentDetail             = '';
                    this.consentPurpose            = '';
                }
            );
    }
}
