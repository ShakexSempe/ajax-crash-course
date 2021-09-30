# ajax-crash-course
vanilla javascript AJAX fundementals: presented by Brad Traversy

## HTTP STATUSES
    // 200: "OK"
    // 403: "forbidden"
    // 404: "not found"

## readyState VALUES
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

<!-- asynchronous request -->
## create request
    new XMLHttpRequest();
        constructor has no arguments

## initialize: open() 
### .open(method, url, async)
- open() configures request,
- network activity starts with call of send();
<!-- end of asynchronous request -->
