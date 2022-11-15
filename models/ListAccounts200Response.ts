/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListAccounts200ResponseCursor } from '../models/ListAccounts200ResponseCursor';
import { HttpFile } from '../http/http';

export class ListAccounts200Response {
    'cursor': ListAccounts200ResponseCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "ListAccounts200ResponseCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAccounts200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

