//
// Copyright (c) 2017-2018, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                          Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                          Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                          All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentTypeDetails }       from './consent-type-details';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentTypeDetailsLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentTypeDetails(consentTypeId: string): Promise<ConsentTypeDetails>
    {
        return this.http.get(this.datasourcesConfigService.getConsentDetailsBaseURL + '/' + consentTypeId)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentTypeDetailsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentTypeDetailsErrorHandler(response)));
    }

    public postConsentTypeDetails(consentTypeId: string, consentTypeDetails: ConsentTypeDetails): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.setConsentDetailsBaseURL + '/' + consentTypeId, consentTypeDetails)
                   .toPromise()
                   .then((response) => Promise.resolve(this.postConsentTypeDetailsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postConsentTypeDetailsErrorHandler(response)));
    }

    private getConsentTypeDetailsSuccessHandler(response: Response): ConsentTypeDetails
    {
        const consentTypeDetails = new ConsentTypeDetails();

        consentTypeDetails.fromObject(response.json());

        return consentTypeDetails;
    }

    private getConsentTypeDetailsErrorHandler(error: Response | any): ConsentTypeDetails
    {
        console.log('Error while loading Consent Type Details: ' + (error.message || error));

        return null;
    }

    private postConsentTypeDetailsSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private postConsentTypeDetailsErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saveing Consent Type Details: ' + (error.message || error));

        return false;
    }
}
