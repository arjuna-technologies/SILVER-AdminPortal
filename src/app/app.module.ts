//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import 'hammerjs';

import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginFailureDialogComponent } from './login-failure-dialog/login-failure-dialog.component';
import { RendererComponentComponent } from './renderer-component/renderer-component.component';
import { RendererComponentsComponent } from './renderer-components/renderer-components.component';
import { ConstraintValuesComponent } from './constraint-values/constraint-values.component';
import { OntologyEditorComponent } from './ontology-editor/ontology-editor.component';

import { DatasourcesConfigService } from './config/datasources-config.service';
import { ConsentTypeDefLoaderService } from './datasources/consent-type-def-loader.service';
import { ConsentRendererDefLoaderService } from './datasources/consent-renderer-def-loader.service';
import { ConsentTypeDetailsLoaderService } from './datasources/consent-type-details-loader.service';
import { ConsentTypePurposesLoaderService } from './datasources/consent-type-purposes-loader.service';

@NgModule
({
    declarations:
    [
        AppComponent,
        LoginDialogComponent,
        LoginFailureDialogComponent,
        RendererComponentComponent,
        RendererComponentsComponent,
        ConstraintValuesComponent,
        OntologyEditorComponent
    ],
    imports:
    [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FlexLayoutModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule
    ],
    entryComponents:
    [
        LoginDialogComponent,
        LoginFailureDialogComponent
    ],
    providers:
    [
        DatasourcesConfigService,
        ConsentTypeDefLoaderService,
        ConsentRendererDefLoaderService,
        ConsentTypeDetailsLoaderService,
        ConsentTypePurposesLoaderService
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
}
