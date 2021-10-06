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
            console.log(xhr.responseText);
        }
    }

    xhr.send();
}

// BUTTON EVENT LISTENERS
btn1.addEventListener("click", loadUser);
