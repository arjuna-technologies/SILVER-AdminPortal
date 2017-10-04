import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

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
        FlexLayoutModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdDialogModule
    ],
    entryComponents:
    [
        LoginDialogComponent
    ],
    providers:
    [
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
}
