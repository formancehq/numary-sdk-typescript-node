/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.0-rc.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Stats {
    'accounts': number;
    'transactions': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Stats.attributeTypeMap;
    }

    public constructor() {
    }
}

