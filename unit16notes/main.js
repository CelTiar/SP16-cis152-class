// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
            "full_name": {
                required: true
            }
        },
        messages: {
            "email_1": {
                required: "Enter some text, Yo",
                email: "that's not gonna work..."
            }
        }
    });
    
    /*
    // basic form validation
    $("#email_form").submit(function(e){
        
        console.log("form submitting...")
        
        
        var emailText = $("#email_address").val();
        if(emailText == ""){
             e.preventDefault(); // stops the form from submitting
             alert("Hey fill in your email address!");   
        }
        
    });
    */
});