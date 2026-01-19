document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedProfiles();
});

async function loadFeaturedProfiles() {
  try {
    const res = await fetch("data/profiles.json");
    const profiles = await res.json();

    const featured = profiles
      .filter((p) => p.verified === true && p.status === "online")
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const grid = document.getElementById("featured-profiles-grid");
    grid.innerHTML = featured.map(renderProfileCard).join("");

    // ✅ THIS IS THE FIX
    if (typeof applyContactLinks === "function") {
      applyContactLinks();
    }

  } catch (err) {
    console.error("Failed to load featured profiles", err);
  }
}


function renderProfileCard(p) {
  return `
    <div class="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="relative">
        <img
        src="${p.image || "assets/images/fallback-profile.png"}"
        alt="${p.name}"
        onerror="this.src='assets/images/fallback-profile.png'"
        class="w-full h-64 object-cover"
        />

        <div class="absolute top-4 left-4">
          <span class="city-badge">${p.city}</span>
        </div>

        <div class="absolute top-4 right-4">
          <span class="bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold">
            ${p.age}
          </span>
        </div>
      </div>

      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold">${p.name}</h3>
            <p class="text-gray-500">
              ${p.category}
            </p>
          </div>
          ${p.vip ? `<span class="text-accent font-semibold">VIP</span>` : ""}
        </div>

        <p class="text-gray-600 mb-6 text-sm">
          ${p.description}
        </p>

        <div class="flex justify-between items-center">
          <a
            href="profile.html?id=${p.id}"
            class="btn-primary text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            View Profile
          </a>

          <a
            href=""
            data-whatsapp
            class="inline-flex items-center gap-2 hover:scale-105 transition"
          >
            <img
              src="assets/icons/whatsapp-icon.svg"
              alt="WhatsApp"
              class="w-5 h-5"
              loading="lazy"
            />
            <span class="text-sm font-medium text-green-600">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  `;
}
