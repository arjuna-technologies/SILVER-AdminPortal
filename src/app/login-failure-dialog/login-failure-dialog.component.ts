//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component
({
    selector: 'silver-login-failure-dialog',
    templateUrl: './login-failure-dialog.component.html',
    styleUrls: ['./login-failure-dialog.component.scss']
})
export class LoginFailureDialogComponent implements OnInit
{
    constructor(public dialogRef: MatDialogRef<LoginFailureDialogComponent>)
    {
    }

    ngOnInit()
    {
    }
}
