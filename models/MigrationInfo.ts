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

import { HttpFile } from '../http/http';

export class MigrationInfo {
    'version'?: number;
    'name'?: string;
    'date'?: Date;
    'state'?: MigrationInfoStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "MigrationInfoStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MigrationInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MigrationInfoStateEnum = "to do" | "done" ;

