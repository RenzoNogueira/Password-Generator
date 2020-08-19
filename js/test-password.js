
var PASSWORD
window.onload = _ => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var senha = url.searchParams.get("senha");

    PASSWORD = senha
    console.log({
        PASSWORD: PASSWORD
    })
}

function testPassword() {
    const PASSWORD_FIELD = document.querySelector("#password")
    if(PASSWORD_FIELD.value === PASSWORD){
        PASSWORD_FIELD.classList.remove("is-invalid");
        PASSWORD_FIELD.classList.add("is-valid");
        
    } else {
        PASSWORD_FIELD.classList.remove("is-valid");
        PASSWORD_FIELD.classList.add("is-invalid");
    }
}