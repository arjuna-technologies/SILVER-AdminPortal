import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ConsentRendererComponentModel } from '../model/consent-renderercomponent-model';
import { ConsentRendererComponentsModel } from '../model/consent-renderercomponents-model';

@Component
({
    selector:    'silver-renderer-components',
    templateUrl: './renderer-components.component.html',
    styleUrls:   ['./renderer-components.component.scss']
})
export class RendererComponentsComponent
{
    @Input()
    public consentRendererComponents: ConsentRendererComponentsModel;

    @Output()
    public selectRendererComponent = new EventEmitter();

    constructor()
    {
    }

    public doSelectRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        this.selectRendererComponent.emit(rendererComponent);
    }

    public doMoveUpRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if (index > 0)
        {
            this.consentRendererComponents.data[index]     = this.consentRendererComponents.data[index - 1];
            this.consentRendererComponents.data[index - 1] = rendererComponent;

            this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
        }

        event.stopPropagation();
        return false;
    }

    public doMoveDownRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if ((index > -1) && ((index + 1) < this.consentRendererComponents.data.length))
        {
            this.consentRendererComponents.data[index]     = this.consentRendererComponents.data[index + 1];
            this.consentRendererComponents.data[index + 1] = rendererComponent;

            this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
        }

        event.stopPropagation();
        return false;
    }

    public doAddAboveRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if (index > -1)
        {
            this.consentRendererComponents.data.splice(index, 0, new ConsentRendererComponentModel());

            this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
        }

        event.stopPropagation();
        return false;
    }

    public doAddBelowRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if (index > -1)
        {
            this.consentRendererComponents.data.splice(index + 1, 0, new ConsentRendererComponentModel());

            this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
        }

        event.stopPropagation();
        return false;
    }

    public doRemoveRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        if (this.consentRendererComponents.data.length > 1)
        {
            const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
            if (index > -1)
            {
                this.consentRendererComponents.data.splice(index, 1);
                this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
                this.selectRendererComponent.emit(this.consentRendererComponents.data[0]);
            }
        }

        event.stopPropagation();
        return false;
    }
}
