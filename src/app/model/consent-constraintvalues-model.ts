//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { ConsentConstraintValueModel } from './consent-constraintvalue-model';

export class ConsentConstraintValuesModel extends DataSource<any>
{
    public data: ConsentConstraintValueModel[];

    public constructor(data: ConsentConstraintValueModel[])
    {
        super();

        this.data = data;
    }

    public connect(): Observable<ConsentConstraintValueModel[]>
    {
        return Observable.of(this.data);
    }

    public disconnect()
    {
    }
}
