// Pizzon - Modern Dark Theme Interactive Application Script

// Menu Dataset matching Pizzon Template
const pizzonMenu = [
  {
    id: "pz1",
    name: "Cheese Pizza",
    category: "pizza",
    price: 25.00,
    rating: 5,
    description: "Handcrafted crust with signature tomato sauce and melted 100% mozzarella cheese blend.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    badge: "Popular"
  },
  {
    id: "pz2",
    name: "Shrimp Pizza",
    category: "seafood",
    price: 35.00,
    rating: 5,
    description: "Succulent garlic marinated shrimp, fresh herbs, roasted peppers & parmesan mozzarella.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    badge: "Special"
  },
  {
    id: "pz3",
    name: "Seafood Deluxe Pizza",
    category: "seafood",
    price: 65.00,
    rating: 5,
    description: "Premium seafood medley, calamari, shrimp, cherry tomatoes, and creamy lemon garlic pesto.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    badge: "Chef Choice"
  },
  {
    id: "pz4",
    name: "Pepperoni Passion",
    category: "pizza",
    price: 45.00,
    rating: 5,
    description: "Double pepperoni layers, Italian marinara sauce, herbs and molten mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller"
  },
  {
    id: "pz5",
    name: "Swiss Mushroom Truffle",
    category: "pizza",
    price: 55.00,
    rating: 5,
    description: "Sauteed wild mushrooms, white truffle oil, caramelized onions, and aged Swiss cheese.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    badge: "Gourmet"
  },
  {
    id: "pz6",
    name: "Barbeque Chicken Feast",
    category: "chicken",
    price: 40.00,
    rating: 5,
    description: "Smokey BBQ grilled chicken, red onions, sweet corn, cilantro, and smoked gouda.",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80",
    badge: "Favorite"
  }
];

// State
let cart = [];
let activeCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
  renderPizzonMenu();
  setupEventListeners();
  updateCartUI();
});

function setupEventListeners() {
  // Mobile Nav Toggle
  const menuToggleBtn = document.getElementById("pizzon-menu-toggle");
  const mobileDrawer = document.getElementById("pizzon-mobile-drawer");
  const closeDrawerBtn = document.getElementById("close-pizzon-drawer");

  if (menuToggleBtn && mobileDrawer) {
    menuToggleBtn.addEventListener("click", () => {
      mobileDrawer.classList.remove("translate-x-full");
    });
  }

  if (closeDrawerBtn && mobileDrawer) {
    closeDrawerBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("translate-x-full");
    });
  }

  // Cart Drawer Trigger
  const cartTriggerBtns = document.querySelectorAll(".cart-drawer-trigger");
  const cartDrawer = document.getElementById("cart-drawer-modal");
  const closeCartBtn = document.getElementById("close-cart-drawer");

  cartTriggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (cartDrawer) cartDrawer.classList.remove("hidden");
    });
  });

  if (closeCartBtn && cartDrawer) {
    closeCartBtn.addEventListener("click", () => {
      cartDrawer.classList.add("hidden");
    });
  }

  // Search Popup Trigger
  const searchTriggerBtns = document.querySelectorAll(".search-trigger");
  const searchModal = document.getElementById("search-popup-modal");
  const closeSearchBtn = document.getElementById("close-search-popup");

  searchTriggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (searchModal) searchModal.classList.remove("hidden");
    });
  });

  if (closeSearchBtn && searchModal) {
    closeSearchBtn.addEventListener("click", () => {
      searchModal.classList.add("hidden");
    });
  }

  // Reservation Form Submission
  const reservationForm = document.getElementById("reservation-form");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("res-name")?.value || "Guest";
      showToast(`Thank you ${name}! Your table reservation request has been submitted successfully.`);
      reservationForm.reset();
    });
  }
}

