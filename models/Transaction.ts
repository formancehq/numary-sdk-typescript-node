/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.9.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Posting } from '../models/Posting';
import { Volume } from '../models/Volume';
import { HttpFile } from '../http/http';

export class Transaction {
    'timestamp': Date;
    'postings': Array<Posting>;
    'reference'?: string;
    'metadata'?: { [key: string]: any; };
    'txid': number;
    'preCommitVolumes'?: { [key: string]: { [key: string]: Volume; }; };
    'postCommitVolumes'?: { [key: string]: { [key: string]: Volume; }; };

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
            "name": "txid",
            "baseName": "txid",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "preCommitVolumes",
            "baseName": "preCommitVolumes",
            "type": "{ [key: string]: { [key: string]: Volume; }; }",
            "format": ""
        },
        {
            "name": "postCommitVolumes",
            "baseName": "postCommitVolumes",
            "type": "{ [key: string]: { [key: string]: Volume; }; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }

    public constructor() {
    }
}

