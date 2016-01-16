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
    
    document.contact.name.value = "";
    document.contact.address.value = "";
    document.contact.body.value = "";
    document.getElementById("sendMessage").innerHTML = "送信しました。";
    check();
}

function check() {
    var name = document.contact.name.value;
    var address = document.contact.address.value;
    var body = document.contact.body.value;
    
    var elm = document.getElementById("sending");
    
    if(name != "" && address != "" && body != ""){
        if(elm.onclick === null){
            elm.src = "img/send_button_on.png";
            elm.className = "img-responsive img-responsive-overwrite send-button";
            elm.onclick = sending;
        }
    } else {
        if(elm.onclick !== null){
            elm.src = "img/send_button_off.png";
            elm.className = "img-responsive img-responsive-overwrite";
            elm.onclick = null;
        }
    }
}