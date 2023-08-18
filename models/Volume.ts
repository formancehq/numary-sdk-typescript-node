/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Volume {
    'input': number;
    'output': number;
    'balance'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "input",
            "baseName": "input",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "output",
            "baseName": "output",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Volume.attributeTypeMap;
    }

    public constructor() {
    }
}

