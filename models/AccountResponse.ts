/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.0-rc.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { HttpFile } from '../http/http';

export class AccountResponse {
    'data': AccountWithVolumesAndBalances;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AccountWithVolumesAndBalances",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

