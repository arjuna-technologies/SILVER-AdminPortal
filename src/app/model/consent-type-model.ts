//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

export class ConsentTypeModel
{
    public id:        string;
    public name:      string;
    public creatable: boolean;
    public active:    boolean;

    public constructor()
    {
        this.id        = '';
        this.name      = '';
        this.creatable = false;
        this.active    = false;
    }
}
