/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.0-beta.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListTransactions200ResponseCursor } from './ListTransactions200ResponseCursor';
import { HttpFile } from '../http/http';

export class ListTransactions200Response {
    'cursor': ListTransactions200ResponseCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "ListTransactions200ResponseCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListTransactions200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

