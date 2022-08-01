    function verifyPassword() {
        var pw = document.getElementById("pswd").value;
        if (pw == "4281") {
            document.getElementById("message").innerHTML = "Yay";
            return true;
        }
        else {
            return false;
        }
    }
