function applyContactLinks() {
    // Default fallback (for pages that forget config)
    const defaultConfig = {
        whatsapp: "919000000000",
        call: "919000000000",
        whatsappMessage: "Hi, I am interested in your service."
    };

    // Page-level override
    const pageConfig = window.CONTACT_CONFIG || defaultConfig;
    const encodedMessage = encodeURIComponent(pageConfig.whatsappMessage);

    document.querySelectorAll('[data-whatsapp]').forEach(el => {
        el.href = `https://wa.me/${pageConfig.whatsapp}?text=${encodedMessage}`;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
    });

    document.querySelectorAll('[data-call]').forEach(el => {
        el.href = `tel:${pageConfig.call}`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadLayout();
});

function loadLayout() {

    const headerHTML = `
     <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        <span class="text-white font-display font-bold text-xl">Z</span>
                    </div>
                    <div>
                        <h1 class="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Zoyfk
                        </h1>
                        <p class="text-xs text-gray-500">Premium Companionship</p>
                    </div>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-gray-600 hover:text-primary font-medium transition">Home</a>
                    <a href="cities.html" class="text-gray-600 hover:text-primary font-medium transition">Cities</a>
                    <a href="services.html" class="text-gray-600 hover:text-primary font-medium transition">Services</a>
                    <a href="profiles.html" class="text-gray-600 hover:text-primary font-medium transition">Profiles</a>
                    <a href="#contact" class="btn-primary text-white px-6 py-2 rounded-full font-medium">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden mt-4 space-y-4">
                <a href="index.html" class="block text-gray-600 hover:text-primary font-medium">Home</a>
                <a href="cities.html" class="block text-gray-600 hover:text-primary font-medium">Cities</a>
                <a href="services.html" class="block text-gray-600 hover:text-primary font-medium">Services</a>
                <a href="profiles.html" class="block text-gray-600 hover:text-primary font-medium">Profiles</a>
                <a href="#contact" class="block btn-primary text-white px-6 py-2 rounded-full font-medium text-center">Contact</a>
            </div>
        </div>
    </nav>
    `;

    const footerHTML = `
    <footer class="bg-dark text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                            <span class="text-white font-display font-bold text-xl">Z</span>
                        </div>
                        <div>
                            <h3 class="text-xl font-display font-bold">Zoyfk</h3>
                            <p class="text-gray-400 text-sm">Premium Companionship</p>
                        </div>
                    </div>
                    <p class="text-gray-400 text-sm">
                        India's premium platform for discreet and professional companionship services.
                    </p>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Top Cities</h4>
                    <ul class="space-y-2">
                        <li><a href="pages/delhi-escorts.html" class="text-gray-400 hover:text-white transition">Delhi Escorts</a></li>
                        <li><a href="pages/mumbai-escorts.html" class="text-gray-400 hover:text-white transition">Mumbai Call Girls</a></li>
                        <li><a href="pages/bangalore-escorts.html" class="text-gray-400 hover:text-white transition">Bangalore Escorts</a></li>
                        <li><a href="pages/hyderabad-escorts.html" class="text-gray-400 hover:text-white transition">Hyderabad Call Girls</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="cities.html" class="text-gray-400 hover:text-white transition">All Cities</a></li>
                        <li><a href="profiles.html" class="text-gray-400 hover:text-white transition">Featured Profiles</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition">Our Services</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2">
                        <li class="text-gray-400">24/7 Support</li>
                        <li class="text-gray-400">WhatsApp Available</li>
                        <li class="text-gray-400">Discreet Service</li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400 text-sm">&copy; 2023 Zoyfk.co.in. All rights reserved. | Premium Escort Services</p>
            </div>
        </div>
    </footer>
    `;

    const floatingActionsHTML = `
    <div id="floating-actions" class="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

        <!-- WhatsApp -->
        <a
            href="#"
            data-whatsapp
            target="_blank"
            aria-label="Chat on WhatsApp"
            class="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
            <img
            src="assets/icons/whatsapp-icon.svg"
            alt="WhatsApp"
            class="w-7 h-7"
            loading="lazy"
            />
        </a>

        <!-- Call -->
        <a
            href="#"
            data-call
            aria-label="Call Now"
            class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
            <img
            src="assets/icons/phone.svg"
            alt="Call"
            class="w-7 h-7"
            loading="lazy"
            />
        </a>

    </div>
    `;

    document.getElementById("header-container").innerHTML = headerHTML;
    document.getElementById("footer-container").innerHTML = footerHTML;
    document.body.insertAdjacentHTML("beforeend", floatingActionsHTML);
    applyContactLinks();

    // Mobile menu toggle (SAFE)
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // VERY IMPORTANT
            menu.classList.toggle("hidden");
        });

        document.addEventListener("click", (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.add("hidden");
            }
        });
    }

}
