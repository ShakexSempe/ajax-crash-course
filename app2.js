// VARIABLES
const xhr = new XMLHttpRequest();
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


// FUNCTIONS
loadUser = () => {
    xhr.open('GET', 'user.json', true);

    xhr.onload = () => {
        if(xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            console.log(user.name);

            // ES5 method
            let output = '';
            output += '<ul>' +
                '<li>ID: '+user.id+'</li>' +
                '<li>Name: '+user.id+'</li>' +
                '<li>Email: '+user.email+'</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
            // end of ES5 method
        }
    }

    xhr.send();
}

// BUTTON EVENT LISTENERS
btn1.addEventListener("click", loadUser);
