async function applyContactLinks() {
  let cities = {};

  try {
    const res = await fetch("../data/cities.json");
    cities = await res.json();
  } catch (err) {
    console.error("Failed to load cities.json", err);
    return;
  }

  // 🔹 1. Extract city slug from URL
  // /call-girls/delhi-call-girls.html → delhi
  const path = window.location.pathname.toLowerCase();

  const fileName = path.split("/").pop(); // mumbai.html
  let detectedSlug = fileName ? fileName.replace(".html", "") : null;

  // 🔹 2. Match slug with cities.json
  let detectedCityKey = null;

  Object.keys(cities).forEach((cityKey) => {
    const city = cities[cityKey];

    if (
      city.slug === detectedSlug || // preferred
      cityKey.toLowerCase() === detectedSlug // fallback
    ) {
      detectedCityKey = cityKey;
    }
  });

  // 🔹 3. Fallback city
  if (!detectedCityKey) {
    detectedCityKey = "Delhi";
  }

  const config = cities[detectedCityKey];
  if (!config || !config.enabled) return;

  // 🔹 4. Build links safely
  const cleanWhatsapp = config.whatsapp.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(config.whatsapp_message);

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = `https://wa.me/${cleanWhatsapp}?text=${encodedMessage}`;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-call]").forEach((el) => {
    el.href = `tel:${config.call}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadLayout();
  showAgeDisclaimer();
});

/* ===============================
   LAYOUT
================================ */

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
                    <a href="https://satyam-singh-07.github.io/zoyfk/index.html" class="text-gray-600 hover:text-primary font-medium transition">Home</a>
                    <a href="https://satyam-singh-07.github.io/zoyfk/cities.html" class="text-gray-600 hover:text-primary font-medium transition">Cities</a>
                    <a href="https://satyam-singh-07.github.io/zoyfk/services.html" class="text-gray-600 hover:text-primary font-medium transition">Services</a>
                    <a href="#" data-call class="btn-primary text-white px-6 py-2 rounded-full font-medium">Contact</a>
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
                <a href="https://satyam-singh-07.github.io/zoyfk/index.html" class="block text-gray-600 hover:text-primary font-medium">Home</a>
                <a href="https://satyam-singh-07.github.io/zoyfk/cities.html" class="block text-gray-600 hover:text-primary font-medium">Cities</a>
                <a href="https://satyam-singh-07.github.io/zoyfk/services.html" class="block text-gray-600 hover:text-primary font-medium">Services</a>
                <a href="#" data-call class="block btn-primary text-white px-6 py-2 rounded-full font-medium text-center">Contact</a>
            </div>
        </div>
    </nav>
    <!-- Disclaimer Ticker -->
    <div class="bg-black text-yellow-400 overflow-hidden">
      <div class="relative whitespace-nowrap">
        <div class="inline-block animate-marquee px-4 py-2 text-sm font-medium">
          ⚠️ Zoyfk does not intervene in relationships between end users and advertisers.
          <span class="mx-8">•</span>
          Never make any advance payments.
        </div>
      </div>
    </div>
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
                        <li><a href="https://satyam-singh-07.github.io/zoyfk/delhi-escorts.html" class="text-gray-400 hover:text-white transition">Delhi Escorts</a></li>
                        <li><a href="https://satyam-singh-07.github.io/zoyfk/mumbai-escorts.html" class="text-gray-400 hover:text-white transition">Mumbai Call Girls</a></li>
                        <li><a href="https://satyam-singh-07.github.io/zoyfk/bangalore-escorts.html" class="text-gray-400 hover:text-white transition">Bangalore Escorts</a></li>
                        <li><a href="https://satyam-singh-07.github.io/zoyfk/call-girls/hyderabad-call-girls.html" class="text-gray-400 hover:text-white transition">Hyderabad Call Girls</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="https://satyam-singh-07.github.io/zoyfk/cities.html" class="text-gray-400 hover:text-white transition">All Cities</a></li>
                        <li><a href="https://satyam-singh-07.github.io/zoyfk/services.html" class="text-gray-400 hover:text-white transition">Our Services</a></li>
                        <li><a href="#" data-call class="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2">
                        <li class="text-gray-400">24/7 Support</li>
                        <a href="#" data-whatsapp ><li class="text-gray-400">WhatsApp Available</li></a>
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
    <div class="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href="#" data-whatsapp class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
        <img src="assets/icons/whatsapp-icon.svg" class="w-7 h-7" />
      </a>
      <a href="#" data-call class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
        <img src="assets/icons/phone.svg" class="w-7 h-7" />
      </a>
    </div>
  `;

  document.getElementById("header-container").innerHTML = headerHTML;
  document.getElementById("footer-container").innerHTML = footerHTML;
  document.body.insertAdjacentHTML("beforeend", floatingActionsHTML);

  applyContactLinks();

  // Mobile menu toggle (unchanged)
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add("hidden");
      }
    });
  }
}

/* ===============================
   AGE DISCLAIMER (UNCHANGED)
================================ */

function showAgeDisclaimer() {
  if (localStorage.getItem("zoyfk_age_verified")) return;

  const modalHTML = `
    <div id="age-modal" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4">
        <div class="bg-white max-w-lg w-full rounded-xl shadow-2xl p-6 text-center animate-fadeIn">
            <h2 class="text-xl font-bold mb-4 text-gray-900">
                PLEASE READ BEFORE CONTINUING
            </h2>

            <p class="text-gray-700 text-sm mb-4">
                This website contains adult-oriented content and is intended only for users who are
                <strong>18 years of age or older</strong>.
            </p>

            <p class="text-gray-700 text-sm mb-4">
                By continuing, you confirm that you are legally allowed to view adult content in your location.
            </p>

            <div class="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-sm text-yellow-800 mb-5">
                <strong>Important:</strong> Do not pay any advance fees.
                Any request for advance payment may be fraudulent.
                Zoyfk will not be held liable for third-party interactions.
            </div>

            <div class="flex gap-4 justify-center">
                <button
                    id="accept-age"
                    class="btn-primary text-white px-6 py-2 rounded-full font-medium"
                >
                    Accept & Continue
                </button>

                <button
                    id="decline-age"
                    class="border border-gray-300 px-6 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-100"
                >
                    Leave
                </button>
            </div>
        </div>
    </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  document.getElementById("accept-age").onclick = () => {
    localStorage.setItem("zoyfk_age_verified", "true");
    document.getElementById("age-modal").remove();
  };

  document.getElementById("decline-age").onclick = () => {
    document.getElementById("age-modal").remove();
  };
}
