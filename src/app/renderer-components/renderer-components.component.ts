import { Component, Input } from '@angular/core';

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

    constructor()
    {
    }

    public doSelectRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        console.log('RCC Select[' + JSON.stringify(rendererComponent) + ']');
    }

    public doMoveUpRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        console.log('RCC MoveUp[' + JSON.stringify(rendererComponent) + ']');
    }

    public doMoveDownRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        console.log('RCC MoveDown[' + JSON.stringify(rendererComponent) + ']');
    }

    public doAddAboveRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        console.log('RCC AddAbove[' + JSON.stringify(rendererComponent) + ']');
    }

    public doAddBelowRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        console.log('RCC AddBelow[' + JSON.stringify(rendererComponent) + ']');
    }

    public doRemoveRendererComponent(rendererComponent: ConsentRendererComponentModel)
    {
        console.log('RCC Remove[' + JSON.stringify(rendererComponent) + ']');

        const index = this.consentRendererComponents.data.indexOf(rendererComponent, 0);
        if (index > -1)
        {
            this.consentRendererComponents.data.splice(index, 1);
            this.consentRendererComponents = new ConsentRendererComponentsModel(this.consentRendererComponents.data);
        }
    }
}
