function sendWhatsApp() {

    let phoneNumber = "+919640424442";

    let message = "Hello, I need interior design quotation.";

    let whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

function sendSMS() {

    let phoneNumber = "+919640424442";

    let message = "Hello, I need interior design quotation.";

    window.location.href =
    `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
}
