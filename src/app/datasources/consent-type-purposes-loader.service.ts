//
// Copyright (c) 2017-2018, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                          Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                          Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                          All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentTypePurposes }      from './consent-type-purposes';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentTypePurposesLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentTypePurposes(consentTypeId: string): Promise<ConsentTypePurposes>
    {
        return this.http.get(this.datasourcesConfigService.getConsentTypePurposesLoaderBaseURL + '/' + consentTypeId)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentTypePurposesSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentTypePurposesErrorHandler(response)));
    }

    public postConsentTypePurposes(consentTypeId: string, consentTypePurposes: ConsentTypePurposes): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.setConsentTypePurposesLoaderBaseURL + '/' + consentTypeId, consentTypePurposes)
                   .toPromise()
                   .then((response) => Promise.resolve(this.postConsentTypePurposesSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postConsentTypePurposesErrorHandler(response)));
    }

    private getConsentTypePurposesSuccessHandler(response: Response): ConsentTypePurposes
    {
        const consentTypePurposes = new ConsentTypePurposes();

        consentTypePurposes.fromObject(response.json().purposesJSON);

        return consentTypePurposes;
    }

    private getConsentTypePurposesErrorHandler(error: Response | any): ConsentTypePurposes
    {
        console.log('Error while loading Consent Type Purposes: ' + (error.message || error));

        return null;
    }

    private postConsentTypePurposesSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private postConsentTypePurposesErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saveing Consent Type Purposes: ' + (error.message || error));

        return false;
    }
}
