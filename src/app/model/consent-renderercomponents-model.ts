//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { ConsentRendererComponentModel } from './consent-renderercomponent-model';

export class ConsentRendererComponentsModel extends DataSource<any>
{
    public data: ConsentRendererComponentModel[];

    public constructor(data: ConsentRendererComponentModel[])
    {
        super();

        this.data = data;
    }

    public connect(): Observable<ConsentRendererComponentModel[]>
    {
        return Observable.of(this.data);
    }

    public disconnect()
    {
    }
}
