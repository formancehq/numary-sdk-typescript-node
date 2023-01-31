/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.0-rc.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AccountWithVolumesAndBalances {
    'address': string;
    'type'?: string;
    'metadata'?: any;
    'volumes'?: { [key: string]: { [key: string]: number; }; };
    'balances'?: { [key: string]: number; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "{ [key: string]: { [key: string]: number; }; }",
            "format": "int64"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "{ [key: string]: number; }",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return AccountWithVolumesAndBalances.attributeTypeMap;
    }

    public constructor() {
    }
}

