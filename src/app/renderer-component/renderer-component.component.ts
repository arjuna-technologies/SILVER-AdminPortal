import { Component, Input, OnInit } from '@angular/core';

import { ConsentRendererComponentModel } from '../model/consent-renderercomponent-model';

@Component
({
    selector:    'silver-renderer-component',
    templateUrl: './renderer-component.component.html',
    styleUrls:   ['./renderer-component.component.scss']
})
export class RendererComponentComponent implements OnInit
{
    @Input()
    public consentRendererComponent: ConsentRendererComponentModel;

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
