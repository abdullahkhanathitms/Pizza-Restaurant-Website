// Red & Black Universal Pitch Application Script

// Menu Dataset in Pakistani Rupees (Rs.) with Small/Medium/Large Size Pricing
const pizzaMenu = [
  {
    id: "dp1",
    name: "Delicious Specialty Pizza",
    category: "pizza",
    badge: "Bestseller",
    rating: 5,
    description: "Handmade dough with double chicken tikka, cherry tomatoes, black olives, mozzarella & basil.",
    prices: { Small: 650, Medium: 1150, Large: 1650 },
    image: "hero-pizza.jpg",
    popular: true
  },
  {
    id: "dp2",
    name: "Creamy Malai Stuffed Crust",
    category: "pizza",
    badge: "Chef Special",
    rating: 5,
    description: "Juicy malai chicken boti, creamy garlic sauce base, sliced onions & extra stuffed mozzarella crust.",
    prices: { Small: 720, Medium: 1250, Large: 1750 },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "dp3",
    name: "Cheesy Pepperoni Overload",
    category: "pizza",
    badge: "Classic",
    rating: 5,
    description: "Double crispy beef pepperoni slices over rich marinara sauce and molten double mozzarella.",
    prices: { Small: 690, Medium: 1190, Large: 1690 },
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "dp4",
    name: "Crispy Double Zinger Burger",
    category: "burgers",
    badge: "Crispy",
    rating: 5,
    description: "Crispy fried chicken breast fillet, iceberg lettuce, melted cheese & house spicy mayo in a toasted bun.",
    prices: { Single: 490, Combo: 650 },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: "dp5",
    name: "Loaded Cheesy Garlic Sticks",
    category: "sides",
    badge: "Hot Side",
    rating: 5,
    description: "Oven-fresh breadsticks brushed with garlic herb butter and smothered in gooey melted mozzarella.",
    prices: { Standard: 390 },
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "dp6",
    name: "Spicy Buffalo Wings (6 Pcs)",
    category: "sides",
    badge: "Spicy",
    rating: 5,
    description: "Golden crispy fried wings tossed in signature hot buffalo glaze.",
    prices: { Standard: 470 },
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    popular: false
  }
];

// State
let cart = [];
let activeCategory = "all";

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

