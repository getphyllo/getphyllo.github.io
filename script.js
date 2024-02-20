// Data array containing problem details
var problems = [
    {
        problem: "Problem #1",
        title: "🔐 Authenticated APIs",
        explanation: `Develop an authentication mechanism enabling frontend JavaScript libraries to execute authenticated API calls to backend servers, ensuring payload integrity and API security.The mechanism should thwart manipulation attempts and block API calls originating from malicious users. This authentication is not user authentication or JWT token.`,
        additionalExplanation: `These JavaScript libraries will be integrated into your customer's website, with configurable parameters, for ex: Measurement ID/Google Tag ID that Google Analytics uses or tokens that Mixpanel uses and so on.`
    },
    {
        problem: "Problem #2",
        title: "🧠 AI product recognition",
        explanation: `Imagine you have a picture of a product and a video. You want to find all the moments in the video where that product appears in the video.If the product appears multiple times on the screen, your output will include multiple timestamp ranges.Below, you'll find a sample product image and accompanying video for your experimentation.`,
        additionalExplanation: `Craft a script capable of processing both inputs and delivering accurate outputs. The script can be written in any programming language, capable of seamlessly handling various inputs beyond the provided samples. Accuracy is key, so feel free to leverage any publicly available tools like Google Vision AI, AWS AI services, or open-source libraries to enhance identification precision. Are you prepared to embark on this coding adventure? Let's roll up our sleeves and unleash the full potential of automation!`,
        sampleLinks: [
            { label: "Sample Video,", link: "https://www.instagram.com/reel/C3AoUTgIIiH/" },
            { label: "Sample Image", link: "https://www.instagram.com/reel/C3AoUTgIIiH/" }
        ]
    }
];

function openModal(index) {
    var modal = document.getElementById("modal");
    var modalProblem = document.getElementById("modal-problem");
    var modalTitle = document.getElementById("modal-title");
    var modalExplanation = document.getElementById("modal-explanation");
    var modalAdditionalExplanation = document.getElementById("modal-additional-explanation");
    var modalSampleLinks = document.getElementById("modal-sample-links");

    // Clear previous links
    modalSampleLinks.innerHTML = "";

    modalProblem.textContent = problems[index].problem;
    modalTitle.textContent = problems[index].title;
    modalExplanation.textContent = problems[index].explanation;
    modalAdditionalExplanation.textContent = problems[index].additionalExplanation;

    // Add sample links
    if (problems[index].sampleLinks) {
        var iconElement = document.createElement("img");
        iconElement.src = "assets/icon/link.svg"; // Set the path to your icon image
        iconElement.alt = "Icon"; // Set alt text for accessibility
        iconElement.style.color = "#5A5A67"

        // Append the icon before the link
        modalSampleLinks.appendChild(iconElement);
        problems[index].sampleLinks.forEach(function(linkData) {
            var linkElement = document.createElement("a");
            linkElement.textContent = linkData.label;
            linkElement.href = linkData.link;
            linkElement.target = "_blank"; // Open link in new tab
            linkElement.style.fontSize = "16px"; // Add margin between links
            linkElement.style.fontWeight = "400"; // Add margin between links
            linkElement.style.color = "#680DE4"; // Add margin between links
            modalSampleLinks.appendChild(linkElement);
        });
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
