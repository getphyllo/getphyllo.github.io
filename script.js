// Data array containing problem details
var problems = [
    {
        problem: "Problem #1",
        title: "🔐 Secure JS API Gateway",
        explanation: `Develop an authentication mechanism enabling frontend JavaScript libraries to execute authenticated API calls to backend servers, ensuring payload integrity and API security.The mechanism should thwart manipulation attempts and block API calls originating from malicious users.`,
        modalExtraInfo: `This authentication is not user authentication or JWT token.`,
        additionalExplanation: `These JavaScript libraries will be integrated into your customer's website, with configurable parameters, for ex: Measurement ID/Google Tag ID that Google Analytics uses or tokens that Mixpanel uses and so on.`
    },
    {
        // title: "🧠 AI product recognition",
        // explanation: `Imagine you have a picture of a product and a video. You want to find all the moments in the video where that product appears in the video.If the product appears multiple times on the screen, your output will include multiple timestamp ranges.Below, you'll find a sample product image and accompanying video for your experimentation.`,
        // additionalExplanation: `Craft a script capable of processing both inputs and delivering accurate outputs. The script can be written in any programming language, capable of seamlessly handling various inputs beyond the provided samples. Accuracy is key, so feel free to leverage any publicly available tools like Google Vision AI, AWS AI services, or open-source libraries to enhance identification precision. Are you prepared to embark on this coding adventure? Let's roll up our sleeves and unleash the full potential of automation!`,

        problem: "Problem #2",
        title: "🧠 Commerce product recognition",
        explanation: `You have been given a picture of a product and a video. Write a script to find all the timestamp ranges in the given video where the product from the given image appears. Below, you'll find a few set of test inputs for your experimentation.`,
        sampleLinks: [
            { label: "Sample Video,", link: "https://www.instagram.com/reel/C3AoUTgIIiH/" },
            { label: "Sample Image", link: "https://www.instagram.com/reel/C3AoUTgIIiH/" }
        ]
    },
    {
        problem: "Problem #3",
        title: "🕵 Qualitative analysis of the video",
        explanation: `Given a video, develop a script to conduct qualitative analysis on attributes outlined in the attached Google Sheet. The attributes are categorized as either "good to have" or "must have," with greater accuracy in recognizing a higher number of "good to have" attributes being desirable.`,
        sampleLinks: [
            { label: "Video Attributes Google Sheet", link: "https://docs.google.com/spreadsheets/d/1p6-0Vop3klJeVVjW5ObvsDwswPqYfHyZLr23o5PQjk0/edit?usp=sharing" },
        ]
    },
];

function openModal(index) {
    var modal = document.getElementById("modal");
    var modalProblem = document.getElementById("modal-problem");
    var modalTitle = document.getElementById("modal-title");
    var modalExplanation = document.getElementById("modal-explanation");
    var modalExtraInfo = document.getElementById("modal-extra-info");
    var modalAdditionalExplanation = document.getElementById("modal-additional-explanation");
    var modalSampleLinks = document.getElementById("modal-sample-links");

    // Clear previous links
    modalSampleLinks.innerHTML = "";
    modalExtraInfo.textContent = "";

    modalProblem.textContent = problems[index].problem;
    modalTitle.textContent = problems[index].title;
    modalExplanation.textContent = problems[index].explanation;
    modalAdditionalExplanation.textContent = problems[index].additionalExplanation;
    if(problems[index]?.modalExtraInfo){
        modalExtraInfo.textContent = problems[index].modalExtraInfo;
    }

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

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    // Change the background color based on scroll position
    if (scrollPosition > 80) {
        header.style.backgroundColor = 'white'; // Change to your desired color
        header.style.borderBottom = '1px solid #E5E5E8';
        header.style.opacity = '0.95';
    } else {
        header.style.backgroundColor = 'transparent'; // Change to your default color
        header.style.borderBottom = 'none';
        header.style.opacity = '1';
    }
});
