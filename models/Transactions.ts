/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.10.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TransactionData } from '../models/TransactionData';
import { HttpFile } from '../http/http';

export class Transactions {
    'transactions': Array<TransactionData>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<TransactionData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transactions.attributeTypeMap;
    }

    public constructor() {
    }
}

