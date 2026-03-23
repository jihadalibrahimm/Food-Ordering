document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TyZ1gEFNOxocrpbhT");

    const form = document.getElementById('order-form');
    const alertBox = document.getElementById('success-alert');
    const alertMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_gtnpyng', 'template_pwbij7f', this)
        .then(() => {
            alertMessage.textContent = "✅ Your order has been sent successfully.";
            alertBox.style.display = 'block';

            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000);

            form.reset();
        }, (error) => {
            alertMessage.textContent = "❌ Something went wrong while sending your order.";
            alertBox.style.display = 'block';

            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000);

            console.error("Error:", error);
        });
    });
});
