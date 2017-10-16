//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { v4 } from 'uuid';

export class ConsentConstraintValueModel
{
    public id:   string;
    public text: string;

    public constructor()
    {
         this.id   = '';
         this.text = '';
    }

    public doGenerateId(): void
    {
        this.id = v4();
    }
}
