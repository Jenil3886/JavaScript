let name = document.getElementById("name");
let password = document.getElementById("password");

let form = document.getElementById("form");

let name_error = document.getElementById("name_error");
let password_error = document.getElementById("password_error")

 // validations //

form.addEventListener("submit", (e) => {

    if (name.value === '' || name.value == null) {
        e.preventDefault();
        name_error.innerHTML = "Username is required";
    }
    else{
        name_error.innerHTML = "";
    }


    if (password.value.length <= 5) {
        e.preventDefault();
        password_error.innerHTML = "Password must be more than 6 character";
    }else{
        password_error.innerHTML = "";
    }

    if (password.value.length >= 20) {
        e.preventDefault();
        password_error.innerHTML = "Password cannot be more than 20 character";
    }

    if (password.value === "password") {
        e.preventDefault();
        password_error.innerHTML = "Password cannot be password";
    }
})



// show and hide password //

let eyeicon = document.getElementById("eyeicon");


eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.className = "fa-regular fa-eye"
    }else{
        password.type = "password";
        eyeicon.className = "fa-regular fa-eye-slash"
    }
}