import { Component, Input, OnInit } from '@angular/core';

import { ConsentRendererComponentModel } from '../model/consent-renderercomponent-model';

@Component
({
    selector:    'silver-renderer-components',
    templateUrl: './renderer-components.component.html',
    styleUrls:   ['./renderer-components.component.scss']
})
export class RendererComponentsComponent implements OnInit
{
    @Input()
    public consentRendererComponents: ConsentRendererComponentModel[];

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
