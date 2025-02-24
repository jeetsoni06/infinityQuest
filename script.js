document.addEventListener("DOMContentLoaded", () => {
    const teamSelect = document.getElementById("team");
    const passwordContainer = document.getElementById("password-container");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit-btn");
    const resultDiv = document.getElementById("result");

    // Predefined codes for each team
    const teamCodes = {
        teamIronman: "2380",
        teamCap : "1406",
        teamThor : "9150",
        teamGOG : "3001",
        teamSpiderman : "4057",
        teamDeadpool : "6118",
        // Add other team codes later
    };

    // Hide the password container initially
    passwordContainer.style.display = "none";

    // Enable or disable password input and submit button based on team selection
    teamSelect.addEventListener("change", (e) => {
        const selectedTeam = e.target.value;

        if (selectedTeam) {
            passwordContainer.style.display = "block";  // Show password input
            passwordInput.focus();  // Focus on the password input
            submitButton.disabled = true;  // Disable submit button initially
            resultDiv.innerHTML = "";  // Clear previous result
        } else {
            passwordContainer.style.display = "none";  // Hide password input if no team selected
            submitButton.disabled = true;  // Disable submit button
            resultDiv.innerHTML = "";  // Clear previous result
        }
    });

    // Listen for input in the password field and enable/disable the submit button
    passwordInput.addEventListener("input", () => {
        const enteredCode = passwordInput.value.trim();
        submitButton.disabled = enteredCode.length !== 4;  // Enable button only when the code has 4 digits
    });

    // Handle password validation on submit
    submitButton.addEventListener("click", handlePasswordSubmit);

    // Handle Enter key for password submission
    passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handlePasswordSubmit();
        }
    });

    function handlePasswordSubmit() {
        const selectedTeam = teamSelect.value;
        const enteredCode = passwordInput.value.trim();

        if (selectedTeam in teamCodes && enteredCode === teamCodes[selectedTeam]) {
            resultDiv.innerHTML = "<span style='color: green;'>Avengers would be proud, congrats!</span>";
        } else {
            resultDiv.innerHTML = "<span style='color: red;'>Incorrect code. Try again!</span>";
        }
    }
});
