document.addEventListener("DOMContentLoaded", () => {
    // Handle Language Selection
    const languageSelect = document.getElementById("language");
    languageSelect.addEventListener("change", () => {
        alert(`Language changed to ${languageSelect.value}`);
    });

    // Handle Sign In Button
    const signInButton = document.querySelector(".signin");
    signInButton.addEventListener("click", () => {
        alert("Redirecting to sign-in page...");
    });

    // Handle Get Started Button
    const getStartedButton = document.querySelector(".getStarted");
    const emailInput = document.querySelector(".email input");
    getStartedButton.addEventListener("click", () => {
        const email = emailInput.value;
        if (email) {
            alert(`Thank you! We'll reach out to ${email}.`);
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Highlight Images on Hover
    const images = document.querySelectorAll(".third .grid .img img");
    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Dynamic Section Loader (Example for "More Reasons to Join")
    const reasonsContainer = document.querySelector(".forth .container");
    if (reasonsContainer) {
        const additionalReason = document.createElement("div");
        additionalReason.className = "c";
        additionalReason.textContent = "Newly Added Reason: Exclusive Deals";
        additionalReason.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        setTimeout(() => {
            reasonsContainer.appendChild(additionalReason);
        }, 2000); // Add after 2 seconds
    }
});
    