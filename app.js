// White-Label Reusable Restaurant Pitch App Script

// Theme State Management (Default Dark)
let currentTheme = localStorage.getItem("theme") || "dark-mode";

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  renderMenu();
  setupEventListeners();
  updateCartUI();
});

function applyTheme(theme) {
  currentTheme = theme;
  document.body.classList.remove("dark-mode", "light-mode");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);

  // Update theme toggle icons
  const themeIcons = document.querySelectorAll(".theme-toggle-icon");
  themeIcons.forEach(icon => {
    if (theme === "dark-mode") {
      icon.className = "theme-toggle-icon fa-solid fa-sun text-amber-400";
    } else {
      icon.className = "theme-toggle-icon fa-solid fa-moon text-indigo-400";
    }
  });
}

function toggleTheme() {
  const newTheme = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";
  applyTheme(newTheme);
  showToast(newTheme === "dark-mode" ? "Switched to Dark Theme 🌙" : "Switched to Light Theme ☀️");
}

// Generic White-Label Menu Dataset
const menuItems = [
  {
    id: "p1",
    name: "Chef's Signature Special Pizza",
    category: "pizzas",
    badge: "Bestseller",
    rating: "4.9",
    description: "Loaded with double chicken tikka, capsicum, sweet corn, olives, extra mozzarella & secret signature house sauce.",
    prices: { Small: 690, Medium: 1150, Large: 1650 },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "p2",
    name: "Supreme Chicken Tikka Feast",
    category: "pizzas",
    badge: "Popular",
    rating: "4.8",
    description: "Traditional spicy tikka chunks, red onions, green peppers & overflowing melted mozzarella cheese.",
    prices: { Small: 620, Medium: 1050, Large: 1490 },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "p3",
    name: "Fajita Passion Gourmet Pizza",
    category: "pizzas",
    badge: "Chef Special",
    rating: "4.7",
    description: "Marinated chicken fajita, sliced capsicum, onions, jalapeños & signature tomato herb crust sauce.",
    prices: { Small: 620, Medium: 1050, Large: 1490 },
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: "p4",
    name: "Cheesy Pepperoni Overload",
    category: "pizzas",
    badge: "Classic",
    rating: "4.8",
    description: "Crispy beef pepperoni slices layered over rich marinara sauce and molten double mozzarella.",
    prices: { Small: 650, Medium: 1090, Large: 1550 },
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "p5",
    name: "Garden Veggie Lovers Pizza",
    category: "pizzas",
    badge: "Fresh",
    rating: "4.6",
    description: "Fresh mushrooms, black olives, green bell peppers, diced tomatoes & sweet corn on golden cheese crust.",
    prices: { Small: 580, Medium: 950, Large: 1390 },
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: "p6",
    name: "Creamy Malai Stuffed Crust",
    category: "pizzas",
    badge: "Creamy",
    rating: "4.9",
    description: "Juicy malai boti chicken, creamy garlic sauce base, onions & extra stuffed cheese crust.",
    prices: { Small: 720, Medium: 1190, Large: 1690 },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "b1",
    name: "Crispy Double Zinger Burger",
    category: "burgers",
    badge: "Crispy",
    rating: "4.7",
    description: "Crispy fried chicken fillet, fresh iceberg lettuce, melted cheese & house spicy garlic mayo in a toasted bun.",
    prices: { Single: 450, Combo: 590 },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "b2",
    name: "Smoky Beef Cheese Burger",
    category: "burgers",
    badge: "Juicy",
    rating: "4.6",
    description: "100% pure flame-grilled beef patty, cheddar cheese slice, caramelized onions, pickles & BBQ sauce.",
    prices: { Single: 490, Combo: 650 },
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: "s1",
    name: "Cheesy Garlic Breadsticks",
    category: "sides",
    badge: "Hot Side",
    rating: "4.8",
    description: "Oven-fresh breadsticks brushed with garlic herb butter and smothered in gooey melted mozzarella.",
    prices: { Standard: 390 },
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "s2",
    name: "Spicy Buffalo Wings (6 Pcs)",
    category: "sides",
    badge: "Spicy",
    rating: "4.8",
    description: "Golden crispy fried chicken wings tossed in signature hot buffalo glaze.",
    prices: { Standard: 470 },
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "s3",
    name: "Golden Seasoned Fries Box",
    category: "sides",
    badge: "Crispy",
    rating: "4.5",
    description: "Generous serving of crispy golden fries seasoned with special house spice blend.",
    prices: { Large: 280 },
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: "d1",
    name: "Solo Meal Deal",
    category: "deals",
    badge: "Best Value",
    rating: "4.9",
    description: "1 Small Pizza (Any Flavor) + 1 Loaded Garlic Stick Portion + 1 Soft Drink.",
    prices: { Deal: 950 },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "d2",
    name: "Mega Family Pizza Feast",
    category: "deals",
    badge: "Mega Saver",
    rating: "4.9",
    description: "2 Large Pizzas (Any Flavors) + 6 Hot Wings + 1.5L Chilled Soft Drink Bottle.",
    prices: { Deal: 3390 },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "dr1",
    name: "Chilled Soft Drink (1.5 Litre)",
    category: "drinks",
    badge: "Cold",
    rating: "4.7",
    description: "Choice of Pepsi, 7Up, or Mirinda (1.5L bottle).",
    prices: { Bottle: 190 },
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: "dr2",
    name: "Molten Choco Lava Dessert",
    category: "drinks",
    badge: "Sweet",
    rating: "4.9",
    description: "Warm chocolate cake with a rich, oozing chocolate center.",
    prices: { Portion: 340 },
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    popular: true
  }
];

