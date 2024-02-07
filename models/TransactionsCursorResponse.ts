/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.15-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TransactionsCursorResponseCursor } from '../models/TransactionsCursorResponseCursor';
import { HttpFile } from '../http/http';

export class TransactionsCursorResponse {
    'cursor': TransactionsCursorResponseCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "TransactionsCursorResponseCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionsCursorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

