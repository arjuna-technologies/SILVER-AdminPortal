import { Component, OnInit } from '@angular/core';

@Component
({
    selector:    'silver-ontology-editor',
    templateUrl: './ontology-editor.component.html',
    styleUrls:   [ './ontology-editor.component.scss' ]
})
export class OntologyEditorComponent implements OnInit
{
    public types               : string[];
    public selectedType        : string;
    public instanceSets        : string[];
    public selectedInstanceSet : string;
    public instances           : string[];

    public ontology: any;

    constructor()
    {
        this.ontology =
        [
            {
                typename:         'Data Sets',
                instancenames:    [ 'Arrest', 'Domestic Violance', 'Missing Children', 'School Attendance', 'School Terms' ],
                instancesetnames: [ 'Police Data', 'Education Data' ],
            },
            {
                typename:         'Organisations',
                instancenames:    [ 'Newcastle City Council', 'North Tyneside County Council', 'South Tyneside County Council', 'Sunderland City Council',
                                    'Gateshead Council', 'Northumberland County Council', 'Durham County Council' ],
                instancesetnames: [ 'Councils', 'NHS' ]
            },
            {
                typename:         'Purposes',
                instancenames:    [ 'Medical Research', 'Process Improvement' ],
                instancesetnames: [ 'Research' ]
            },
            {
                typename:         'Role',
                instancenames:    [ 'Medical Researcher', 'Key Worker' ],
                instancesetnames: [ 'NHS Worker' ]
            },
            {
                typename:         'Durations',
                instancenames:    [ 'Month', '3 Months', '6 Months', 'Year', 'For ever' ],
                instancesetnames: [ 'Short Term', 'Long Term' ]
            }
        ];

        this.types               = this.obtainTypes();
        this.selectedType        = '';
        this.instanceSets        = [ ];
        this.selectedInstanceSet = '';
        this.instances           = [ ];
    }

    ngOnInit()
    {
    }

    public doSelectType(type: string): void
    {
        this.selectedType        = type;
        this.instanceSets        = this.obtainInstanceSets();
        this.selectedInstanceSet = '';
        this.instances           = [ ];
    }

    public doSelectInstanceSet(instanceSet: string): void
    {
        this.selectedInstanceSet = instanceSet;
        this.instances           = this.obtainInstances();
    }

    private obtainTypes(): string[]
    {
        const types = [];

        for (const ontologyObject of this.ontology)
            types.push(ontologyObject.typename);

        return types;
    }

    private obtainInstanceSets(): string[]
    {
        let instanceSets = [];

        for (const ontologyObject of this.ontology)
            if (ontologyObject.typename === this.selectedType)
                instanceSets = ontologyObject.instancesetnames;

        return instanceSets;
    }

    private obtainInstances(): string[]
    {
        let instances = [];

        for (const ontologyObject of this.ontology)
            if (ontologyObject.typename === this.selectedType)
                instances = ontologyObject.instancenames;

        return instances;
    }
}
