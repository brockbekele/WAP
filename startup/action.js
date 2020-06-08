(function (){
 "use strict";
    let contacts =[];
    let person ={};
    let span = document.getElementsByClassName("err_msg");

    window.onload = function (){
        document.getElementById("btn_add").onclick= addContact;
        document.getElementsByClassName("delete").onclick=  removeElement;
    }
    function addContact(){
    const phone = document.getElementById("phone");
    const fName = document.getElementById("first_name");
    const lName = document.getElementById("last_name");
    let f = document.forms['contact_from']["first_name"].value;
    let k=   document.forms['contact_from']["phone"].value;
    let g = document.forms['contact_from']["last_name"].value;
    
    person ={
        firstName: fName.value,
        lastName:  lName.value,
        phoneNo: phone.value
    };
    if( f==""||k==""||g==""){
        span.textContent ="Required Field missing";
        return false;
    }
    else{
    contacts.push(person);
    listContacts();
    document.forms['contact_from'].reset();
    }
}

    function printAdress(person) {
        let contact = document.getElementById("contacts");
        let row = document.createElement('tr');
       row.innerHTML= `
       <td>${person.firstName}</td>
       <td>${person.lastName}</td>
       <td>${person.phoneNo}</td>
       <td><a href="#"  id="tex"> Delete </a></td>`;
       contact.appendChild(row);
    }

    function listContacts(){
        let len = contacts[contacts.length-1];
        printAdress(len);
    }

    function removeElement(parentDiv, childDiv){
        if (childDiv == parentDiv) {
             alert("The parent div cannot be removed.");
        }
        else if (document.getElementById(childDiv)) {     
             var child = document.getElementById("contacts");
             var parent = document.getElementById("tex");
             parent.removeChild(child);
        }
        else {
             alert("Child div has already been removed or does not exist.");
             return false;
        }
   }

})();