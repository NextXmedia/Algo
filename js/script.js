
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const pincode = document.getElementById("pincode").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value;

    const fullMessage = `Hello, I'm interested in Algo Pumping Solutions.%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
City: ${city}%0A
Pincode: ${pincode}%0A
Country: ${country}%0A
Message: ${message}`;

    // Replace the number below with your WhatsApp business number (with country code, no +)
    const phoneNumber = "91"; 

    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
});