// load text ()
loadText = () => {
    // create XHR object
    const xhr = new XMLHttpRequest();
    // open() 3 params: -type, url/filename, async
    xhr.open('GET', 'sample.txt', true);
    console.log('READYSTATE: ', xhr.readyState);

    // OPTIONAL - used for loaders
    xhr.onprogress = () => {
        console.log('READYSTATE: ', xhr.readyState);
    }

    xhr.onload = () => {
        console.log('READYSTATE: ', xhr.readyState);
        if (xhr.status == 200) {
            document.getElementById("text").innerHTML = xhr.responseText;
        } else if (xhr.status == 404) {
            document.body.style.backgroundColor = 'red';
            document.getElementById("text").innerHTML = 'Not Found';
        }
    }

    xhr.onerror = () => {
        console.log('request error..');
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

// create event listener
document.getElementById('button')
    .addEventListener("click", loadText);
// end of event listener