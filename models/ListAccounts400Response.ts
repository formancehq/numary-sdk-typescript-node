/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.8.0-beta.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ListAccounts400Response {
    'errorCode': string;
    'errorMessage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAccounts400Response.attributeTypeMap;
    }

    public constructor() {
    }
}

