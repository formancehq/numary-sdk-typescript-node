# ledger.LogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLogs**](LogsApi.md#listLogs) | **GET** /{ledger}/log | List the logs from a ledger.


# **listLogs**
> LogsCursorResponse listLogs()

List the logs from a ledger, sorted by ID in descending order.

### Example


```typescript
import { ledger } from '@numaryhq/ledger-nodejs';
import * as fs from 'fs';

const configuration = ledger.createConfiguration();
const apiInstance = new ledger.LogsApi(configuration);

let body:ledger.LogsApiListLogsRequest = {
  // string | Name of the ledger.
  ledger: "ledger001",
  // number | The maximum number of results to return per page (optional)
  pageSize: 15,
  // string | Pagination cursor, will return the logs after a given ID. (in descending order). (optional)
  after: "1234",
  // string | Filter logs that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute).  (optional)
  startTime: "start_time_example",
  // string | Filter logs that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute).  (optional)
  endTime: "end_time_example",
  // string | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set.  (optional)
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
 **pageSize** | [**number**] | The maximum number of results to return per page | (optional) defaults to 15
 **after** | [**string**] | Pagination cursor, will return the logs after a given ID. (in descending order). | (optional) defaults to undefined
 **startTime** | [**string**] | Filter logs that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute).  | (optional) defaults to undefined
 **endTime** | [**string**] | Filter logs that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute).  | (optional) defaults to undefined
 **paginationToken** | [**string**] | Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set.  | (optional) defaults to undefined


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


