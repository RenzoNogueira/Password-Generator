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

    document.querySelector("#test-password").addEventListener("click", _ => {
        senha = prompt("Enter the password you want to test")
        senha != null ? window.location.href = `test-password.html?senha=${senha}` : false
    })
}

var CUSTOM_TEXT = ""

function generatePassword() {
    const PASSWORDS = []
    const TABLE_PASWORDS = document.querySelector("tbody")
    const PASSWORD_LENGT = document.querySelector("#password-length").value
    const NUMBER_OF_PASSWORDS = document.querySelector("#password-quantities").value
    const PASSWORD_TYPE = document.querySelector("#password-type").value
    let IS_CUSTOM = false
    // let CUSTOM_TEXT
    if (document.getElementsByName("custom-password")[0].checked) {
        IS_CUSTOM = true
        if (CUSTOM_TEXT === null) CUSTOM_TEXT = ""
        CUSTOM_TEXT = prompt("Enter a keyword", CUSTOM_TEXT)
    }


    console.log({
        PASSWORD_LENGT: PASSWORD_LENGT,
        NUMBER_OF_PASSWORDS: NUMBER_OF_PASSWORDS,
        PASSWORD_TYPE: PASSWORD_TYPE
    })

    for (let number_of_passwords = 1; number_of_passwords <= NUMBER_OF_PASSWORDS; number_of_passwords++) {
        TABLE_PASWORDS.innerHTML = ""
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
                    POSITION = Math.floor(Math.random() * (password.TaractersMedium.length));
                    password.text += password.TaractersMedium[POSITION]
                    break
                case "4":
                    POSITION = Math.floor(Math.random() * (password.charactersHard.length));
                    password.text += password.charactersHard[POSITION]
                    break
            }
        }
        if (IS_CUSTOM && PASSWORD_TYPE != 1) {
            for (let i = 0; i < CUSTOM_TEXT.length; i++) {
                password.text = password.text.replace(password.text[Math.floor(Math.random() *
                    (password.text.length))], (Math.floor(Math.random() * (1.1)) === 0 ? CUSTOM_TEXT[Math.floor(Math.random() *
                    (CUSTOM_TEXT.length))] : CUSTOM_TEXT[Math.floor(Math.random() * (CUSTOM_TEXT.length))].toUpperCase()))
            }
            password.text = password.text.replace(/ /g, "_")
        }
        PASSWORDS.push(password.text)
        PASSWORDS.forEach(function (element, index) {
            tr = document.createElement("tr")
            th = document.createElement("th")
            td1 = document.createElement("td")
            td2 = document.createElement("td")
            th.innerText = index + 1
            td1.innerText = element
            td2.innerText = checkPasswordStrength(element)
            tr.appendChild(th)
            tr.appendChild(td1)
            tr.appendChild(td2)
            TABLE_PASWORDS.appendChild(tr)
        })
    }
}

function checkPasswordStrength(senha) {
    // let forca = 0;
    // let mostra_res
    // if ((senha.length >= 4) && (senha.length <= 7)) {
    //     forca += 10;
    // } else if (senha.length > 7) {
    //     forca += 25;
    // }
    // if (senha.match(/[a-z]+/)) {
    //     forca += 10;
    // }
    // if (senha.match(/[A-Z]+/)) {
    //     forca += 20;
    // }
    // if (senha.match(/d+/)) {
    //     forca += 20;
    // }
    // if (senha.match(/W+/)) {
    //     forca += 25;
    // }

    // if (forca < 30) {
    //     mostra_res = "Weak"
    // } else if ((forca >= 30) && (forca < 60)) {
    //     mostra_res = "Good"
    // } else if ((forca >= 60) && (forca < 85)) {
    //     mostra_res = "Strong"
    // } else {
    //     mostra_res = "Great"
    // }

    // return mostra_res;

    var strPassword = senha;
    var charPassword = 0;
    var complexity = null;
    var minPasswordLength = 8;
    var baseScore = 0,
        score = 0;

    var num = {};
    num.Excess = 0;
    num.Upper = 0;
    num.Numbers = 0;
    num.Symbols = 0;

    var bonus = {};
    bonus.Excess = 3;
    bonus.Upper = 4;
    bonus.Numbers = 5;
    bonus.Symbols = 5;
    bonus.Combo = 0;
    bonus.FlatLower = 0;
    bonus.FlatNumber = 0;

    if (charPassword.length >= minPasswordLength) {
        baseScore = 50;
        analyzeString();
        calcComplexity();
    } else {
        baseScore = 0;
    }

    charPassword = strPassword.split("");

    num.Excess = 0;
    num.Upper = 0;
    num.Numbers = 0;
    num.Symbols = 0;
    bonus.Combo = 0;
    bonus.FlatLower = 0;
    bonus.FlatNumber = 0;
    baseScore = 0;
    score = 0;

    for (i = 0; i < charPassword.length; i++) {
        if (charPassword[i].match(/[A-Z]/g)) {
            num.Upper++;
        }
        if (charPassword[i].match(/[0-9]/g)) {
            num.Numbers++;
        }
        if (charPassword[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {
            num.Symbols++;
        }
    }

    num.Excess = charPassword.length - minPasswordLength;

    if (num.Upper && num.Numbers && num.Symbols) {
        bonus.Combo = 25;
    } else if ((num.Upper && num.Numbers) || (num.Upper && num.Symbols) || (num.Numbers && num.Symbols)) {
        bonus.Combo = 15;
    }

    if (strPassword.match(/^[\sa-z]+$/)) {
        bonus.FlatLower = -15;
    }

    if (strPassword.match(/^[\s0-9]+$/)) {
        bonus.FlatNumber = -35;
    }

    score = baseScore + (num.Excess * bonus.Excess) + (num.Upper * bonus.Upper) + (num.Numbers * bonus.Numbers) + (num.Symbols * bonus.Symbols) + bonus.Combo + bonus.FlatLower + bonus.FlatNumber;

    if (score < 50) {
        return "Weak";
    } else if (score >= 50 && score < 75) {
        return "Medium";
    } else if (score >= 75 && score < 100) {
        return "Strong";
    } else if (score >= 100) {
        return "Safe";
    }

    // $("#details").html("Base Score :<span class=\"value\">" + baseScore + "</span>" +
    //     "<br />Length Bonus :<span class=\"value\">" + (num.Excess * bonus.Excess) + " [" + num.Excess + "x" + bonus.Excess + "]</span> " +
    //     "<br />Upper case bonus :<span class=\"value\">" + (num.Upper * bonus.Upper) + " [" + num.Upper + "x" + bonus.Upper + "]</span> " +
    //     "<br />Number Bonus :<span class=\"value\"> " + (num.Numbers * bonus.Numbers) + " [" + num.Numbers + "x" + bonus.Numbers + "]</span>" +
    //     "<br />Symbol Bonus :<span class=\"value\"> " + (num.Symbols * bonus.Symbols) + " [" + num.Symbols + "x" + bonus.Symbols + "]</span>" +
    //     "<br />Combination Bonus :<span class=\"value\"> " + bonus.Combo + "</span>" +
    //     "<br />Lower case only penalty :<span class=\"value\"> " + bonus.FlatLower + "</span>" +
    //     "<br />Numbers only penalty :<span class=\"value\"> " + bonus.FlatNumber + "</span>" +
    //     "<br />Total Score:<span class=\"value\"> " + score + "</span>");
}