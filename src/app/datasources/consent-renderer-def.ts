//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';
import { DescriptionRendererDef } from './description-renderer-def';
import { ComponentRendererDef } from './component-renderer-def';
import { TextComponentRendererDef } from './text-component-renderer-def';
import { ConstraintComponentRendererDef } from './constraint-component-renderer-def';

export class ConsentRendererDef implements IOObject
{
    id:                      string;
    descriptionRendererDefs: DescriptionRendererDef[];
    componentRendererDefs:   ComponentRendererDef[];

    public constructor()
    {
        this.id                      = null;
        this.descriptionRendererDefs = [];
        this.componentRendererDefs   = [];
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

        this.componentRendererDefs = [];
        for (const componentRendererDefObject of object.components)
            if (componentRendererDefObject.type === 'constraint')
            {
                const constraintComponentRendererDef = new ConstraintComponentRendererDef();

                constraintComponentRendererDef.fromObject(componentRendererDefObject.constraint);
                this.componentRendererDefs.push(constraintComponentRendererDef);
            }
            else if (componentRendererDefObject.type === 'text')
            {
                const textComponentRendererDef = new TextComponentRendererDef();

                textComponentRendererDef.fromObject(componentRendererDefObject.text);
                this.componentRendererDefs.push(textComponentRendererDef);
            }

        return true;
    }

    public toObject(): any
    {
        const consentrenderer: any = { };

        consentrenderer.id = this.id;

        consentrenderer.descriptions = [];
        for (const descriptionRendererDef of this.descriptionRendererDefs)
            consentrenderer.descriptions.push(descriptionRendererDef.toObject());

        consentrenderer.components = [];
        for (const componentRendererDef of this.componentRendererDefs)
            consentrenderer.components.push(componentRendererDef.toObject());

        return consentrenderer;
    }
}
