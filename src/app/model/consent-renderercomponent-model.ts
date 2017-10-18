//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { ConsentConstraintValueModel } from './consent-constraintvalue-model';
import { ConsentConstraintValuesModel } from './consent-constraintvalues-model';

export class ConsentRendererComponentModel
{
    public type: string;

    public text: string;

    public id:   string;
    public name: string;
    public constraintValuesModel: ConsentConstraintValuesModel;

    public constructor()
    {
         this.type = 'text';

         this.text = '';

         this.id                            = '';
         this.name                          = '';
         this.constraintValuesModel         = new ConsentConstraintValuesModel([]);
         this.constraintValuesModel.data    = [];
         this.constraintValuesModel.data[0] = new ConsentConstraintValueModel();
    }
}
