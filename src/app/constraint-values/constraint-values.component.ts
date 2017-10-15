import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ConsentConstraintValueModel } from '../model/consent-constraintvalue-model';
import { ConsentConstraintValuesModel } from '../model/consent-constraintvalues-model';

@Component
({
    selector:    'silver-constraint-components',
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

    public doMoveUpRendererComponent(constraintValue: ConsentConstraintValueModel, event): boolean
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

    public doMoveDownRendererComponent(constraintValue: ConsentConstraintValueModel, event): boolean
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

    public doAddAboveRendererComponent(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
        if (index > -1)
        {
            const newConstraintValues: ConsentConstraintValueModel[] = [];

            for (let count = 0; count < this.consentConstraintValues.data.length; count++)
            {
                if (count === index)
                    newConstraintValues.push(new ConsentConstraintValueModel());
                newConstraintValues.push(this.consentConstraintValues.data[count]);
            }

            this.consentConstraintValues = new ConsentConstraintValuesModel(newConstraintValues);
        }

        event.stopPropagation();
        return false;
    }

    public doAddBelowRendererComponent(constraintValue: ConsentConstraintValueModel, event): boolean
    {
        const index = this.consentConstraintValues.data.indexOf(constraintValue, 0);
        if (index > -1)
        {
            const newConstraintValues: ConsentConstraintValueModel[] = [];

            for (let count = 0; count < this.consentConstraintValues.data.length; count++)
            {
                newConstraintValues.push(this.consentConstraintValues.data[count]);
                if (count === index)
                    newConstraintValues.push(new ConsentConstraintValueModel());
            }

            this.consentConstraintValues = new ConsentConstraintValuesModel(newConstraintValues);
        }

        event.stopPropagation();
        return false;
    }

    public doRemoveRendererComponent(constraintValue: ConsentConstraintValueModel, event): boolean
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
