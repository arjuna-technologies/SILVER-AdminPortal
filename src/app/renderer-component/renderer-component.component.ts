import { Component, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { MatTabChangeEvent } from '@angular/material';

import { v4 } from 'uuid'

import { ConsentRendererComponentModel } from '../model/consent-renderercomponent-model';

@Component
({
    selector:    'silver-renderer-component',
    templateUrl: './renderer-component.component.html',
    styleUrls:   ['./renderer-component.component.scss']
})
export class RendererComponentComponent implements OnInit, OnChanges
{
    @Input()
    public consentRendererComponent: ConsentRendererComponentModel;

    @Output()
    public updated: EventEmitter<ConsentRendererComponentModel> = new EventEmitter();

    public selectedIndex: number;

    constructor()
    {
        this.selectedIndex = 0;
    }

    ngOnInit()
    {
        if (this.consentRendererComponent.type === 'text')
            this.selectedIndex = 0;
        else if (this.consentRendererComponent.type === 'constraint')
            this.selectedIndex = 1;
    }

    ngOnChanges(changes: SimpleChanges)
    {
        if (this.consentRendererComponent.type === 'text')
            this.selectedIndex = 0;
        else if (this.consentRendererComponent.type === 'constraint')
            this.selectedIndex = 1;
    }

    public doGenerateId(): void
    {
        this.consentRendererComponent.id = v4();
    }

    public doChangeType(tabChangeEvent: MatTabChangeEvent): void
    {
        if (tabChangeEvent.index === 0)
            this.consentRendererComponent.type = 'text';
        else if (tabChangeEvent.index === 1)
            this.consentRendererComponent.type = 'constraint';
    }
}
