(function () {
    "use strict";
    let contacts = [];
    let person = {};

    window.onload = function () {
        document.getElementById("btn_add").onclick = addcontact;
    }

    function addcontact() {
        const phone = document.getElementById("phone");
        const fName = document.getElementById("first_name");
        const lName = document.getElementById("last_name");
         person = {
            firstName: fName.value,
            lastName: lName.value,
            phoneNo: phone.value
        };
        contacts.push(person);
        listContacts();
        document.forms['contact_from'].reset();
    }


    function printAddress(person) {
        let contact = document.getElementById("contacts");

        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.phoneNo}</td>
      <td><a href="#"  class="deletem">delete</a></td>
      `;
        contact.appendChild(row);
    }

    function listContacts() {
        //let pinfo = contacts.pop();
        //printPerson(pinfo);
        let len = contacts[contacts.length-1];
        printAddress(len);



    }
})();