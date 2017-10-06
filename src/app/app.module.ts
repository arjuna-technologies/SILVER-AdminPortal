import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

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
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule
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
