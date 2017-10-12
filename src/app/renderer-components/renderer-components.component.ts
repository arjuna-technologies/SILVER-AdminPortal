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
        console.log('RCC Select[' + JSON.stringify(rendererComponent) + ']');

        this.selectRendererComponent.emit(rendererComponent);
    }

    public doMoveUpRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        console.log('RCC MoveUp[' + JSON.stringify(rendererComponent) + ']');

        event.stopPropagation();
        return false;
    }

    public doMoveDownRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        console.log('RCC MoveDown[' + JSON.stringify(rendererComponent) + ']');

        event.stopPropagation();
        return false;
    }

    public doAddAboveRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        console.log('RCC AddAbove[' + JSON.stringify(rendererComponent) + ']');

        event.stopPropagation();
        return false;
    }

    public doAddBelowRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        console.log('RCC AddBelow[' + JSON.stringify(rendererComponent) + ']');

        event.stopPropagation();
        return false;
    }

    public doRemoveRendererComponent(rendererComponent: ConsentRendererComponentModel, event): boolean
    {
        console.log('RCC Remove[' + JSON.stringify(rendererComponent) + ']');

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
