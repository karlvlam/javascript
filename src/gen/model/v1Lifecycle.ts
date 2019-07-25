/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1Handler } from './v1Handler';

/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
*/
export class V1Lifecycle {
    'postStart'?: V1Handler;
    'preStop'?: V1Handler;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "V1Handler"
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "V1Handler"
        }    ];

    static getAttributeTypeMap() {
        return V1Lifecycle.attributeTypeMap;
    }
}
