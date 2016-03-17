$(document).ready(function(){
    var errors = false;
    $('.required').parent().find('.input').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('This field is required.');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
            errors = false;
        }
    });
    $('#email').on('blur', function(){
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.email_validation($(this).val())) {
            error_div.html('Please Input Email Address');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
            errors = false;
        }
    });
    var $contactForm = $('#contact_form');
    $('#contact_form').submit(function(event) {
        event.preventDefault();
         $('.required').parent().find('.input').trigger('blur');
        if (!errors)
       


        /*    $.ajax({
                url: '/echo/json/',
                data: {
                    json: JSON.stringify($(this).serializeObject())
                },
                type: 'post',
                success: function(data) {
                    var message = 'Hi '+data.name+'. Your message was sent and received.';
                    $('#after_submit').html(message);
                    $('#after_submit').css('display', 'block');
                },
                error: function() {
                    var message = 'Hi '+data.name+'. Your message could not be sent or received. Please try again later';
                    $('#after_submit').html(message);
                    $('#after_submit').css('display', 'block'); 
                }
            });*/
      
/*<form action="http://code.kimgoulbourne.com/mailto/send_email.php" method="post" target="contactForm">
  <input type="hidden" name="name" value="tedrosedale@gmail.com" />
  <input type="hidden" name="companyname" value="Stanford Certificate Request." />
  <input type="hidden" name="type" value="A Message From Your Website" />
  <input type="hidden" name="phone" value="A Message From Your Website" />
  <input type="hidden" name="annual" value="A Message From Your Website" />
  <input type="hidden" name="email" value="A Message From Your Website" />
  <input type="hidden" name="message" value="A Message From Your Website" />
  
</form>*/


            alert("Can't email yet! Come back and try again!");
       

/*
    $.ajax({

        url: 'http://formspree.io/ted.rosedale@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--success">Message sent!</div>');
        },
        error: function(err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
        }
    });
*/

        else
            alert("You didn't complete the form correctly. Check it out and try again!");
    });
});

$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}
    
$.email_validation = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};