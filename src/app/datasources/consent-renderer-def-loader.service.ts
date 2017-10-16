//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentRendererDef } from './consent-renderer-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class ConsentRendererDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getConsentRendererDefs(): Promise<ConsentRendererDef[]>
    {
        return this.http.get(this.datasourcesConfigService.listConsentRendererDefLoaderBaseURL)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentRendererDefsSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentRendererDefsErrorHandler(response)));
    }

    public getConsentRendererDef(id: string): Promise<ConsentRendererDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentRendererDefLoaderBaseURL + '/' + id)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentRendererDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentRendererDefErrorHandler(response)));
    }

    public getConsentRendererDefByType(consentTypeId: string, consentRendererType: string): Promise<ConsentRendererDef>
    {
        return this.http.get(this.datasourcesConfigService.getConsentRendererDefByTypesLoaderBaseURL + '?consenttypeid=' + consentTypeId + '&consentrenderertype=' + consentRendererType)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getConsentRendererDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getConsentRendererDefErrorHandler(response)));
    }

    public postConsentRendererDef(consentRendererId: string, consentTypeId: string, consentRendererType: string, consentRendererDef: ConsentRendererDef): Promise<boolean>
    {
        return this.http.post(this.datasourcesConfigService.setConsentRendererDefLoaderBaseURL + '/' + consentRendererId + '?consenttypeid=' + consentTypeId +'&consentrenderertype=' + consentRendererType, consentRendererDef)
                   .toPromise()
                   .then((response) => Promise.resolve(this.postConsentRendererDefSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postConsentRendererDefErrorHandler(response)));
    }

    private getConsentRendererDefsSuccessHandler(response: Response): ConsentRendererDef[]
    {
        const consentRendererDefs: ConsentRendererDef[] = [];

        for (const consentRendererDefObject of response.json())
        {
            const consentRendererDef = new ConsentRendererDef();

            consentRendererDef.fromObject(consentRendererDefObject);
            consentRendererDefs.push(consentRendererDef);
        }

        return consentRendererDefs;
    }

    private getConsentRendererDefsErrorHandler(error: Response | any): ConsentRendererDef[]
    {
        console.log('Error while loading Consent Renderers: ' + (error.message || error));

        return [];
    }

    private getConsentRendererDefSuccessHandler(response: Response): ConsentRendererDef
    {
        const consentRendererDef = new ConsentRendererDef();

        consentRendererDef.fromObject(response.json());

        return consentRendererDef;
    }

    private getConsentRendererDefErrorHandler(error: Response | any): ConsentRendererDef
    {
        console.log('Error while loading Consent Renderer: ' + (error.message || error));

        return null;
    }

    private postConsentRendererDefSuccessHandler(response: Response): boolean
    {
        return true;
    }

    private postConsentRendererDefErrorHandler(error: Response | any): boolean
    {
        console.log('Error while saveing Consent Renderer: ' + (error.message || error));

        return false;
    }
}
