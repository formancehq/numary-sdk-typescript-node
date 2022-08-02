/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Contract } from '../models/Contract';
import { HttpFile } from '../http/http';

export class Mapping {
    'contracts': Array<Contract>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contracts",
            "baseName": "contracts",
            "type": "Array<Contract>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Mapping.attributeTypeMap;
    }

    public constructor() {
    }
}

