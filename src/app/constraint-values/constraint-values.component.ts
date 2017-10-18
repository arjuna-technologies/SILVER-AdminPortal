import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ConsentConstraintValueModel } from '../model/consent-constraintvalue-model';
import { ConsentConstraintValuesModel } from '../model/consent-constraintvalues-model';

@Component
({
    selector:    'silver-constraint-values',
    templateUrl: './constraint-values.component.html',
    styleUrls:   ['./constraint-values.component.scss']
})
export class ConstraintValuesComponent
{
    @Input()
    public consentConstraintValues: ConsentConstraintValuesModel;

    @Output()
    public selectConstraintValue = new EventEmitter();

    constructor()
    {
    }

    public doSelectConstraintValue(constraintValue: ConsentConstraintValuesModel)
    {
        this.selectConstraintValue.emit(constraintValue);
    }

    public doMoveUpConstraintValue(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
        if (index > 0)
        {
            this.consentConstraintValues.data[index]     = this.consentConstraintValues.data[index - 1];
            this.consentConstraintValues.data[index - 1] = constraintValue;

            this.consentConstraintValues = new ConsentConstraintValuesModel(this.consentConstraintValues.data);
        }

        event.stopPropagation();
        return false;
    }

    public doMoveDownConstraintValue(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
        if ((index > -1) && ((index + 1 ) < this.consentConstraintValues.data.length))
        {
            this.consentConstraintValues.data[index]     = this.consentConstraintValues.data[index + 1];
            this.consentConstraintValues.data[index + 1] = constraintValue;

            this.consentConstraintValues = new ConsentConstraintValuesModel(this.consentConstraintValues.data);
        }

        event.stopPropagation();
        return false;
    }

    public doAddAboveConstraintValue(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
        if (index > -1)
        {
            this.consentConstraintValues.data.splice(index, 0, new ConsentConstraintValueModel());
            this.consentConstraintValues = new ConsentConstraintValuesModel(this.consentConstraintValues.data);
        }

        event.stopPropagation();
        return false;
    }

    public doAddBelowConstraintValue(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
        if (index > -1)
        {
            this.consentConstraintValues.data.splice(index + 1, 0, new ConsentConstraintValueModel());
            this.consentConstraintValues = new ConsentConstraintValuesModel(this.consentConstraintValues.data);
        }

        event.stopPropagation();
        return false;
    }

    public doRemoveConstraintValue(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        if (this.consentConstraintValues.data.length > 1)
        {
            const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
            if (index > -1)
            {
                this.consentConstraintValues.data.splice(index, 1);
                this.consentConstraintValues = new ConsentConstraintValuesModel(this.consentConstraintValues.data);
                this.selectConstraintValue.emit(this.consentConstraintValues.data[0]);
            }
        }

        event.stopPropagation();
        return false;
    }
}
