/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BalancesCursorResponseCursor } from '../models/BalancesCursorResponseCursor';
import { HttpFile } from '../http/http';

export class BalancesCursorResponse {
    'cursor': BalancesCursorResponseCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "BalancesCursorResponseCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BalancesCursorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

