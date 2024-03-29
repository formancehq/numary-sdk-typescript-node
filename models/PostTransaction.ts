/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PostTransactionScript } from '../models/PostTransactionScript';
import { Posting } from '../models/Posting';
import { HttpFile } from '../http/http';

export class PostTransaction {
    'timestamp'?: Date;
    'postings'?: Array<Posting>;
    'script'?: PostTransactionScript;
    'reference'?: string;
    'metadata'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "postings",
            "baseName": "postings",
            "type": "Array<Posting>",
            "format": ""
        },
        {
            "name": "script",
            "baseName": "script",
            "type": "PostTransactionScript",
            "format": ""
        },
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
        }    ];

    static getAttributeTypeMap() {
        return PostTransaction.attributeTypeMap;
    }

    public constructor() {
    }
}

