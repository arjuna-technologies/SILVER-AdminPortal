//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { ConsentTypeModel } from './consent-type-model';

export class ConsentTypesModel extends DataSource<any>
{
    public data: ConsentTypeModel[];

    public constructor(data: ConsentTypeModel[])
    {
        super();

        this.data = data;
    }
 
    public connect(): Observable<ConsentTypeModel[]>
    {
        return Observable.of(this.data);
    }

    public disconnect()
    {
    }
}
