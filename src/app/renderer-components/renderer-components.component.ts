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
        if ((index > -1) && ((index + 1 ) < this.consentRendererComponents.data.length))
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
            const newRendererComponents: ConsentRendererComponentModel[] = [];

            for (let count = 0; count < this.consentRendererComponents.data.length; count++)
            {
                if (count === index)
                    newRendererComponents.push(new ConsentRendererComponentModel());
                newRendererComponents.push(this.consentRendererComponents.data[count]);
            }

            this.consentRendererComponents = new ConsentRendererComponentsModel(newRendererComponents);
        }

        event.stopPropagation();
        return false;
    }

    public doAddBelowRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if (index > -1)
        {
            const newRendererComponents: ConsentRendererComponentModel[] = [];

            for (let count = 0; count < this.consentRendererComponents.data.length; count++)
            {
                newRendererComponents.push(this.consentRendererComponents.data[count]);
                if (count === index)
                    newRendererComponents.push(new ConsentRendererComponentModel());
            }

            this.consentRendererComponents = new ConsentRendererComponentsModel(newRendererComponents);
        }

        event.stopPropagation();
        return false;
    }

    public doRemoveRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if (index > -1)
        {
            this.consentRendererComponents.data.splice(index, 1);
            this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
        }

        event.stopPropagation();
        return false;
    }
}
