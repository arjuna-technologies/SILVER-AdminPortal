//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { ComponentRendererDef } from './component-renderer-def';
import { DescriptionRendererDef } from './description-renderer-def';
import { ValueConstraintComponentRendererDef } from './value-constraint-component-renderer-def';

export class ConstraintComponentRendererDef implements ComponentRendererDef
{
    public id:                                   string;
    public descriptionRendererDefs:              DescriptionRendererDef[];
    public valueConstraintComponentRendererDefs: ValueConstraintComponentRendererDef[];

    public constructor()
    {
        this.id                                   = null;
        this.descriptionRendererDefs              = [];
        this.valueConstraintComponentRendererDefs = [];
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

        this.valueConstraintComponentRendererDefs = [];
        for (const valueConstraintComponentRendererDefObject of object.values)
        {
            const valueConstraintComponentRendererDef = new ValueConstraintComponentRendererDef();

            valueConstraintComponentRendererDef.fromObject(valueConstraintComponentRendererDefObject);
            this.valueConstraintComponentRendererDefs.push(valueConstraintComponentRendererDef);
        }

        return true;
    }

    public toObject(): any
    {
        const constraintComponentObject: any = { };

        constraintComponentObject.id = this.id;

        constraintComponentObject.descriptions = [];
        for (const descriptionRendererDef of this.descriptionRendererDefs)
            constraintComponentObject.descriptions.push(descriptionRendererDef.toObject());

        constraintComponentObject.values = [];
        for (const valueConstraintComponentRendererDef of this.valueConstraintComponentRendererDefs)
            constraintComponentObject.values.push(valueConstraintComponentRendererDef.toObject());

        return constraintComponentObject;
    }
}
