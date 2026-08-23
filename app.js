// Pizza Mania / Universal Pitch Application Script

// Menu Dataset in Pakistani Rupees (Rs.)
const pizzaManiaMenu = [
  {
    id: "pm1",
    name: "Chef's Special Tikka Feast Pizza",
    category: "pizza",
    price: 1150,
    rating: 5,
    description: "Loaded with spicy chicken tikka chunks, sweet corn, green peppers, black olives & double mozzarella.",
    prices: { Small: 650, Medium: 1150, Large: 1650 },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller"
  },
  {
    id: "pm2",
    name: "Creamy Malai Crust Pizza",
    category: "pizza",
    price: 1250,
    rating: 5,
    description: "Juicy malai chicken boti, creamy garlic sauce base, sliced onions & extra stuffed mozzarella crust.",
    prices: { Small: 720, Medium: 1250, Large: 1750 },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    badge: "Chef Special"
  },
  {
    id: "pm3",
    name: "Cheesy Pepperoni Overload",
    category: "pizza",
    price: 1190,
    rating: 5,
    description: "Double crispy beef pepperoni slices over rich marinara sauce and molten double mozzarella.",
    prices: { Small: 690, Medium: 1190, Large: 1690 },
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    badge: "Classic"
  },
  {
    id: "pm4",
    name: "Crispy Double Zinger Burger",
    category: "burgers",
    price: 490,
    rating: 5,
    description: "Crispy fried chicken breast fillet, iceberg lettuce, melted cheddar cheese & house spicy mayo in a toasted bun.",
    prices: { Single: 490, Combo: 650 },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    badge: "Crispy"
  },
  {
    id: "pm5",
    name: "Loaded Cheesy Garlic Sticks",
    category: "sides",
    price: 390,
    rating: 5,
    description: "Oven-fresh breadsticks brushed with garlic herb butter and smothered in gooey melted mozzarella.",
    prices: { Standard: 390 },
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80",
    badge: "Hot Side"
  },
  {
    id: "pm6",
    name: "Spicy Buffalo Wings (6 Pcs)",
    category: "sides",
    price: 470,
    rating: 5,
    description: "Golden crispy fried wings tossed in signature hot buffalo glaze.",
    prices: { Standard: 470 },
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    badge: "Spicy"
  }
];

// State
let cart = [];
let activeCategory = "all";
let selectedFulfillment = "Delivery";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupEventListeners();
  updateCartUI();
});

function setupEventListeners() {
  // Mobile Nav Drawer Toggle
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

  // Reservation Form
  const reservationForm = document.getElementById("reservation-form");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("res-name")?.value || "Guest";
      showToast(`Thank you ${name}! Your table reservation has been received.`);
      reservationForm.reset();
    });
  }

  // WhatsApp Order Button
  const whatsappOrderBtn = document.getElementById("whatsapp-order-btn");
  if (whatsappOrderBtn) {
    whatsappOrderBtn.addEventListener("click", sendWhatsAppOrder);
  }
}

// Render Menu Cards
function renderMenu() {
  const container = document.getElementById("pizzon-menu-grid");
  if (!container) return;

  const filtered = activeCategory === "all" ? pizzaManiaMenu : pizzaManiaMenu.filter(item => item.category === activeCategory);

  container.innerHTML = filtered.map(item => `
    <div class="menu-item-box bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 hover-lift flex flex-col justify-between p-5 relative group">
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
          <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">${item.name}</h3>
          <span class="text-base sm:text-lg font-extrabold text-yellow-400 font-heading">Rs. ${item.price}</span>
        </div>

        <!-- 5 Star Rating -->
        <div class="flex items-center gap-1 text-yellow-400 text-xs mb-3">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>

        <p class="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">${item.description}</p>
      </div>

      <!-- Order Now Button -->
      <button onclick="addToCart('${item.id}')" class="w-full btn-yellow text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md">
        <i class="fa-solid fa-cart-shopping"></i> Add To Order
      </button>
    </div>
  `).join('');
}

// Add Item to Cart
window.addToCart = function(itemId) {
  const item = pizzaManiaMenu.find(i => i.id === itemId);
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
  showToast(`Added "${item.name}" to your order! 🍕`);
};

// Remove from cart
window.removeFromCart = function(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  updateCartUI();
};

// Change quantity
window.updateQuantity = function(itemId, change) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(itemId);
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
  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal}`;

  if (!cartListContainer) return;

  if (cart.length === 0) {
    cartListContainer.innerHTML = `
      <div class="text-center py-12 text-zinc-500">
        <i class="fa-solid fa-pizza-slice text-4xl mb-3 text-zinc-700"></i>
        <p class="text-sm font-semibold">Your order basket is currently empty</p>
      </div>
    `;
    return;
  }

  cartListContainer.innerHTML = cart.map(item => `
    <div class="flex items-center justify-between gap-3 p-3 bg-zinc-900 rounded-xl border border-zinc-800">
      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover">
      <div class="flex-1 min-w-0">
        <h4 class="text-xs sm:text-sm font-bold text-white truncate">${item.name}</h4>
        <span class="text-[11px] text-yellow-400 font-extrabold">Rs. ${item.price}</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:bg-yellow-500 hover:text-zinc-950 flex items-center justify-center text-xs">
          <i class="fa-solid fa-minus"></i>
        </button>
        <span class="text-xs font-bold text-white w-4 text-center">${item.quantity}</span>
        <button onclick="updateQuantity('${item.id}', 1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:bg-yellow-500 hover:text-zinc-950 flex items-center justify-center text-xs">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <button onclick="removeFromCart('${item.id}')" class="text-zinc-500 hover:text-red-500 text-xs p-1">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

// Send WhatsApp Order
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Please add items to your cart before ordering!");
    return;
  }

  const customerName = document.getElementById("customer-name")?.value || "Valued Customer";
  const customerPhone = document.getElementById("customer-phone")?.value || "Not provided";
  const customerAddress = document.getElementById("customer-address")?.value || "Pickup / Call to confirm";

  let message = `🍕 *NEW PIZZA ORDER*\n`;
  message += `------------------------------------\n`;
  message += `*Customer:* ${customerName}\n`;
  message += `*Phone:* ${customerPhone}\n`;
  message += `*Address:* ${customerAddress}\n`;
  message += `------------------------------------\n`;
  message += `*ORDER ITEMS:*\n`;

  let subtotal = 0;
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    message += `${idx + 1}. ${item.name} x${item.quantity} = Rs. ${itemTotal}\n`;
  });

  message += `------------------------------------\n`;
  message += `*TOTAL BILL:* Rs. ${subtotal}\n`;
  message += `------------------------------------\n`;
  message += `Thank you! Please confirm my order.`;

  const phone = "923000000000";
  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
}

// Toast
function showToast(message) {
  let toast = document.getElementById("custom-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "custom-toast";
    toast.className = "fixed bottom-6 right-6 bg-zinc-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-yellow-500/40 flex items-center gap-3 z-50 transition-all duration-300 opacity-0 translate-y-4";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-7 h-7 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xs font-bold">
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
