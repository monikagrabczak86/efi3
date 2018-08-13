'use strict';
(function () {
    const buttonGo = document.querySelector("#client-number-go");
    const buttonX = document.querySelector("#client-number-close");
    const buttonSelectOther = document.querySelector("#client-number-select-other");

    buttonGo.addEventListener("click", next);
    buttonX.addEventListener("click", back);
    buttonSelectOther.addEventListener("click", back);
    
        const clientNumberKeyboard = document.querySelector("#client-number-keyboard");
        const clientNumberParagraph = document.querySelector("#client-number-value");
        const password = document.querySelector("#password");
        const passwordKeyboard = document.querySelector("#password-keyboard");
        const instructionForClient = document.querySelector("#instruction-for-client");
        const clientNumberClose = document.querySelector("#client-number-close");
        const clientNumberSelectOther = document.querySelector("#client-number-select-other");  

    function next() {
        const clientNumber = document.querySelector("#client-number");
        
        clientNumber.style.display = "none";
        clientNumberParagraph.innerHTML = clientNumber.value;
        clientNumberKeyboard.style.display = "none";
        password.style.display = "inline-block";
        passwordKeyboard.style.display = "inline-block";
        instructionForClient.innerHTML = "Aby zaimportować dane zaloguj się do swojego banku";
        clientNumberClose.style.display = "inline-block";
        clientNumberSelectOther.style.display = "inline-block";
    };
    
    function back() {
        const clientNumber = document.querySelector("#client-number")
        
        clientNumber.style.display = "inline-block";
        clientNumber.value = "";
        password.value = "";
        clientNumberKeyboard.style.display = "inline-block";
        clientNumberParagraph.innerHTML = "";
        password.style.display = "none";
        passwordKeyboard.style.display = "none";
        instructionForClient.innerHTML = "Podaj numer klienta:";
        clientNumberClose.style.display = "none";
        clientNumberSelectOther.style.display = "none";
    };
    

})();