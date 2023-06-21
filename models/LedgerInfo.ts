/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LedgerInfoStorage } from '../models/LedgerInfoStorage';
import { HttpFile } from '../http/http';

export class LedgerInfo {
    'name'?: string;
    'storage'?: LedgerInfoStorage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "LedgerInfoStorage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LedgerInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

