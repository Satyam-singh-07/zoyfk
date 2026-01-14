const CONTACT_CONFIG = {
    whatsapp: "919999999999",
    call: "919999999999"
};

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
                    <a href="#cities" class="text-gray-600 hover:text-primary font-medium transition">Cities</a>
                    <a href="#services" class="text-gray-600 hover:text-primary font-medium transition">Services</a>
                    <a href="#profiles" class="text-gray-600 hover:text-primary font-medium transition">Profiles</a>
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
                <a href="#cities" class="block text-gray-600 hover:text-primary font-medium">Cities</a>
                <a href="#services" class="block text-gray-600 hover:text-primary font-medium">Services</a>
                <a href="#profiles" class="block text-gray-600 hover:text-primary font-medium">Profiles</a>
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
                        <li><a href="#cities" class="text-gray-400 hover:text-white transition">All Cities</a></li>
                        <li><a href="#profiles" class="text-gray-400 hover:text-white transition">Featured Profiles</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition">Our Services</a></li>
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
            href="https://wa.me/${CONTACT_CONFIG.whatsapp}"
            target="_blank"
            aria-label="Chat on WhatsApp"
            class="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
            <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.125 1.517 5.874L0 24l6.335-1.652A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
        </a>

        <!-- Call -->
        <a
            href="tel:${CONTACT_CONFIG.call}"
            aria-label="Call Now"
            class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H7a11 11 0 005 5v-2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V7a2 2 0 010-2z" />
            </svg>
        </a>

    </div>
    `;

    document.getElementById("header-container").innerHTML = headerHTML;
    document.getElementById("footer-container").innerHTML = footerHTML;
    document.body.insertAdjacentHTML("beforeend", floatingActionsHTML);


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
