/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from '../models/Account';
import { HttpFile } from '../http/http';

export class AccountsCursorResponseCursor {
    'pageSize': number;
    'hasMore': boolean;
    'previous'?: string;
    'next'?: string;
    'data': Array<Account>;

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
            "type": "Array<Account>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountsCursorResponseCursor.attributeTypeMap;
    }

    public constructor() {
    }
}

