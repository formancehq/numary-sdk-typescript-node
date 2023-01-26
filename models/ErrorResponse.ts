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

import { ErrorsEnum } from '../models/ErrorsEnum';
import { HttpFile } from '../http/http';

export class ErrorResponse {
    'errorCode'?: ErrorsEnum;
    'errorMessage'?: string;
    'details'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "ErrorsEnum",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ErrorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



