/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.0-rc.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetBalances200ResponseCursor } from './GetBalances200ResponseCursor';
import { HttpFile } from '../http/http';

export class GetBalances200Response {
    'cursor': GetBalances200ResponseCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "GetBalances200ResponseCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetBalances200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

