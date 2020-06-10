/*jshint  esversion:6, globalstrict:true */
"use strict";
$(function () {
    $('#fetch').on('click', fetchJson);

    function fetchJson() {
        const id = $('#userId').val();
        $('#user').html("");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                    response.map(user => {
                        if (user.id === parseInt(id)) {
                            const html = `<p> Id: ${user.id} </p> <p> Name: ${user.name} </p> <p> User name: ${user.username} </p> 
                    <p> Email: ${user.email} </p> <p> Phone: ${user.phone} </p> <p> Website: ${user.website} </p>`;
                            return $('#user').append(html);
                        }
                    });
                }
            )
            .catch(error => console.error("Error: ", error));
    }

});