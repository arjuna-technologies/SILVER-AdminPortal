import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class DatasourcesConfigService
{
    private consentServiceProtocol: string;
    private consentServiceHostPort: string;

    public listConsentTypeDefLoaderBaseURL: string;
    public getConsentTypeDefLoaderBaseURL: string;
    public setConsentTypeDefLoaderBaseURL: string;

    public listConsentRendererDefLoaderBaseURL: string;
    public getConsentRendererDefLoaderBaseURL: string;
    public setConsentRendererDefLoaderBaseURL: string;
    public getConsentRendererDefByTypesLoaderBaseURL: string;

    public getConsentDetailsBaseURL: string;
    public setConsentDetailsBaseURL: string;

    public getConsentPurposesBaseURL: string;
    public setConsentPurposesBaseURL: string;

    constructor()
    {
        this.consentServiceProtocol = 'http://';

        this.consentServiceHostPort = 'consentservice.silver.arjuna.com';
//        this.consentServiceHostPort = 'localhost:8080';

        if (environment.standalone)
        {
            this.listConsentTypeDefLoaderBaseURL = 'assets/consenttypes';
            this.getConsentTypeDefLoaderBaseURL  = 'assets/consenttype';
            this.setConsentTypeDefLoaderBaseURL  = 'assets/consenttype';

            this.listConsentRendererDefLoaderBaseURL       = 'assets/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL        = 'assets/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL        = 'assets/consentrenderer';
            this.getConsentRendererDefByTypesLoaderBaseURL = 'assets/consentrenderer';

            this.getConsentDetailsBaseURL  = 'assets/consentdetails';
            this.getConsentDetailsBaseURL  = 'assets/consentdetails';
            this.getConsentPurposesBaseURL = 'assets/consentpurposes';
            this.getConsentPurposesBaseURL = 'assets/consentpurposes';
        }
        else
        {
            this.listConsentTypeDefLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttypes';
            this.getConsentTypeDefLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';
            this.setConsentTypeDefLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';

            this.listConsentRendererDefLoaderBaseURL       = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL        = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL        = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.getConsentRendererDefByTypesLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';

            this.getConsentDetailsBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedetailsdef';
            this.getConsentDetailsBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedetailsdef';
            this.getConsentPurposesBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypepurposesdef';
            this.getConsentPurposesBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypepurposesdef';
        }
    }
}
