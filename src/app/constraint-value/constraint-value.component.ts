import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { MatTabChangeEvent } from '@angular/material';

import { v4 } from 'uuid';

import { ConsentConstraintValueModel } from '../model/consent-constraintvalue-model';

@Component
({
    selector:    'silver-constraint-component',
    templateUrl: './constraint-value.component.html',
    styleUrls:   ['./constraint-value.component.scss']
})
export class ConstraintValueComponent
{
    @Input()
    public consentConstraintValueModel: ConsentConstraintValueModel;

    @Output()
    public updated: EventEmitter<ConsentConstraintValueModel> = new EventEmitter();

    constructor()
    {
    }

    public doGenerateId(): void
    {
        this.consentConstraintValueModel.id = v4();
    }
}
