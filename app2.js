// VARIABLES
const xhr = new XMLHttpRequest();
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


// FUNCTIONS
loadUser = () => {
    xhr.open('GET', 'user.json', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            console.log(user.name);

            // ES5 method
            let output = '';
            output += '<ul>' +
                '<li>ID: ' + user.id + '</li>' +
                '<li>Name: ' + user.name + '</li>' +
                '<li>Email: ' + user.email + '</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
            // end of ES5 method
        }
    }

    xhr.send();
}

loadUsers = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = () => {
        if(xhr.status == 200) {
            let users = JSON.parse(xhr.responseText);
            let output = '';
            console.log(users);
            for(let i in users){
                output += '<ul>' +
                    '<li>ID: '+users[i].id+'</li>' +
                    '<li>Name: '+users[i].name+'</li>' +
                    '<li>Email: '+users[i].email+'</li>' +
                    '</ul>';
            }
            document.getElementById("users").innerHTML = output;
        }
    }

    xhr.send();
}
// BUTTON EVENT LISTENERS
btn1.addEventListener("click", loadUser);
btn2.addEventListener("click", loadUsers)