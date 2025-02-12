(function() {
    function applyFocusStyles() {
        if (!document.getElementById('focus-styles')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'focus-styles';
            styleElement.textContent = `
                :focus {
                    outline: 2px solid darkblue !important;
                    outline-offset: 2px !important;
                    border-radius: 2px !important;
                }
                
                button:focus, 
                a:focus, 
                input:focus, 
                textarea:focus, 
                select:focus {
                    outline: 4px solid darkblue !important;
                    outline-offset: 2px !important;
                    border-radius: 2px !important;
                    padding-top: 4px !important;
                    padding-bottom: 2px !important;
                }
            `;
            document.head.appendChild(styleElement);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyFocusStyles);
    } else {
        applyFocusStyles();
    }

    const observer = new MutationObserver(() => {
        applyFocusStyles();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
