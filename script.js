document.addEventListener("DOMContentLoaded", function() {
    const inviteButtons = document.querySelectorAll("#invite-btn, #cta-invite-btn"); // Select both buttons

    inviteButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            window.open("https://discord.com/oauth2/authorize?client_id=1291250100613419019&permissions=8&integration_type=0&scope=bot", "_blank");
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
