/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MigrationInfo } from '../models/MigrationInfo';
import { HttpFile } from '../http/http';

export class LedgerInfoStorage {
    'migrations'?: Array<MigrationInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "migrations",
            "baseName": "migrations",
            "type": "Array<MigrationInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LedgerInfoStorage.attributeTypeMap;
    }

    public constructor() {
    }
}

