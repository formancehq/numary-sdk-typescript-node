/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BalancesCursorResponseCursor {
    'pageSize': number;
    'hasMore': boolean;
    'previous'?: string;
    'next'?: string;
    'data': Array<{ [key: string]: { [key: string]: number; }; }>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "hasMore",
            "baseName": "hasMore",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<{ [key: string]: { [key: string]: number; }; }>",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return BalancesCursorResponseCursor.attributeTypeMap;
    }

    public constructor() {
    }
}

