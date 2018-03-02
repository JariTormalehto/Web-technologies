/*Hover effect on navbar make background white and test black*/
var k = document.querySelectorAll("ul.nav.navbar-nav li a");
for (var i = 0; i < k.length; i++) {
    var listitem = k[i];
        listitem.onmouseover = function () {
               this.style["background-color"] = "white";
               this.style.color = 'black';
            };
        listitem.onmouseout = function () {
                this.style.color = '#FFFFFF';
                this.style["background-color"] = '#383E4C';
            };
    }

        /*Check for empty form fields and alert if empty*/
        var form = document.querySelector('form.contact-form');

    form.onsubmit=function () {
        var field = document.getElementsByTagName("input")
            for (var i = 0; i < field.length; i++) {
                    if (field[i].value == "") {
                            alert('empty' + ' ' + field[i].getAttribute("id") + ' ' + 'field');
                        } else {

                    }
        }
    }

var form = document.querySelector('form.contact-form')

var input_name = document.querySelector('form input[name=name]')
var input_email = document.querySelector('form input[name=email]')
var input_subject = document.querySelector('form input[name=subject]')
var input_message = document.querySelector('form textarea[name=message]')

var alertValues = function () {
    var text = "The data you entered:\n" +
        "name=" + input_name.value + "\n" +
        "email=" + input_email.value + "\n" +
        "subject=" + input_subject.value + "\n" +
        "message=" + input_message.value + "\n"
    alert(text)
}

var hasMissingFields = function () {
    var missingFields = []

    if (!input_name.value) missingFields.push("Name")
    if (!input_email.value) missingFields.push("Email")
    if (!input_subject.value) missingFields.push("Subject")
    if (!input_message.value) missingFields.push("Message")

    if (missingFields.length) {
        var text = "You have following fields missing:\n" + missingFields.join(", ")
        alert(text)
    }

    return missingFields.length > 0
}

form.addEventListener("submit", function (event) {
    /*
    3. `If any field is missing/empty when user clicks submit button on contact form,
    pop up and alert box saying the name of the missing field/fields`
    */
    if (hasMissingFields()) return

    /*
    2. `When I click the send button in the contact form
    I want to see all the information entered into the box popped up in an alert box`
    */
    alertValues()
})


