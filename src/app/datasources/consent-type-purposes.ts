//
// Copyright (c) 2017-2018, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                          Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                          Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                          All rights reserved.
//

import { IOObject } from './io-object';

export class ConsentTypePurposes implements IOObject
{
    public text: string;

    public fromObject(object: any): boolean
    {
        this.text = object.text;

        return true;
    }

    public toObject(): any
    {
        const consentTypeDefObject: any = { };

        consentTypeDefObject.text = this.text;

        return consentTypeDefObject;
    }
}
