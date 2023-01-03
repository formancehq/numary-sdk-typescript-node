/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.0-beta.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ErrorsEnum } from '../models/ErrorsEnum';
import { Transaction } from '../models/Transaction';
import { HttpFile } from '../http/http';

export class ScriptResult {
    'errorCode'?: ErrorsEnum;
    'errorMessage'?: string;
    'details'?: string;
    'transaction'?: Transaction;
    'errorCode'?: ScriptResultErrorCodeEnum;
    'errorMessage'?: string;

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
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction",
            "format": ""
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "ScriptResultErrorCodeEnum",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScriptResult.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ScriptResultErrorCodeEnum = "INTERNAL" | "INSUFFICIENT_FUND" | "VALIDATION" | "CONFLICT" | "NO_SCRIPT" | "COMPILATION_FAILED" | "METADATA_OVERRIDE" ;

