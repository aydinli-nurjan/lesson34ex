const email_List = []
const user_List = []


res()

function res(){
    demo.innerHTML = localStorage.getItem('register')
    del.innerHTML = localStorage.getItem('user')
}

function removeLocal(){
    demo.innerHTML = localStorage.getItem('register')
    res()
}

function removeLocalUser(){
    localStorage.removeItem('user')
    res()
}

function removeLocalAll(){
    localStorage.clear()
    res()
}



function createEmail() {
    var username = document.getElementById("user").value;
    var email = document.getElementById("new_email").value;

    if (username && email) {
        var table = document.getElementById("userTableBody");
        var newRow = table.insertRow();

        var firstNameCell = newRow.insertCell(0);
        var lastNameCell = newRow.insertCell(1);
        var emailCell = newRow.insertCell(2);

        var nameParts = username.split(' ');
        firstNameCell.innerHTML = nameParts[0];
        lastNameCell.innerHTML = nameParts[1] || '';
        emailCell.innerHTML = email;

        document.getElementById("user").value = '';
        document.getElementById("new_email").value = '';
    } else {
        alert("Please enter both username and email.");
    }
}

// function removeLocal() {
//     document.getElementById("new_email").value = '';
// }

// function removeLocalUser() {
//     document.getElementById("user").value = '';
// }