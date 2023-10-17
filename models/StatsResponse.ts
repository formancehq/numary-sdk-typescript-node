/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Stats } from '../models/Stats';
import { HttpFile } from '../http/http';

export class StatsResponse {
    'data': Stats;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Stats",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StatsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

