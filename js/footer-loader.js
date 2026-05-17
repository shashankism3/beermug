// js/footer-loader.js

function loadGlobalFooter() {
    const footerContainer = document.getElementById('global-footer');
    
    if (!footerContainer) {
        console.warn("Footer Warning: Element with id 'global-footer' not found on this page.");
        return;
    }

    // Fetch the external HTML file
    fetch('/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load footer: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            // Inject the HTML markup into the container
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error rendering the global footer:", error);
            footerContainer.innerHTML = `<p>&copy; 2026 AmritBharatExpress.com. All rights reserved.</p>`;
        });
}

// Run the script as soon as the DOM structure is ready
document.addEventListener("DOMContentLoaded", loadGlobalFooter);