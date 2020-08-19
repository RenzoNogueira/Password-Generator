class Password {
    text = ""
    charactersNumeric = "1234567890"
    charactersEasy = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    TaractersMedium = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*()_+{}^~/?;:.>,<\|¹²³£5¬780-=ªº°"
    charactersHard = "☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼◄↕‼¶§▬↨↑↓→←∟↔▲▼A\"#$%&amp;'()*+,-./0123456789:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~Δ€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■"
}

window.onload = _ => {
    const NUMBER_OF_PASSWORDS = document.querySelector("#password-quantities")

    NUMBER_OF_PASSWORDS.addEventListener("input", _ => {
        document.querySelector("#numberOfPasswordsGenerated").innerText = NUMBER_OF_PASSWORDS.value
    })
}

function generatePassword() {
    const PASSWORDS = []
    const TABLEPASWORDS = document.querySelector("tbody")
    const PASSWORD_LENGT = document.querySelector("#password-length").value
    const NUMBER_OF_PASSWORDS = document.querySelector("#password-quantities").value
    const PASSWORD_TYPE = document.querySelector("#password-type").value

    console.log({
        PASSWORD_LENGT: PASSWORD_LENGT,
        NUMBER_OF_PASSWORDS: NUMBER_OF_PASSWORDS,
        PASSWORD_TYPE: PASSWORD_TYPE
    })

    for (let number_of_passwords = 1; number_of_passwords <= NUMBER_OF_PASSWORDS; number_of_passwords++) {
        TABLEPASWORDS.innerHTML = ""
        const password = new Password()
        for (let characters = 0; characters < PASSWORD_LENGT; characters++) {
            let POSITION = 0
            switch (PASSWORD_TYPE) {
                case "1":
                    POSITION = Math.floor(Math.random() * (password.charactersNumeric.length));
                    password.text += password.charactersNumeric[POSITION]
                    break
                case "2":
                    POSITION = Math.floor(Math.random() * (password.charactersEasy.length));
                    password.text += password.charactersEasy[POSITION]
                    break
                case "3":
                    POSITION = Math.floor(Math.random() * (password.charactersHard.length));
                    password.text += password.charactersHard[POSITION]
                    break
            }
        }
        PASSWORDS.push(password.text)
        PASSWORDS.forEach(function (element, index) {
            tr = document.createElement("tr")
            th = document.createElement("th")
            td = document.createElement("td")
            th.innerText = index + 1
            td.innerText = element
            tr.appendChild(th)
            tr.appendChild(td)
            TABLEPASWORDS.appendChild(tr)
        })
    }

    // for(){
    //     const ELEMENT_TH = document.createElement("tr")
    //     const ELEMENT_TH = document.createElement("th")
    //     const ELEMENT_TH = document.createElement("td")
    // }
}