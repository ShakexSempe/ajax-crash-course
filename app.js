// HTTP statuses
    // 200: "OK"
    // 403: "forbidden"
    // 404: "not found"
    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
        
// create event listener
document.getElementById('button')
    .addEventListener("click", loadText);
// load text ()
function loadText() {
    // create XHR object
    const xhr = new XMLHttpRequest();
    // open() 3 params: -type, url/filename, async

    xhr.open('GET', 'sample.txt', true);
    console.log('READYSTATE: ', xhr.readyState)
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
        }
    }

    // xhr.onload = function() {
    //     if(this.status == 200) {
    //     }
    // }

    // sends request
    xhr.send();
}
// end of load text ()
        
        
        
        
