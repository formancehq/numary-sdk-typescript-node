# ledger.LedgerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetadataOnTransaction**](LedgerApi.md#addMetadataOnTransaction) | **POST** /{ledger}/transactions/{txid}/metadata | Set the metadata of a transaction by its ID
[**addMetadataToAccount**](LedgerApi.md#addMetadataToAccount) | **POST** /{ledger}/accounts/{address}/metadata | Add metadata to an account
[**countAccounts**](LedgerApi.md#countAccounts) | **HEAD** /{ledger}/accounts | Count the accounts from a ledger
[**countTransactions**](LedgerApi.md#countTransactions) | **HEAD** /{ledger}/transactions | Count the transactions from a ledger
[**createTransaction**](LedgerApi.md#createTransaction) | **POST** /{ledger}/transactions | Create a new transaction to a ledger
[**createTransactions**](LedgerApi.md#createTransactions) | **POST** /{ledger}/transactions/batch | Create a new batch of transactions to a ledger
[**getAccount**](LedgerApi.md#getAccount) | **GET** /{ledger}/accounts/{address} | Get account by its address
[**getBalances**](LedgerApi.md#getBalances) | **GET** /{ledger}/balances | Get the balances from a ledger&#39;s account
[**getBalancesAggregated**](LedgerApi.md#getBalancesAggregated) | **GET** /{ledger}/aggregate/balances | Get the aggregated balances from selected accounts
[**getInfo**](LedgerApi.md#getInfo) | **GET** /_info | Show server information
[**getLedgerInfo**](LedgerApi.md#getLedgerInfo) | **GET** /{ledger}/_info | Get information about a ledger
[**getMapping**](LedgerApi.md#getMapping) | **GET** /{ledger}/mapping | Get the mapping of a ledger
[**getTransaction**](LedgerApi.md#getTransaction) | **GET** /{ledger}/transactions/{txid} | Get transaction from a ledger by its ID
[**listAccounts**](LedgerApi.md#listAccounts) | **GET** /{ledger}/accounts | List accounts from a ledger
[**listLogs**](LedgerApi.md#listLogs) | **GET** /{ledger}/logs | List the logs from a ledger
[**listTransactions**](LedgerApi.md#listTransactions) | **GET** /{ledger}/transactions | List transactions from a ledger
[**readStats**](LedgerApi.md#readStats) | **GET** /{ledger}/stats | Get statistics from a ledger
[**revertTransaction**](LedgerApi.md#revertTransaction) | **POST** /{ledger}/transactions/{txid}/revert | Revert a ledger transaction by its ID
[**runScript**](LedgerApi.md#runScript) | **POST** /{ledger}/script | Execute a Numscript
[**updateMapping**](LedgerApi.md#updateMapping) | **PUT** /{ledger}/mapping | Update the mapping of a ledger


# **addMetadataOnTransaction**
> void addMetadataOnTransaction()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiAddMetadataOnTransactionRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | Transaction ID.
  txid: 1234,
  // { [key: string]: any; } | metadata (optional)
  requestBody: {
    "key": null,
  },
};

apiInstance.addMetadataOnTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**| metadata |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **txid** | [**number**] | Transaction ID. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addMetadataToAccount**
> void addMetadataToAccount(requestBody)


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiAddMetadataToAccountRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Exact address of the account. It must match the following regular expressions pattern: ``` ^\\w+(:\\w+)*$ ``` 
  address: "users:001",
  // { [key: string]: any; } | metadata
  requestBody: {
    "key": null,
  },
};

apiInstance.addMetadataToAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**| metadata |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60;  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countAccounts**
> void countAccounts()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiCountAccountsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Filter accounts by address pattern (regular expression placed between ^ and $). (optional)
  address: "users:.+",
  // any | Filter accounts by metadata key value pairs. The filter can be used like this metadata[key]=value1&metadata[a.nested.key]=value2 (optional)
  metadata: {},
};

apiInstance.countAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Filter accounts by address pattern (regular expression placed between ^ and $). | (optional) defaults to undefined
 **metadata** | **any** | Filter accounts by metadata key value pairs. The filter can be used like this metadata[key]&#x3D;value1&amp;metadata[a.nested.key]&#x3D;value2 | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Count -  <br>  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countTransactions**
> void countTransactions()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiCountTransactionsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Filter transactions by reference field. (optional)
  reference: "ref:001",
  // string | Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $). (optional)
  account: "users:001",
  // string | Filter transactions with postings involving given account at source (regular expression placed between ^ and $). (optional)
  source: "users:001",
  // string | Filter transactions with postings involving given account at destination (regular expression placed between ^ and $). (optional)
  destination: "users:001",
  // Date | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \"2023-01-02T15:04:01Z\" includes the first second of 4th minute).  (optional)
  startTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \"2023-01-02T15:04:01Z\" includes the first second of 4th minute). Deprecated, please use `startTime` instead.  (optional)
  startTime2: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \"2023-01-02T15:04:01Z\" excludes the first second of 4th minute).  (optional)
  endTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \"2023-01-02T15:04:01Z\" excludes the first second of 4th minute). Deprecated, please use `endTime` instead.  (optional)
  endTime2: new Date('1970-01-01T00:00:00.00Z'),
  // any | Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below. (optional)
  metadata: {},
};

apiInstance.countTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **reference** | [**string**] | Filter transactions by reference field. | (optional) defaults to undefined
 **account** | [**string**] | Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $). | (optional) defaults to undefined
 **source** | [**string**] | Filter transactions with postings involving given account at source (regular expression placed between ^ and $). | (optional) defaults to undefined
 **destination** | [**string**] | Filter transactions with postings involving given account at destination (regular expression placed between ^ and $). | (optional) defaults to undefined
 **startTime** | [**Date**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute).  | (optional) defaults to undefined
 **startTime2** | [**Date**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). Deprecated, please use &#x60;startTime&#x60; instead.  | (optional) defaults to undefined
 **endTime** | [**Date**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute).  | (optional) defaults to undefined
 **endTime2** | [**Date**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). Deprecated, please use &#x60;endTime&#x60; instead.  | (optional) defaults to undefined
 **metadata** | **any** | Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Count -  <br>  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTransaction**
> TransactionsResponse createTransaction(postTransaction)


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiCreateTransactionRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // PostTransaction | The request body must contain at least one of the following objects:   - `postings`: suitable for simple transactions   - `script`: enabling more complex transactions with Numscript 
  postTransaction: {
    timestamp: new Date('1970-01-01T00:00:00.00Z'),
    postings: [
      {
        amount: 100,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    script: {
      plain: `vars {
account $user
}
send [COIN 10] (
	source = @world
	destination = $user
)
`,
      vars: {},
    },
    reference: "ref:001",
    metadata: {
      "key": null,
    },
  },
  // boolean | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker. (optional)
  preview: true,
};

apiInstance.createTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postTransaction** | **PostTransaction**| The request body must contain at least one of the following objects:   - &#x60;postings&#x60;: suitable for simple transactions   - &#x60;script&#x60;: enabling more complex transactions with Numscript  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **preview** | [**boolean**] | Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker. | (optional) defaults to undefined


### Return type

**TransactionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTransactions**
> TransactionsResponse createTransactions(transactions)


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiCreateTransactionsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // Transactions
  transactions: {
    transactions: [
      {
        postings: [
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        metadata: {
          "key": null,
        },
        timestamp: new Date('1970-01-01T00:00:00.00Z'),
      },
    ],
  },
};

apiInstance.createTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactions** | **Transactions**|  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined


### Return type

**TransactionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccount**
> AccountResponse getAccount()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiGetAccountRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Exact address of the account. It must match the following regular expressions pattern: ``` ^\\w+(:\\w+)*$ ``` 
  address: "users:001",
};

apiInstance.getAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60;  | defaults to undefined


### Return type

**AccountResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalances**
> BalancesCursorResponse getBalances()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiGetBalancesRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Filter balances involving given account, either as source or destination. (optional)
  address: "users:001",
  // string | Pagination cursor, will return accounts after given address, in descending order. (optional)
  after: "users:003",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  (optional)
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  // string | Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. Deprecated, please use `cursor` instead. (optional)
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

apiInstance.getBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Filter balances involving given account, either as source or destination. | (optional) defaults to undefined
 **after** | [**string**] | Pagination cursor, will return accounts after given address, in descending order. | (optional) defaults to undefined
 **cursor** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. Deprecated, please use &#x60;cursor&#x60; instead. | (optional) defaults to undefined


### Return type

**BalancesCursorResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalancesAggregated**
> AggregateBalancesResponse getBalancesAggregated()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiGetBalancesAggregatedRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // string | Filter balances involving given account, either as source or destination. (optional)
  address: "users:001",
};

apiInstance.getBalancesAggregated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **address** | [**string**] | Filter balances involving given account, either as source or destination. | (optional) defaults to undefined


### Return type

**AggregateBalancesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInfo**
> ConfigInfoResponse getInfo()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:any = {};

apiInstance.getInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ConfigInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLedgerInfo**
> LedgerInfoResponse getLedgerInfo()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiGetLedgerInfoRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
};

apiInstance.getLedgerInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined


### Return type

**LedgerInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMapping**
> MappingResponse getMapping()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiGetMappingRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
};

apiInstance.getMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined


### Return type

**MappingResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransaction**
> TransactionResponse getTransaction()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiGetTransactionRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | Transaction ID.
  txid: 1234,
};

apiInstance.getTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **txid** | [**number**] | Transaction ID. | defaults to undefined


### Return type

**TransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAccounts**
> AccountsCursorResponse listAccounts()

List accounts from a ledger, sorted by address in descending order.

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiListAccountsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | The maximum number of results to return per page.  (optional)
  pageSize: 100,
  // number | The maximum number of results to return per page. Deprecated, please use `pageSize` instead.  (optional)
  pageSize2: 100,
  // string | Pagination cursor, will return accounts after given address, in descending order. (optional)
  after: "users:003",
  // string | Filter accounts by address pattern (regular expression placed between ^ and $). (optional)
  address: "users:.+",
  // any | Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below. (optional)
  metadata: {},
  // number | Filter accounts by their balance (default operator is gte) (optional)
  balance: 2400,
  // 'gte' | 'lte' | 'gt' | 'lt' | 'e' | 'ne' | Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.  (optional)
  balanceOperator: "gte",
  // 'gte' | 'lte' | 'gt' | 'lt' | 'e' | 'ne' | Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not. Deprecated, please use `balanceOperator` instead.  (optional)
  balanceOperator2: "gte",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  (optional)
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use `cursor` instead.  (optional)
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

apiInstance.listAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **pageSize** | [**number**] | The maximum number of results to return per page.  | (optional) defaults to 15
 **pageSize2** | [**number**] | The maximum number of results to return per page. Deprecated, please use &#x60;pageSize&#x60; instead.  | (optional) defaults to 15
 **after** | [**string**] | Pagination cursor, will return accounts after given address, in descending order. | (optional) defaults to undefined
 **address** | [**string**] | Filter accounts by address pattern (regular expression placed between ^ and $). | (optional) defaults to undefined
 **metadata** | **any** | Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below. | (optional) defaults to undefined
 **balance** | [**number**] | Filter accounts by their balance (default operator is gte) | (optional) defaults to undefined
 **balanceOperator** | [**&#39;gte&#39; | &#39;lte&#39; | &#39;gt&#39; | &#39;lt&#39; | &#39;e&#39; | &#39;ne&#39;**]**Array<&#39;gte&#39; &#124; &#39;lte&#39; &#124; &#39;gt&#39; &#124; &#39;lt&#39; &#124; &#39;e&#39; &#124; &#39;ne&#39; &#124; &#39;11184809&#39;>** | Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.  | (optional) defaults to undefined
 **balanceOperator2** | [**&#39;gte&#39; | &#39;lte&#39; | &#39;gt&#39; | &#39;lt&#39; | &#39;e&#39; | &#39;ne&#39;**]**Array<&#39;gte&#39; &#124; &#39;lte&#39; &#124; &#39;gt&#39; &#124; &#39;lt&#39; &#124; &#39;e&#39; &#124; &#39;ne&#39; &#124; &#39;11184809&#39;>** | Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not. Deprecated, please use &#x60;balanceOperator&#x60; instead.  | (optional) defaults to undefined
 **cursor** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use &#x60;cursor&#x60; instead.  | (optional) defaults to undefined


### Return type

**AccountsCursorResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLogs**
> LogsCursorResponse listLogs()

List the logs from a ledger, sorted by ID in descending order.

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiListLogsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | The maximum number of results to return per page.  (optional)
  pageSize: 100,
  // number | The maximum number of results to return per page. Deprecated, please use `pageSize` instead.  (optional)
  pageSize2: 100,
  // string | Pagination cursor, will return the logs after a given ID. (in descending order). (optional)
  after: "1234",
  // Date | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \"2023-01-02T15:04:01Z\" includes the first second of 4th minute).  (optional)
  startTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \"2023-01-02T15:04:01Z\" includes the first second of 4th minute). Deprecated, please use `startTime` instead.  (optional)
  startTime2: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \"2023-01-02T15:04:01Z\" excludes the first second of 4th minute).  (optional)
  endTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \"2023-01-02T15:04:01Z\" excludes the first second of 4th minute). Deprecated, please use `endTime` instead.  (optional)
  endTime2: new Date('1970-01-01T00:00:00.00Z'),
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  (optional)
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use `cursor` instead.  (optional)
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

apiInstance.listLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **pageSize** | [**number**] | The maximum number of results to return per page.  | (optional) defaults to 15
 **pageSize2** | [**number**] | The maximum number of results to return per page. Deprecated, please use &#x60;pageSize&#x60; instead.  | (optional) defaults to 15
 **after** | [**string**] | Pagination cursor, will return the logs after a given ID. (in descending order). | (optional) defaults to undefined
 **startTime** | [**Date**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute).  | (optional) defaults to undefined
 **startTime2** | [**Date**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). Deprecated, please use &#x60;startTime&#x60; instead.  | (optional) defaults to undefined
 **endTime** | [**Date**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute).  | (optional) defaults to undefined
 **endTime2** | [**Date**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). Deprecated, please use &#x60;endTime&#x60; instead.  | (optional) defaults to undefined
 **cursor** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use &#x60;cursor&#x60; instead.  | (optional) defaults to undefined


### Return type

**LogsCursorResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTransactions**
> TransactionsCursorResponse listTransactions()

List transactions from a ledger, sorted by txid in descending order.

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiListTransactionsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | The maximum number of results to return per page.  (optional)
  pageSize: 100,
  // number | The maximum number of results to return per page. Deprecated, please use `pageSize` instead.  (optional)
  pageSize2: 100,
  // string | Pagination cursor, will return transactions after given txid (in descending order). (optional)
  after: "1234",
  // string | Find transactions by reference field. (optional)
  reference: "ref:001",
  // string | Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $). (optional)
  account: "users:001",
  // string | Filter transactions with postings involving given account at source (regular expression placed between ^ and $). (optional)
  source: "users:001",
  // string | Filter transactions with postings involving given account at destination (regular expression placed between ^ and $). (optional)
  destination: "users:001",
  // Date | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \"2023-01-02T15:04:01Z\" includes the first second of 4th minute).  (optional)
  startTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \"2023-01-02T15:04:01Z\" includes the first second of 4th minute). Deprecated, please use `startTime` instead.  (optional)
  startTime2: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \"2023-01-02T15:04:01Z\" excludes the first second of 4th minute).  (optional)
  endTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \"2023-01-02T15:04:01Z\" excludes the first second of 4th minute). Deprecated, please use `endTime` instead.  (optional)
  endTime2: new Date('1970-01-01T00:00:00.00Z'),
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  (optional)
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use `cursor` instead.  (optional)
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  // any | Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below. (optional)
  metadata: {},
};

apiInstance.listTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **pageSize** | [**number**] | The maximum number of results to return per page.  | (optional) defaults to 15
 **pageSize2** | [**number**] | The maximum number of results to return per page. Deprecated, please use &#x60;pageSize&#x60; instead.  | (optional) defaults to 15
 **after** | [**string**] | Pagination cursor, will return transactions after given txid (in descending order). | (optional) defaults to undefined
 **reference** | [**string**] | Find transactions by reference field. | (optional) defaults to undefined
 **account** | [**string**] | Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $). | (optional) defaults to undefined
 **source** | [**string**] | Filter transactions with postings involving given account at source (regular expression placed between ^ and $). | (optional) defaults to undefined
 **destination** | [**string**] | Filter transactions with postings involving given account at destination (regular expression placed between ^ and $). | (optional) defaults to undefined
 **startTime** | [**Date**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute).  | (optional) defaults to undefined
 **startTime2** | [**Date**] | Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; includes the first second of 4th minute). Deprecated, please use &#x60;startTime&#x60; instead.  | (optional) defaults to undefined
 **endTime** | [**Date**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute).  | (optional) defaults to undefined
 **endTime2** | [**Date**] | Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, \&quot;2023-01-02T15:04:01Z\&quot; excludes the first second of 4th minute). Deprecated, please use &#x60;endTime&#x60; instead.  | (optional) defaults to undefined
 **cursor** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.  | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set. Deprecated, please use &#x60;cursor&#x60; instead.  | (optional) defaults to undefined
 **metadata** | **any** | Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below. | (optional) defaults to undefined


### Return type

**TransactionsCursorResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readStats**
> StatsResponse readStats()

Get statistics from a ledger. (aggregate metrics on accounts and transactions) 

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiReadStatsRequest = {
  // string | name of the ledger
  ledger: "ledger001",
};

apiInstance.readStats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | name of the ledger | defaults to undefined


### Return type

**StatsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revertTransaction**
> TransactionResponse revertTransaction()


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiRevertTransactionRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | Transaction ID.
  txid: 1234,
  // boolean | Allow to disable balances checks (optional)
  disableChecks: true,
};

apiInstance.revertTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **txid** | [**number**] | Transaction ID. | defaults to undefined
 **disableChecks** | [**boolean**] | Allow to disable balances checks | (optional) defaults to undefined


### Return type

**TransactionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **runScript**
> ScriptResponse runScript(script)

This route is deprecated, and has been merged into `POST /{ledger}/transactions`. 

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiRunScriptRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // Script
  script: {
    plain: `vars {
account $user
}
send [COIN 10] (
	source = @world
	destination = $user
)
`,
    vars: {},
    reference: "order_1234",
    metadata: {
      "key": null,
    },
  },
  // boolean | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker. (optional)
  preview: true,
};

apiInstance.runScript(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **script** | **Script**|  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined
 **preview** | [**boolean**] | Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker. | (optional) defaults to undefined


### Return type

**ScriptResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On success, it will return a 200 status code, and the resulting transaction under the &#x60;transaction&#x60; field.  On failure, it will also return a 200 status code, and the following fields:   - &#x60;details&#x60;: contains a URL. When there is an error parsing Numscript, the result can be difficult to read—the provided URL will render the error in an easy-to-read format.   - &#x60;errorCode&#x60; and &#x60;error_code&#x60; (deprecated): contains the string code of the error   - &#x60;errorMessage&#x60; and &#x60;error_message&#x60; (deprecated): contains a human-readable indication of what went wrong, for example that an account had insufficient funds, or that there was an error in the provided Numscript.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMapping**
> MappingResponse updateMapping(mapping)


### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LedgerApi(configuration);

let body:ledger.LedgerApiUpdateMappingRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // Mapping
  mapping: {
    contracts: [
      {
        account: "users:001",
        expr: {},
      },
    ],
  },
};

apiInstance.updateMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapping** | **Mapping**|  |
 **ledger** | [**string**] | Name of the ledger. | defaults to undefined


### Return type

**MappingResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