// Render Pizzon Menu Cards
function renderPizzonMenu() {
  const container = document.getElementById("pizzon-menu-grid");
  if (!container) return;

  const filtered = activeCategory === "all" ? pizzonMenu : pizzonMenu.filter(item => item.category === activeCategory);

  container.innerHTML = filtered.map(item => `
    <div class="menu-item-box bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600/50 hover-lift flex flex-col justify-between p-5 relative group">
      <!-- Badge -->
      <div class="absolute top-4 left-4 z-10">
        <span class="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">${item.badge}</span>
      </div>

      <!-- Item Image -->
      <div class="relative h-48 sm:h-56 overflow-hidden rounded-2xl mb-4 bg-zinc-950">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover rotate-on-hover transition-transform duration-500">
      </div>

      <!-- Item Content -->
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <h3 class="text-lg font-bold text-white group-hover:text-red-500 transition-colors">${item.name}</h3>
          <span class="text-lg font-extrabold text-amber-400 font-heading">$${item.price.toFixed(2)}</span>
        </div>

        <!-- 5 Star Rating -->
        <div class="flex items-center gap-1 text-amber-400 text-xs mb-3">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>

        <p class="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-6">${item.description}</p>
      </div>

      <!-- Order Now Button -->
      <button onclick="addToPizzonCart('${item.id}')" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
        <i class="fa-solid fa-cart-shopping text-sm"></i> Order Now
      </button>
    </div>
  `).join('');
}

// Add Item to Pizzon Cart
window.addToPizzonCart = function(itemId) {
  const item = pizzonMenu.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  }

  updateCartUI();
  showToast(`Added "${item.name}" to your cart! 🍕`);
};

// Remove item from cart
window.removeFromPizzonCart = function(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  updateCartUI();
};

// Update item quantity
window.updatePizzonQuantity = function(itemId, change) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromPizzonCart(itemId);
  } else {
    updateCartUI();
  }
};

// Update Cart UI
function updateCartUI() {
  const cartCounts = document.querySelectorAll(".cart-count");
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  cartCounts.forEach(el => {
    el.textContent = totalItems;
  });

  const cartListContainer = document.getElementById("cart-drawer-items");
  const subtotalEl = document.getElementById("cart-drawer-subtotal");

  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  if (!cartListContainer) return;

  if (cart.length === 0) {
    cartListContainer.innerHTML = `
      <div class="text-center py-12 text-zinc-500">
        <i class="fa-solid fa-pizza-slice text-4xl mb-3 text-zinc-700"></i>
        <p class="text-sm font-semibold">Your shopping cart is empty</p>
      </div>
    `;
    return;
  }

  cartListContainer.innerHTML = cart.map(item => `
    <div class="flex items-center justify-between gap-3 p-3 bg-zinc-900 rounded-xl border border-zinc-800">
      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover">
      <div class="flex-1 min-w-0">
        <h4 class="text-xs sm:text-sm font-bold text-white truncate">${item.name}</h4>
        <span class="text-[11px] text-amber-400 font-extrabold">$${item.price.toFixed(2)}</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="updatePizzonQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs">
          <i class="fa-solid fa-minus"></i>
        </button>
        <span class="text-xs font-bold text-white w-4 text-center">${item.quantity}</span>
        <button onclick="updatePizzonQuantity('${item.id}', 1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <button onclick="removeFromPizzonCart('${item.id}')" class="text-zinc-500 hover:text-red-500 text-xs p-1">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

// Show Toast
function showToast(message) {
  let toast = document.getElementById("pizzon-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "pizzon-toast";
    toast.className = "fixed bottom-6 right-6 bg-zinc-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-red-600/40 flex items-center gap-3 z-50 transition-all duration-300 opacity-0 translate-y-4";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-7 h-7 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-xs font-bold">
      <i class="fa-solid fa-pizza-slice"></i>
    </div>
    <span class="text-xs sm:text-sm font-semibold">${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove("opacity-0", "translate-y-4");
    toast.classList.add("opacity-100", "translate-y-0");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-4");
  }, 3500);
}
