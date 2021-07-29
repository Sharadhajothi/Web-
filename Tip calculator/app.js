/*(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()*/

var calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {

    var amount = document.getElementById('amount').value;
    var service = document.getElementById('service').value;
    var people = document.getElementById('people').value;



    var total = (amount * service) / people;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    document.getElementById('cost').innerHTML = `<h3>TOTAL AMOUNT</h3> <h2> ${total}</h2> <h3> each </h3>`
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