// Render Menu Cards with Small, Medium, Large size tabs
function renderMenu() {
  const container = document.getElementById("pizzon-menu-grid");
  if (!container) return;

  const filtered = activeCategory === "all" ? pizzaMenu : pizzaMenu.filter(item => item.category === activeCategory);

  container.innerHTML = filtered.map(item => {
    const defaultSize = Object.keys(item.prices)[0];
    const defaultPrice = item.prices[defaultSize];

    return `
      <div class="food-card menu-item-box bg-zinc-900/95 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600/60 hover-lift flex flex-col justify-between p-4 sm:p-5 relative group">
        <!-- Badge -->
        <div class="absolute top-4 left-4 z-10">
          <span class="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">${item.badge}</span>
        </div>

        <!-- Item Image (Zoom In On Hover, NO Rotation) -->
        <div class="relative h-48 sm:h-52 overflow-hidden rounded-2xl mb-4 bg-zinc-950">
          <img src="${item.image}" alt="${item.name}" class="zoom-on-hover w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <!-- Item Content -->
        <div>
          <div class="mb-2">
            <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-1">${item.name}</h3>
          </div>

          <!-- 5 Star Red Rating -->
          <div class="flex items-center gap-1 text-red-500 text-xs mb-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>

          <p class="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">${item.description}</p>
        </div>

        <div>
          <!-- Size Selector Pills (Small, Medium, Large) -->
          ${Object.keys(item.prices).length > 1 ? `
            <div class="mb-4">
              <label class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 block">Select Size:</label>
              <div class="grid grid-cols-3 gap-1.5 size-selector-${item.id}">
                ${Object.entries(item.prices).map(([size, price], idx) => `
                  <button type="button" 
                    onclick="selectSize('${item.id}', '${size}', ${price})"
                    class="size-btn-${item.id} text-xs py-1.5 px-2 rounded-lg font-semibold border transition-all ${idx === 0 ? 'bg-red-600/20 border-red-500 text-red-400 font-bold' : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-800'}"
                    data-size="${size}" data-price="${price}">
                    ${size}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Footer Price & Add Button -->
          <div class="flex items-center justify-between pt-3 border-t border-zinc-800">
            <div>
              <span class="text-[10px] text-zinc-400 block font-medium">Price</span>
              <span id="price-display-${item.id}" class="text-base sm:text-lg font-extrabold text-red-500 font-heading">
                Rs. ${defaultPrice}
              </span>
            </div>

            <button onclick="addToCart('${item.id}')" class="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md red-glow">
              <i class="fa-solid fa-cart-shopping text-xs"></i> Order
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Select Size Handler
window.selectSize = function(itemId, size, price) {
  const priceDisplay = document.getElementById(`price-display-${itemId}`);
  if (priceDisplay) {
    priceDisplay.textContent = `Rs. ${price}`;
  }

  const buttons = document.querySelectorAll(`.size-btn-${itemId}`);
  buttons.forEach(btn => {
    if (btn.dataset.size === size) {
      btn.classList.remove('bg-zinc-950', 'border-zinc-800', 'text-zinc-300');
      btn.classList.add('bg-red-600/20', 'border-red-500', 'text-red-400', 'font-bold');
    } else {
      btn.classList.remove('bg-red-600/20', 'border-red-500', 'text-red-400', 'font-bold');
      btn.classList.add('bg-zinc-950', 'border-zinc-800', 'text-zinc-300');
    }
  });
};

// Add Item to Cart
window.addToCart = function(itemId) {
  const item = pizzaMenu.find(i => i.id === itemId);
  if (!item) return;

  let selectedSize = Object.keys(item.prices)[0];
  let selectedPrice = item.prices[selectedSize];

  const activeBtn = document.querySelector(`.size-btn-${itemId}.bg-red-600\\/20`);
  if (activeBtn) {
    selectedSize = activeBtn.dataset.size;
    selectedPrice = parseInt(activeBtn.dataset.price, 10);
  }

  const cartKey = `${itemId}-${selectedSize}`;
  const existing = cart.find(c => c.cartKey === cartKey);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      cartKey,
      id: item.id,
      name: item.name,
      size: selectedSize,
      price: selectedPrice,
      quantity: 1,
      image: item.image
    });
  }

  updateCartUI();
  showToast(`Added "${item.name} (${selectedSize})" to your order! 🍕`);
};

// Remove from cart
window.removeFromCart = function(cartKey) {
  cart = cart.filter(c => c.cartKey !== cartKey);
  updateCartUI();
};

// Change quantity
window.updateQuantity = function(cartKey, change) {
  const item = cart.find(c => c.cartKey === cartKey);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(cartKey);
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
        <i class="fa-solid fa-pizza-slice text-4xl mb-3 text-red-600"></i>
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
        <span class="text-[11px] text-red-400 font-extrabold">Size: ${item.size} • Rs. ${item.price}</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="updateQuantity('${item.cartKey}', -1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs">
          <i class="fa-solid fa-minus"></i>
        </button>
        <span class="text-xs font-bold text-white w-4 text-center">${item.quantity}</span>
        <button onclick="updateQuantity('${item.cartKey}', 1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <button onclick="removeFromCart('${item.cartKey}')" class="text-zinc-500 hover:text-red-500 text-xs p-1">
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
    message += `${idx + 1}. ${item.name} (${item.size}) x${item.quantity} = Rs. ${itemTotal}\n`;
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
    toast.className = "fixed bottom-6 right-6 bg-zinc-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-red-600/50 flex items-center gap-3 z-50 transition-all duration-300 opacity-0 translate-y-4";
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
