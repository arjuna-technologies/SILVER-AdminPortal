//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { v4 } from 'uuid';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginFailureDialogComponent } from './login-failure-dialog/login-failure-dialog.component';

import { ConsentTypeModel } from './model/consent-type-model';
import { ConsentTypesModel } from './model/consent-types-model';
import { ConsentRendererComponentModel } from './model/consent-renderercomponent-model';
import { ConsentRendererComponentsModel } from './model/consent-renderercomponents-model';
import { ConsentConstraintValuesModel } from './model/consent-constraintvalues-model';
import { ConsentConstraintValueModel } from './model/consent-constraintvalue-model';
import { ConsentRendererDef } from './datasources/consent-renderer-def';
import { DescriptionRendererDef } from './datasources/description-renderer-def';
import { TextComponentRendererDef } from './datasources/text-component-renderer-def';
import { ValueTextComponentRendererDef } from './datasources/value-text-component-renderer-def';
import { ConstraintComponentRendererDef } from './datasources/constraint-component-renderer-def';
import { ValueConstraintComponentRendererDef } from './datasources/value-constraint-component-renderer-def';
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
    public consentDetails:            string;
    public consentPurposes:           string;

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
        this.consentDetails            = '';
        this.consentPurposes           = '';
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
        this.consentDetails            = '';
        this.consentPurposes           = '';
    }

    public setConsentRendererComponent(event): void
    {
        this.consentRendererComponent = event;
    }

    public doUpdateConsentRenderer(): void
    {
        const consentRendererDef: ConsentRendererDef = new ConsentRendererDef();
        consentRendererDef.id = this.consentRendererId;
        consentRendererDef.descriptionRendererDefs             = [];
        consentRendererDef.descriptionRendererDefs[0]          = new DescriptionRendererDef();
        consentRendererDef.descriptionRendererDefs[0].selector = 'lang=en-GB';
        consentRendererDef.descriptionRendererDefs[0].text     = this.consentRendererName;

        consentRendererDef.componentRendererDefs = [];
        for (const consentRendererComponent of this.consentRendererComponents.data)
        {
            if (consentRendererComponent.type === 'text')
            {
                const textComponentRendererDef: TextComponentRendererDef = new TextComponentRendererDef();

                textComponentRendererDef.valueTextComponentRendererDefs             = [];
                textComponentRendererDef.valueTextComponentRendererDefs[0]          = new ValueTextComponentRendererDef();
                textComponentRendererDef.valueTextComponentRendererDefs[0].selector = 'lang=en-GB';
                textComponentRendererDef.valueTextComponentRendererDefs[0].text     = consentRendererComponent.text;

                consentRendererDef.componentRendererDefs.push(textComponentRendererDef);
            }
            else if (consentRendererComponent.type === 'constraint')
            {
                const constraintComponentRendererDef: ConstraintComponentRendererDef = new ConstraintComponentRendererDef();

                constraintComponentRendererDef.id = consentRendererComponent.id;

                constraintComponentRendererDef.descriptionRendererDefs             = [];
                constraintComponentRendererDef.descriptionRendererDefs[0]          = new DescriptionRendererDef();
                constraintComponentRendererDef.descriptionRendererDefs[0].selector = 'lang=en-GB';
                constraintComponentRendererDef.descriptionRendererDefs[0].text     = consentRendererComponent.name;

                constraintComponentRendererDef.valueConstraintComponentRendererDefs = [];
                for (const constraintValue of consentRendererComponent.constraintValuesModel.data)
                {
                    const valueConstraintComponentRendererDef: ValueConstraintComponentRendererDef = new ValueConstraintComponentRendererDef();

                    valueConstraintComponentRendererDef.id = constraintValue.id;

                    valueConstraintComponentRendererDef.descriptionRendererDefs             = [];
                    valueConstraintComponentRendererDef.descriptionRendererDefs[0]          = new DescriptionRendererDef();
                    valueConstraintComponentRendererDef.descriptionRendererDefs[0].selector = 'lang=en-GB';
                    valueConstraintComponentRendererDef.descriptionRendererDefs[0].text     = constraintValue.text;

                    constraintComponentRendererDef.valueConstraintComponentRendererDefs.push(valueConstraintComponentRendererDef);
                }

                consentRendererDef.componentRendererDefs.push(constraintComponentRendererDef);
            }
        }

        this.saveConsentRenderer(this.consentRendererId, this.consentTypeId, 'StyleA', consentRendererDef);
    }

    public doGenerateId(): void
    {
        this.consentRendererId = v4();
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
            this.consentDetails            = '';
            this.consentPurposes           = '';

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
        this.consentDetails            = '';
        this.consentPurposes           = '';
    }

    private loadConsentTypes(): void
    {
        this.consentTypeDefLoaderService.getConsentTypeDefs()
            .then
            (
                (consentTypeDefs) =>
                {
                    const consentTypes = [];
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
                            const textComponentRendererDef: TextComponentRendererDef = componentRendererDef as TextComponentRendererDef;

                            consentRendererComponent.type = 'text';
                            consentRendererComponent.text = textComponentRendererDef.valueTextComponentRendererDefs[0].text;
                        }
                        else if (componentRendererDef instanceof ConstraintComponentRendererDef)
                        {
                            const constraintComponentRendererDef: ConstraintComponentRendererDef = componentRendererDef as ConstraintComponentRendererDef;

                            consentRendererComponent.type = 'constraint';
                            consentRendererComponent.id   = constraintComponentRendererDef.id;
                            consentRendererComponent.name = constraintComponentRendererDef.descriptionRendererDefs[0].text;

                            const consentConstraintValueModels: ConsentConstraintValueModel[] = [];
                            for (const valueConstraintComponentRendererDef of constraintComponentRendererDef.valueConstraintComponentRendererDefs)
                            {
                                const consentConstraintValue: ConsentConstraintValueModel = new ConsentConstraintValueModel();

                                consentConstraintValue.id   = valueConstraintComponentRendererDef.id;
                                consentConstraintValue.text = valueConstraintComponentRendererDef.descriptionRendererDefs[0].text;

                                consentConstraintValueModels.push(consentConstraintValue);
                            }
                            consentRendererComponent.constraintValuesModel = new ConsentConstraintValuesModel(consentConstraintValueModels);
                        }
                        else
                            consentRendererComponent.type = 'unknown';

                        consentRendererComponents.push(consentRendererComponent);
                    }
                    this.consentRendererComponents = new ConsentRendererComponentsModel(consentRendererComponents);
                    this.consentRendererComponent  = consentRendererComponents[0];

                    this.consentDetails  = '';
                    this.consentPurposes = '';
                }
            )
            .catch
            (
                () =>
                {
                    this.consentRendererId         = '';
                    this.consentRendererName       = '';
                    this.consentRendererComponents = new ConsentRendererComponentsModel([]);
                    this.consentRendererComponent  = new ConsentRendererComponentModel();
                    this.consentDetails            = '';
                    this.consentPurposes           = '';
                }
            );
    }

    private saveConsentRenderer(consentRendererId: string, consentTypeId: string, consentRendererType: string, consentRendererDef: ConsentRendererDef): void
    {
        this.consentRendererDefLoaderService.postConsentRendererDef(consentRendererId, consentTypeId, consentRendererType, consentRendererDef.toObject())
            .then
            (
                (consentRendererDef) =>
                {
                    console.log('Responce[' + JSON.stringify(consentRendererDef) + ']');
                }
            )
            .catch
            (
                () =>
                {
                }
            );
    }
}
