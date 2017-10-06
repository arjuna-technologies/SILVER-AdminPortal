//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//             Open Lab, Newcastle University, Newcastle upon Tyne, England,
//             Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//             All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentTypeDef } from './consent-type-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentTypeDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentTypeDefs(): Promise<ConsentTypeDef[]>
    {
        return this.http.get(this.datasourcesConfigService.listConsentTypeDefLoaderBaseURL)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentTypeDefsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentTypeDefsErrorHandler(response)));
    }

    public getConsentTypeDef(id: string): Promise<ConsentTypeDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentTypeDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentTypeDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentTypeDefErrorHandler(response)));
    }

    public setConsentTypeDef(id: string, consentTypeDef: ConsentTypeDef): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.getConsentTypeDefLoaderBaseURL + '/' + id, consentTypeDef.toObject())
                   .toPromise()
                   .then((response) => Promise.resolve(this.setConsentTypeDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.setConsentTypeDefErrorHandler(response)));
    }

    private getConsentTypeDefsSuccessHandler(response: Response): ConsentTypeDef[]
    {
        const consentTypeDefs: ConsentTypeDef[] = [];

        for (const consentTypeDefObject of response.json())
        {
             const consentTypeDef = new ConsentTypeDef();

             consentTypeDef.fromObject(consentTypeDefObject);
             consentTypeDefs.push(consentTypeDef);
        }

        return consentTypeDefs;
    }

    private getConsentTypeDefsErrorHandler(error: Response | any): ConsentTypeDef[]
    {
        console.log('Error while loading Consent Types: ' + (error.message || error));

        return [];
    }

    private getConsentTypeDefSuccessHandler(response: Response): ConsentTypeDef
    {
        const consentTypeDef = new ConsentTypeDef();

        consentTypeDef.fromObject(response.json());

        return consentTypeDef;
    }

    private getConsentTypeDefErrorHandler(error: Response | any): ConsentTypeDef
    {
        console.log('Error while loading Consent Type: ' + (error.message || error));

        return null;
    }

    private setConsentTypeDefSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private setConsentTypeDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saving Consent Type: ' + (error.message || error));

        return false;
    }
}
