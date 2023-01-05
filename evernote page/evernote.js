function validate() {
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");

    if (email.value.trim() == "") {
        email.style.border = "solid 3px red";
        document.getElementById("emailError").style.visibility = "visible";
        return false;
    }

    else if (pass.value.trim() == "") {
        pass.style.border = "solid 3px red";
        document.getElementById("passError").style.visibility = "visible";
        return false;
    }

    else if (pass.value.trim().length < 5) {
        pass.style.border = "solid 3px red";
        document.getElementById("passSmallError").style.visibility = "visible";
        return false;
    }

    else if (pass.value.trim().length > 20) {
        pass.style.border = "solid 3px red"
        document.getElementById("passLargeError").style.visibility = "visible";
    }

    else {
        return true;
    }
}