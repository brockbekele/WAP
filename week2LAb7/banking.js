(function () {
    "use strict";
    const button = document.getElementById("submit");
    const textarea = document.getElementById("result");
    let listAccounts = [];
    window.onload = function () {
        button.onclick = addAccount;
    }
    function addAccount() {

        let inputaccount = document.getElementById("accountname").value;
        let deposit = document.getElementById("deposit").value;
        listAccounts.push([ "Account name: " + inputaccount + " Balance: " + deposit]);

     let val = "";

        for (let i = 0; i < listAccounts.length; i++) {



            val = val + listAccounts[i]  + '\r\n';
        }

        // display array data
        textarea.innerHTML = val;
    }

})();