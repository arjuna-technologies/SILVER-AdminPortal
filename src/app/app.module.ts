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

import 'hammerjs';

import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { DatasourcesConfigService } from './config/datasources-config.service';
import { ConsentTypeDefLoaderService } from './datasources/consent-type-def-loader.service';
import { ConsentRendererDefLoaderService } from './datasources/consent-renderer-def-loader.service';

@NgModule
({
    declarations:
    [
        AppComponent,
        LoginDialogComponent
    ],
    imports:
    [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatDialogModule
    ],
    entryComponents:
    [
        LoginDialogComponent
    ],
    providers:
    [
        DatasourcesConfigService,
        ConsentTypeDefLoaderService,
        ConsentRendererDefLoaderService
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
}
