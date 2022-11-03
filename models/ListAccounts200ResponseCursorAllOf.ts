/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from '../models/Account';
import { HttpFile } from '../http/http';

export class ListAccounts200ResponseCursorAllOf {
    'data': Array<Account>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Account>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAccounts200ResponseCursorAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

