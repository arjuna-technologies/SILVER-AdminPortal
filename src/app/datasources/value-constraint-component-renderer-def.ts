//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';
import { DescriptionRendererDef } from './description-renderer-def';

export class ValueConstraintComponentRendererDef implements IOObject
{
    public id:                      string;
    public descriptionRendererDefs: DescriptionRendererDef[];

    public constructor()
    {
        this.id                      = null;
        this.descriptionRendererDefs = [];
    }

    public fromObject(object: any): boolean
    {
        this.id = object.id;

        this.descriptionRendererDefs = [];
        for (const descriptionRendererDefObject of object.descriptions)
        {
            const descriptionRendererDef = new DescriptionRendererDef();

            descriptionRendererDef.fromObject(descriptionRendererDefObject);
            this.descriptionRendererDefs.push(descriptionRendererDef);
        }

        return true;
    }

    public toObject(): any
    {
        const value: any = { };

        value.id = this.id;

        value.descriptions = [];
        for (const descriptionRendererDef of this.descriptionRendererDefs)
            value.descriptions.push(descriptionRendererDef.toObject());

        return value;
    }
}
