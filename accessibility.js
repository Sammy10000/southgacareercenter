(function() {
    function testScriptLoad() {
        // Check if the test variable already exists (to prevent multiple alerts)
        if (typeof window.scriptLoadedTest === 'undefined') {
            window.scriptLoadedTest = true; // Set the test variable

            // Option 1: Simple alert (can be annoying for users)
            // alert("Accessibility script loaded successfully!");

            // Option 2: Console message (better for debugging)
            console.log("Accessibility script loaded successfully!");

            // Option 3:  A temporary visual indicator (less intrusive)
            const indicator = document.createElement('div');
            indicator.style.cssText = `
                position: fixed; /* Stays in place */
                top: 10px;
                left: 10px;
                background-color: lightgreen;
                padding: 5px 10px;
                border-radius: 5px;
                z-index: 9999; /* Ensure it's on top */
                opacity: 0.8; /* Slightly transparent */
                transition: opacity 0.5s ease-in-out; /* Fade effect */
            `;
            indicator.textContent = "Accessibility script loaded";
            document.body.appendChild(indicator);

            // Remove the indicator after a few seconds
            setTimeout(() => {
                indicator.style.opacity = 0;
                setTimeout(() => {
                    indicator.remove();
                }, 500); // Match the transition duration
            }, 3000); // Show for 3 seconds


        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', testScriptLoad);
    } else {
        testScriptLoad();
    }
})();
