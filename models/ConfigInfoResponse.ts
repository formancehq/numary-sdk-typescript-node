/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConfigInfo } from '../models/ConfigInfo';
import { HttpFile } from '../http/http';

export class ConfigInfoResponse {
    'data': ConfigInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ConfigInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConfigInfoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