// State Management
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let selectedOrderType = "Delivery";

// Event Listeners Setup
function setupEventListeners() {
  // Theme Toggle Buttons
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  // Mobile Nav Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeMobileNavBtn = document.getElementById("close-mobile-nav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.remove("translate-x-full");
    });
  }

  if (closeMobileNavBtn && mobileNav) {
    closeMobileNavBtn.addEventListener("click", () => {
      mobileNav.classList.add("translate-x-full");
    });
  }

  document.querySelectorAll("#mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileNav) mobileNav.classList.add("translate-x-full");
    });
  });

  // Search Filter
  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }

  // Category Filter Tabs
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".category-tab").forEach(t => {
        t.classList.remove("bg-red-600", "text-white", "shadow-md");
        t.classList.add("bg-zinc-800", "text-zinc-300", "hover:bg-zinc-700");
      });
      const target = e.currentTarget;
      target.classList.remove("bg-zinc-800", "text-zinc-300", "hover:bg-zinc-700");
      target.classList.add("bg-red-600", "text-white", "shadow-md");
      currentCategory = target.dataset.category;
      renderMenu();
    });
  });

  // Cart Modal Toggle
  const cartTriggerBtns = document.querySelectorAll(".cart-trigger");
  const cartModal = document.getElementById("cart-modal");
  const closeCartBtn = document.getElementById("close-cart-modal");

  cartTriggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (cartModal) cartModal.classList.remove("hidden");
    });
  });

  if (closeCartBtn && cartModal) {
    closeCartBtn.addEventListener("click", () => {
      cartModal.classList.add("hidden");
    });
  }

  // Fulfillment Type Selector inside Cart Modal
  document.querySelectorAll(".fulfillment-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".fulfillment-option").forEach(b => {
        b.classList.remove("bg-red-600", "border-red-500", "text-white");
        b.classList.add("bg-zinc-800", "border-zinc-700", "text-zinc-300");
      });
      const selected = e.currentTarget;
      selected.classList.remove("bg-zinc-800", "border-zinc-700", "text-zinc-300");
      selected.classList.add("bg-red-600", "border-red-500", "text-white");
      selectedOrderType = selected.dataset.type;
    });
  });

  // WhatsApp Order Submission
  const whatsappOrderBtn = document.getElementById("whatsapp-order-btn");
  if (whatsappOrderBtn) {
    whatsappOrderBtn.addEventListener("click", sendWhatsAppOrder);
  }
}

