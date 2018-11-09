document.onkeydown = function(e) {
    var key_code = e.which;
    var key = String.fromCharCode(key_code);
    var keycode_p = document.getElementsByClassName("keycode")[0]
        .getElementsByTagName("span")[0];
    var key_p = document.getElementsByClassName("key")[0]
        .getElementsByTagName("span")[0];
    keycode_p.innerHTML = key_code;
    key_p.innerHTML = key;
}