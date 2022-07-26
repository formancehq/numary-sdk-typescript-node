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

import { HttpFile } from '../http/http';

export class Script {
    /**
    * Reference to attach to the generated transaction
    */
    'reference'?: string;
    'metadata'?: { [key: string]: any; };
    'plain': string;
    'vars'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "plain",
            "baseName": "plain",
            "type": "string",
            "format": ""
        },
        {
            "name": "vars",
            "baseName": "vars",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Script.attributeTypeMap;
    }

    public constructor() {
    }
}

