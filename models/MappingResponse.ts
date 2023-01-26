/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.0-rc.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Mapping } from '../models/Mapping';
import { HttpFile } from '../http/http';

export class MappingResponse {
    'data'?: Mapping;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Mapping",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MappingResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

