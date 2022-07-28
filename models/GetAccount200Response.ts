/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.0-rc.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { HttpFile } from '../http/http';

export class GetAccount200Response {
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
        return GetAccount200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

