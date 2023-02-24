/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsCursorResponseCursor } from '../models/LogsCursorResponseCursor';
import { HttpFile } from '../http/http';

export class LogsCursorResponse {
    'cursor': LogsCursorResponseCursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "LogsCursorResponseCursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsCursorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

