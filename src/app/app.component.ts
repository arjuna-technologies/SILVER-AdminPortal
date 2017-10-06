//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent
{
    public username: string;

    public constructor(private dialog: MatDialog)
    {
        this.username = '';
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
}
