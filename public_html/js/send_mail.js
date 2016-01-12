
function sending() {
    var name = document.contact.name.value;
    var address = document.contact.address.value;
    var body = document.contact.body.value;
    
    jQuery.ajax(
            "send_mail.php", {
                type: "POST",
                dataType: 'text',
                data: {
                    "name": name,
                    "address": address,
                    "body": body
                },
                success: function (post) {
                    console.log(post);
                }
            }
    );
}

