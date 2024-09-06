function validate() {
    var up = /^[A-Za-z]+$/;  // Only letters allowed
    var uv = document.getElementById('uname').value;  // Get the username input
    
    if (uv == "") {
        document.getElementById('msg').innerHTML = "Enter the user name.";  // Show error if empty
        return false;
    } else if (!up.test(uv)) {
        document.getElementById('msg').innerHTML = "Username must contain only letters.";  // Show error if invalid
        return false;
    }

    document.getElementById('msg').innerHTML = "";  // Clear message if valid
    return true;
}

       