/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.8.0-rc.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GetBalances200ResponseCursorAllOf {
    'data': Array<{ [key: string]: { [key: string]: number; }; }>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<{ [key: string]: { [key: string]: number; }; }>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetBalances200ResponseCursorAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

