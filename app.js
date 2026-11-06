$("#accordion").accordion();
$("#myForm").validate({

    rules: {
        firstname: {
            required: true
        },
        
        lastname: {
            required: true
        }, 

        email: {
            required: true,
            email: true
        },

        phone: {
            required: true
        },

        date: {
            required: true
        },

        time: {
            required: true
        },

        services: {
            required: true
        }

    },

    messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        email: "Please enter a valid email",
        phone: "Please enter your phone number",
        date: "Please enter date",
        time: "Please enter time",
        services: "Please enter your services"
        
    },
      submitHandler: function(form) {
        alert("Registration Successful!");
        form.reset();
    }
});
