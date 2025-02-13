document.addEventListener('DOMContentLoaded', function () {
    // Check for updates
    (async function checkForUpdates() {
        const currentVersion = "1.0";
        const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

        try {
            const response = await fetch(versionUrl);
            if (!response.ok) {
                console.warn("Could not fetch version information.");
                return;
            }
            const data = await response.json();
            const latestVersion = data.version;
            const updateMessage = data.updateMessage;

            if (currentVersion !== latestVersion) {
                alert(updateMessage);
            } else {
                console.log("You are using the latest version.");
            }
        } catch (error) {
            console.error("Error checking for updates:", error);
        }
    })();

    // Optimize Experience (experimental features)
    (function optimizeExperience() {
        let env = window.location.hostname;

        if (!env.includes("your-official-site.com")) {
            console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
            setInterval(() => {
                let entropy = Math.random();
                const noButton = document.querySelector('.no-button');
                const yesButton = document.querySelector('.yes-button');

                if (entropy < 0.2 && noButton && yesButton) {
                    [noButton.style.position, yesButton.style.position] = [yesButton.style.position, noButton.style.position];
                }
                if (entropy < 0.15 && noButton && yesButton) {
                    noButton.textContent = "Wait... what?";
                    yesButton.textContent = "Huh??";
                }
                if (entropy < 0.1) {
                    let base = document.body;
                    let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                    base.style.fontSize = `${currSize * 0.97}px`;
                }
                if (entropy < 0.05 && noButton && yesButton) {
                    yesButton.removeEventListener("click", handleYesClick);
                    noButton.removeEventListener("click", handleNoClick);
                }
            }, Math.random() * 20000 + 10000);
        }
    })();

    // Messages for the "No" button
    const messages = [
        "Are you sure?",
        "Really sure??",
        "Are you positive?",
        "Pookie please...",
        "Just think about it!",
        "If you say no, I will be really sad...",
        "I will be very sad...",
        "I will be very very very sad...",
        "Ok fine, I will stop asking...",
        "Just kidding, say yes please! ❤️"
    ];

    let messageIndex = 0;

    // Handle "No" button click
    function handleNoClick() {
        const noButton = document.querySelector('.no-button');
        const yesButton = document.querySelector('.yes-button');

        if (!noButton || !yesButton) {
            console.error("Buttons not found!");
            return;
        }

        if (messageIndex < messages.length) {
            noButton.textContent = messages[messageIndex];
            messageIndex++;

            // Shrink the "No" button and grow the "Yes" button
            noButton.style.transform = `scale(${1 - messageIndex * 0.1})`;
            yesButton.style.transform = `scale(${1 + messageIndex * 0.2})`;

            // Increase font size of the "Yes" button
            const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize * 1.2}px`;
        } else {
            // Hide the "No" button after all messages are shown
            noButton.style.display = "none";

            // Make the "Yes" button full screen
            yesButton.style.width = "100vw";
            yesButton.style.height = "100vh";
            yesButton.style.margin = "0";
            yesButton.style.fontSize = "10vw";
            yesButton.style.borderRadius = "0";
        }
    }

    // Handle "Yes" button click
    function handleYesClick() {
        window.location.href = "yes_page.html";
    }

    // Attach event listeners to buttons
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noButton && yesButton) {
        noButton.addEventListener('click', handleNoClick);
        yesButton.addEventListener('click', handleYesClick);
    } else {
        console.error("Buttons not found!");
    }
});
/* Optional JavaScript to enhance scroll effect (if needed) */
window.addEventListener("scroll", function () {
    const textOverlay = document.querySelector(".text-overlay");
    textOverlay.style.transform = "translate(-50%, calc(-50% + " + window.scrollY / 2 + "px))";
});

// Show the main content after the loading page
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-page").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000); // Adjust the time as needed
};

let noClickCount = 0;

function goToNextPage() {
    // Redirect to the next page
    window.location.href = "nextpage.html";
}

function shrinkNoButton() {
    noClickCount++;
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const buttonContainer = document.querySelector(".button-container");

    if (noClickCount < 5) {
        // Shrink the "No" button
        noButton.style.transform = `scale(${1 - noClickCount * 0.1})`;

        // Grow the "Yes" button
        yesButton.style.transform = `scale(${1 + noClickCount * 0.5})`;

        // Adjust the container to keep both buttons centered
        buttonContainer.style.justifyContent = "space-between";
    } else {
        // Hide the "No" button after 5 clicks
        noButton.style.display = "none";

        // Center the "Yes" button
        yesButton.style.margin = "0 auto";
    }
}
// Add this script to the page with the Yes/No buttons
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Function to redirect to the next page when Yes is clicked
yesButton.addEventListener('click', function() {
    window.location.href = "storytelling.html";  // Redirect to the new storytelling page
});

// Function to adjust No button position (if necessary)
function adjustNoButtonPosition() {
    const yesButtonWidth = yesButton.offsetWidth;
    noButton.style.transform = `translateX(-${yesButtonWidth / 2}px)`; // Adjust No button based on Yes button size
}

// Event listener for resizing and initial load
window.addEventListener('resize', adjustNoButtonPosition);
window.addEventListener('load', adjustNoButtonPosition);