// Render Menu Cards
function renderMenu() {
  const container = document.getElementById("menu-grid");
  if (!container) return;

  const filtered = menuItems.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                          item.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800">
        <i class="fa-solid fa-pizza-slice text-5xl text-zinc-600 mb-4"></i>
        <h3 class="text-xl font-bold text-white mb-2">No Items Found</h3>
        <p class="text-zinc-400">Try searching for something else like "Tikka" or "Burger"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const defaultSize = Object.keys(item.prices)[0];
    const defaultPrice = item.prices[defaultSize];

    return `
      <div class="food-card bg-zinc-900/90 rounded-2xl overflow-hidden border border-red-900/30 shadow-md hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col">
        <!-- Image Container -->
        <div class="relative h-48 sm:h-52 overflow-hidden bg-zinc-950">
          <img src="${item.image}" alt="${item.name}" class="food-card-img w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <!-- Badges -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-2">
            ${item.badge ? `<span class="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">${item.badge}</span>` : ''}
          </div>
          
          <div class="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-amber-400/30">
            <i class="fa-solid fa-star text-amber-400"></i> ${item.rating}
          </div>
        </div>

        <!-- Body -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white mb-1 line-clamp-1">${item.name}</h3>
            <p class="text-zinc-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">${item.description}</p>
          </div>

          <div>
            <!-- Size Selector Pills -->
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
                <span id="price-display-${item.id}" class="text-base sm:text-lg font-extrabold text-red-500">
                  Rs. ${defaultPrice}
                </span>
              </div>

              <button 
                onclick="addToCart('${item.id}')"
                class="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md red-glow">
                <i class="fa-solid fa-plus text-xs"></i> Add to Order
              </button>
            </div>
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
  const item = menuItems.find(i => i.id === itemId);
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
  showToast(`Added "${item.name}" to your order!`);

  const cartBadge = document.getElementById("cart-count-badge");
  if (cartBadge) {
    cartBadge.classList.add("cart-badge-bump");
    setTimeout(() => cartBadge.classList.remove("cart-badge-bump"), 300);
  }
};

// Remove from Cart
window.removeFromCart = function(cartKey) {
  cart = cart.filter(c => c.cartKey !== cartKey);
  updateCartUI();
};

// Change Item Quantity
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

// Update Cart UI everywhere
function updateCartUI() {
  const cartCountElements = document.querySelectorAll(".cart-count");
  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  cartCountElements.forEach(el => {
    el.textContent = totalCount;
  });

  const cartItemsContainer = document.getElementById("cart-modal-items");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartTotalEl = document.getElementById("cart-total");

  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const deliveryFee = subtotal > 0 && selectedOrderType === "Delivery" ? 100 : 0;
  const grandTotal = subtotal + deliveryFee;

  if (cartSubtotalEl) cartSubtotalEl.textContent = `Rs. ${subtotal}`;
  if (cartTotalEl) cartTotalEl.textContent = `Rs. ${grandTotal}`;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-10 text-zinc-400">
        <i class="fa-solid fa-basket-shopping text-4xl mb-3 text-zinc-600"></i>
        <p class="font-medium text-sm">Your order basket is currently empty.</p>
        <p class="text-xs text-zinc-500 mt-1">Select items from our menu to begin.</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="flex items-center justify-between gap-3 p-3 bg-zinc-900 rounded-xl border border-zinc-800">
      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover">
      
      <div class="flex-1 min-w-0">
        <h4 class="text-xs sm:text-sm font-bold text-white truncate">${item.name}</h4>
        <span class="text-[11px] text-zinc-400">Size: ${item.size} • Rs. ${item.price}</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="updateQuantity('${item.cartKey}', -1)" class="w-6 h-6 rounded-md bg-zinc-800 text-zinc-300 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs transition-colors">
          <i class="fa-solid fa-minus"></i>
        </button>
        <span class="text-xs font-bold text-white w-4 text-center">${item.quantity}</span>
        <button onclick="updateQuantity('${item.cartKey}', 1)" class="w-6 h-6 rounded-md bg-zinc-800 text-zinc-300 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs transition-colors">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <button onclick="removeFromCart('${item.cartKey}')" class="text-zinc-500 hover:text-red-500 p-1 text-xs">
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
  const notes = document.getElementById("customer-notes")?.value || "None";

  let message = `🍕 *NEW ONLINE ORDER*\n`;
  message += `------------------------------------\n`;
  message += `*Order Type:* ${selectedOrderType}\n`;
  message += `*Customer Name:* ${customerName}\n`;
  message += `*Contact Phone:* ${customerPhone}\n`;
  if (selectedOrderType === "Delivery") {
    message += `*Delivery Address:* ${customerAddress}\n`;
  }
  message += `------------------------------------\n`;
  message += `*ORDER ITEMS:*\n`;

  let subtotal = 0;
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    message += `${idx + 1}. ${item.name} (${item.size}) x${item.quantity} = Rs. ${itemTotal}\n`;
  });

  const deliveryFee = selectedOrderType === "Delivery" ? 100 : 0;
  const total = subtotal + deliveryFee;

  message += `------------------------------------\n`;
  message += `*Subtotal:* Rs. ${subtotal}\n`;
  if (selectedOrderType === "Delivery") {
    message += `*Delivery Charges:* Rs. ${deliveryFee}\n`;
  }
  message += `*TOTAL AMOUNT:* Rs. ${total}\n`;
  message += `*Notes:* ${notes}\n`;
  message += `------------------------------------\n`;
  message += `Thank you! Please confirm my order.`;

  const phone = "923000000000"; // Placeholder Phone
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  window.open(whatsappUrl, "_blank");
}

// Show Toast Notification
function showToast(message) {
  let toast = document.getElementById("custom-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "custom-toast";
    toast.className = "fixed bottom-6 right-6 bg-zinc-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-red-600/40 flex items-center gap-3 z-50 transition-all duration-300 opacity-0 translate-y-4";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-7 h-7 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-xs font-bold">
      <i class="fa-solid fa-check"></i>
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
