//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component
({
    selector: 'silver-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit
{
    constructor(public dialogRef: MdDialogRef<LoginDialogComponent>)
    {
    }

    ngOnInit()
    {
    }
}
