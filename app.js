// create event listener
document.getElementById('button')
    .addEventListener("click", loadText);
// load text ()
function loadText() {
    // create XHR object
    const xhr = new XMLHttpRequest();
    // open() 3 params: -type, url/filename, async
    xhr.open('GET', 'sample.txt', true);
    console.log('READYSTATE: ', xhr.readyState);
    xhr.onload = function() {
        console.log('READYSTATE: ', xhr.readyState);
        if(this.status == 200) {
        }
    }

    // on-ready-state-change method
    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // }
    // end of on-ready-state-change method



    // sends request
    xhr.send();
}
// end of load text ()