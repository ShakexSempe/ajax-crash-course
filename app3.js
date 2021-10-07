loadUsers = () => {
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = () => {
        if(xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            let output ='';

            for(let i in users) {
                output += 
                        '<div class="user">' + 
                            '<img src="'+users[i].avatar_url+'" width="70" height="70">'+
                            '<ul>' + 
                            '<li>ID: '+users[i].id+'<li>' +
                            '<li>Login: '+users[i].login+'<li>' +
                            '</ul>' +
                        '</div>'
            }

            document.getElementById("users").innerHTML = output;
        }
    }


    xhr.send();
}

document.getElementById("button").addEventListener("click", loadUsers);
