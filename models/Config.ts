/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.0-beta.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LedgerStorage } from '../models/LedgerStorage';
import { HttpFile } from '../http/http';

export class Config {
    'storage': LedgerStorage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "storage",
            "baseName": "storage",
            "type": "LedgerStorage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Config.attributeTypeMap;
    }

    public constructor() {
    }
}

