/* ==========================================================================
   HORIZON LEGAL ASSOCIATES - INTERACTIVE APPLICATION SCRIPT
   ========================================================================== */

// Practice Areas Dataset
const practiceAreasData = [
  {
    id: "corp-law",
    title: "Corporate & Commercial Law",
    icon: "fa-scale-balanced",
    shortDesc: "Comprehensive business formation, merger & acquisition, regulatory compliance, and commercial contract drafting.",
    fullDesc: "Horizon Legal Associates provides strategic legal counsel to corporations, SMEs, and investors across Pakistan and internationally. Our practice handles business incorporations (SECP), joint ventures, shareholders' agreements, commercial dispute resolution, and cross-border trade compliance.",
    bulletPoints: [
      "SECP & Corporate Regulatory Registrations",
      "Mergers, Acquisitions & Joint Ventures",
      "Commercial Contracts & Lease Agreements",
      "Corporate Restructuring & Insolvency",
      "Cross-Border Investments & Banking Law"
    ]
  },
  {
    id: "const-law",
    title: "Civil & Constitutional Litigation",
    icon: "fa-gavel",
    shortDesc: "High Court writ petitions, constitutional remedies, and strategic representation in high-stakes civil litigation.",
    fullDesc: "Our litigation team represents clients before the High Courts of Sindh, Punjab, and Islamabad, as well as appellate tribunals. We litigate constitutional writ petitions under Article 199, fundamental rights protection, administrative law disputes, and complex civil property claims.",
    bulletPoints: [
      "High Court Writ Petitions & Stay Orders",
      "Constitutional & Administrative Challenges",
      "Appellate Practice & Civil Appeals",
      "Contractual Breach Litigation",
      "Public Interest Litigation (PIL)"
    ]
  },
  {
    id: "prop-law",
    title: "Property & Real Estate Law",
    icon: "fa-building-columns",
    shortDesc: "Land title verification, property litigation, lease agreements, and real estate development compliance.",
    fullDesc: "Real estate in Pakistan demands meticulous title verification and aggressive legal protection. We represent property owners, developers, overseas Pakistanis, and tenants in land title verification (KDA/MDA/SBCA), property boundary disputes, eviction proceedings, and inheritance property partitions.",
    bulletPoints: [
      "Property Title & Mutation Verification",
      "High Court & Civil Land Disputes",
      "Commercial Lease & Conveyance Deeds",
      "Overseas Pakistani Property Protection",
      "Building Plan & SBCA Regulatory Defense"
    ]
  },
  {
    id: "family-law",
    title: "Family & Inheritance Law",
    icon: "fa-users-rectangle",
    shortDesc: "Succession certificates, inheritance partition, family disputes, custody, and matrimonial settlements.",
    fullDesc: "We approach sensitive family matters with discretion, empathy, and uncompromising legal defense. Our family law practice assists clients with succession certificates under the High Court, Muslim Family Laws Ordinance compliance, divorce/khula procedures, child custody, and legal partition of family estates.",
    bulletPoints: [
      "High Court Succession Certificates & Letter of Administration",
      "Inheritance Estate Partition & Will Execution",
      "Child Custody & Guardianship Petitions",
      "Divorce (Khula / Talaq) & Dower Claim Litigation",
      "Pre-Nuptial & Matrimonial Settlement Drafting"
    ]
  },
  {
    id: "crim-law",
    title: "Criminal Defense & Regulatory Affairs",
    icon: "fa-shield-halved",
    shortDesc: "White-collar crime defense, pre-arrest bail petitions, trial defense, and FIA/NAB compliance.",
    fullDesc: "In criminal matters, immediate legal intervention is vital. Our criminal defense advocates provide robust representation at police stations, Sessions Courts, FIA, NAB, and High Courts. We handle pre-arrest and post-arrest bail petitions, financial fraud defense, quashment of FIRs, and trial litigation.",
    bulletPoints: [
      "Pre-Arrest (Bail Before Arrest) & Post-Arrest Bails",
      "Quashment of FIR & Illegal Proceedings",
      "White-Collar Crime, FIA & Banking Offense Defense",
      "NAB Investigation Representation",
      "Criminal Appeals & High Court Revisions"
    ]
  },
  {
    id: "emp-law",
    title: "Employment & Labor Law",
    icon: "fa-briefcase",
    shortDesc: "Workplace agreements, wrongful termination disputes, NIRC petitions, and labor compliance audit.",
    fullDesc: "We advise both employers and senior executive employees on Pakistani labor statutes, industrial relations, employment contracts, non-disclosure agreements (NDAs), and workplace harassment compliance. We litigate before Labor Courts and the National Industrial Relations Commission (NIRC).",
    bulletPoints: [
      "Employment Contracts & Severance Policies",
      "Wrongful Termination & Reinstatement Claims",
      "NIRC & Labor Court Representation",
      "Workplace Harassment Inquiry & Defense",
      "EOBI & Social Security Compliance"
    ]
  },
  {
    id: "tax-law",
    title: "Taxation & Financial Advisory",
    icon: "fa-file-invoice-dollar",
    shortDesc: "FBR tax planning, income tax appeals, sales tax audits, and wealth tax compliance for businesses.",
    fullDesc: "Our tax practice assists corporate entities and high-net-worth individuals in navigating FBR regulations, provincial revenue boards (SRB/PRA), sales tax audits, income tax assessment appeals, and international tax treaties.",
    bulletPoints: [
      "Corporate Income Tax & Sales Tax Advisory",
      "Appeals before Commissioner & ATIR",
      "High Court Tax Reference Petitions",
      "Overseas Asset & Tax Return Declarations",
      "Customs Duty & Tariff Dispute Litigation"
    ]
  },
  {
    id: "ip-law",
    title: "Intellectual Property & Trademarks",
    icon: "fa-copyright",
    shortDesc: "IPO Pakistan trademark registration, copyright protection, patent filing, and infringement litigation.",
    fullDesc: "Protecting brand identity and proprietary assets is critical for business longevity. We represent clients before the Intellectual Property Organization of Pakistan (IPO Pakistan), handling trademark registration, opposition proceedings, copyright enforcement, and IP infringement lawsuits.",
    bulletPoints: [
      "Trademark Search, Filing & IPO Registration",
      "Trademark Opposition & Rectification Petitions",
      "Copyright & Patent Registration",
      "IP Infringement Injunctions & Damages",
      "Franchise & Licensing Agreements"
    ]
  }
];

// Attorneys Team Dataset
const attorneysData = [
  {
    id: "att-1",
    name: "Advocate Tariq Horizon",
    role: "Senior Managing Partner",
    qualifications: "LL.B (Hons), LL.M (London), High Court Advocate",
    experience: "24+ Years Experience",
    specialization: "Constitutional Writs, Corporate M&A, Supreme Court Advocate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Advocate Tariq Horizon is a distinguished litigator with over two decades of practice before the High Courts of Pakistan. He specializes in high-stakes corporate disputes, constitutional writ petitions, and international commercial arbitration."
  },
  {
    id: "att-2",
    name: "Sarah Ahmed",
    role: "Partner – Corporate & Commercial",
    qualifications: "Barrister-at-Law (Lincoln's Inn), LL.M (Harvard)",
    experience: "16+ Years Experience",
    specialization: "SECP Regulatory Compliance, Banking Law, Cross-Border M&A",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Barrister Sarah Ahmed heads the corporate transactions team at Horizon Legal. She regularly advises Fortune 500 multinationals, commercial banks, and tech startups on regulatory structuring and commercial agreements."
  },
  {
    id: "att-3",
    name: "Daniel Khan",
    role: "Partner – Civil & Property Litigation",
    qualifications: "LL.B (LUMS), High Court Advocate",
    experience: "14+ Years Experience",
    specialization: "Property Title Verification, Land Suits, Inheritance Disputes",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Daniel Khan is renowned for his sharp courtroom trial strategy in real estate litigation, title disputes, and High Court land mutation appeals representing domestic and overseas clients."
  },
  {
    id: "att-4",
    name: "Ayesha Malik",
    role: "Senior Associate – Family & Criminal Defense",
    qualifications: "LL.B (Karachi), LL.M (Civil Rights)",
    experience: "10+ Years Experience",
    specialization: "Succession Certificates, Pre-Arrest Bails, Matrimonial Law",
    image: "https://images.unsplash.com/photo-1580894732413-a70d2a840b12?auto=format&fit=crop&w=800&q=80",
    bio: "Ayesha Malik handles sensitive family court proceedings, succession petitions, and criminal bail defenses with fierce advocacy and total client confidentiality."
  }
];

// Insights & Publications Dataset
const insightsData = [
  {
    id: "ins-1",
    title: "Understanding Your Legal Rights Before Signing Commercial Contracts",
    category: "Corporate Law",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Signing a commercial contract without a thorough risk audit can expose your business to severe financial liabilities and legal disputes.",
    content: "When entering into commercial transactions in Pakistan, businesses must carefully evaluate indemnity clauses, dispute resolution jurisdiction, force majeure conditions, and termination rights. Ensuring proper SECP compliance and clear contract drafting prevents costly High Court litigation down the line."
  },
  {
    id: "ins-2",
    title: "Key Steps in Property Title Verification & Land Disputes in Pakistan",
    category: "Real Estate Law",
    date: "September 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    excerpt: "Essential legal guidelines for verifying property titles, KDA/MDA revenue records, and avoiding land fraud in urban Pakistani real estate.",
    content: "Property transactions require strict due diligence. Always verify the physical revenue register (Khatuni/Khasra), inspect non-encumbrance certificates from the Sub-Registrar office, and confirm building approval from SBCA/MDA before making any advance payments."
  },
  {
    id: "ins-3",
    title: "Navigating High Court Succession Certificates & Family Inheritance",
    category: "Family & Estate Law",
    date: "August 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=80",
    excerpt: "A comprehensive legal walkthrough on obtaining Succession Certificates and Letters of Administration for bank accounts, stocks, and estate partition.",
    content: "Under the Succession Act, heirs must file a formal petition supported by NADRA family registration certificates (FRC) and legal notice publications. Our step-by-step guide explains how to expedite court approvals for deceased estates."
  },
  {
    id: "ins-4",
    title: "Pre-Arrest Bail & Protecting Constitutional Personal Liberty",
    category: "Criminal Defense",
    date: "July 04, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    excerpt: "How pre-arrest bail petitions under Section 498 CrPC safeguard individuals against malicious FIRs and unlawful arrest in Pakistan.",
    content: "Pre-arrest bail is an extraordinary equitable remedy granted when there is genuine apprehension of arrest stemming from ulterior motives or false implications. Learn the essential evidentiary standards required by Sessions and High Courts."
  }
];

// Initialize State
document.addEventListener("DOMContentLoaded", () => {
  renderPracticeAreas();
  renderAttorneys();
  renderInsights();
  setupEventListeners();
});

// Render Practice Area Cards
function renderPracticeAreas() {
  const container = document.getElementById("practice-areas-grid");
  if (!container) return;

  container.innerHTML = practiceAreasData.map(area => `
    <div class="legal-card rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center text-xl mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
          <i class="fa-solid ${area.icon}"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 font-serif group-hover:text-amber-400 transition-colors">${area.title}</h3>
        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">${area.shortDesc}</p>
      </div>

      <button onclick="openPracticeModal('${area.id}')" class="text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2 pt-4 border-t border-slate-800 transition-colors">
        <span>Detailed Overview</span>
        <i class="fa-solid fa-arrow-right text-[10px]"></i>
      </button>
    </div>
  `).join('');
}

// Render Attorneys Team Cards
function renderAttorneys() {
  const container = document.getElementById("attorneys-grid");
  if (!container) return;

  container.innerHTML = attorneysData.map(att => `
    <div class="legal-card rounded-2xl overflow-hidden group">
      <div class="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
        <img src="${att.image}" alt="${att.name}" class="w-full h-full object-cover img-zoom">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4">
          <span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">${att.experience}</span>
          <h3 class="text-lg sm:text-xl font-bold text-white font-serif">${att.name}</h3>
          <p class="text-xs text-slate-300 font-medium">${att.role}</p>
        </div>
      </div>

      <div class="p-5 space-y-3 bg-slate-900/80">
        <p class="text-xs text-slate-400 line-clamp-2">${att.bio}</p>
        <div class="text-[11px] text-slate-300 pt-2 border-t border-slate-800">
          <strong class="text-amber-400">Qualifications:</strong> ${att.qualifications}
        </div>
        <button onclick="openAttorneyModal('${att.id}')" class="w-full btn-outline-gold py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider mt-2">
          View Profile & Consult
        </button>
      </div>
    </div>
  `).join('');
}

// Render Insights Articles
function renderInsights() {
  const container = document.getElementById("insights-grid");
  if (!container) return;

  container.innerHTML = insightsData.map(ins => `
    <div class="legal-card rounded-2xl overflow-hidden flex flex-col justify-between group">
      <div>
        <div class="relative h-48 overflow-hidden bg-slate-900">
          <img src="${ins.image}" alt="${ins.title}" class="w-full h-full object-cover img-zoom">
          <span class="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">${ins.category}</span>
        </div>

        <div class="p-5">
          <div class="flex items-center gap-3 text-xs text-slate-400 mb-2">
            <span><i class="fa-regular fa-calendar mr-1"></i>${ins.date}</span>
            <span>•</span>
            <span><i class="fa-regular fa-clock mr-1"></i>${ins.readTime}</span>
          </div>

          <h3 class="text-base font-bold text-white font-serif group-hover:text-amber-400 transition-colors mb-2 line-clamp-2">${ins.title}</h3>
          <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">${ins.excerpt}</p>
        </div>
      </div>

      <div class="p-5 pt-0">
        <button onclick="openInsightModal('${ins.id}')" class="w-full text-left text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider flex items-center gap-2">
          <span>Read Full Article</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile Nav Drawer
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const closeDrawer = document.getElementById("close-mobile-drawer");

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      mobileDrawer.classList.remove("translate-x-full");
    });
  }

  if (closeDrawer && mobileDrawer) {
    closeDrawer.addEventListener("click", () => {
      mobileDrawer.classList.add("translate-x-full");
    });
  }

  // Consultation Booking Form Handler
  const bookingForm = document.getElementById("consultation-booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("book-name")?.value || "Valued Client";
      const service = document.getElementById("book-service")?.value || "General Legal Matter";
      const date = document.getElementById("book-date")?.value || "As soon as possible";
      
      showToast(`Thank you, ${name}. Your consultation request for ${service} on ${date} has been submitted. Our legal coordinator will contact you within 2 business hours.`);
      
      bookingForm.reset();
      closeModal("consultation-modal");
    });
  }

  // General Modal Close buttons
  const modalCloseBtns = document.querySelectorAll(".close-modal-btn");
  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".legal-modal");
      if (modal) modal.classList.add("hidden");
    });
  });
}

// Open Practice Area Modal
window.openPracticeModal = function(id) {
  const area = practiceAreasData.find(a => a.id === id);
  if (!area) return;

  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center text-lg">
          <i class="fa-solid ${area.icon}"></i>
        </div>
        <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">Practice Specialty</span>
      </div>

      <h3 class="text-2xl font-bold text-white font-serif">${area.title}</h3>
      <p class="text-sm text-slate-300 leading-relaxed">${area.fullDesc}</p>

      <div class="pt-3 border-t border-slate-800">
        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Key Legal Services & Capabilities:</h4>
        <ul class="space-y-2 text-xs text-slate-300">
          ${area.bulletPoints.map(pt => `
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-check text-amber-500 mt-0.5"></i>
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row gap-3">
        <button onclick="triggerConsultationFor('${area.title}')" class="w-full btn-gold py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider">
          Book Consultation for ${area.title}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
};

// Open Attorney Modal
window.openAttorneyModal = function(id) {
  const att = attorneysData.find(a => a.id === id);
  if (!att) return;

  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-5">
      <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <img src="${att.image}" alt="${att.name}" class="w-24 h-24 rounded-2xl object-cover border border-amber-500/30">
        <div>
          <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">${att.experience}</span>
          <h3 class="text-2xl font-bold text-white font-serif">${att.name}</h3>
          <p class="text-xs text-slate-300">${att.role}</p>
          <p class="text-xs text-amber-400/90 font-semibold mt-1">${att.qualifications}</p>
        </div>
      </div>

      <p class="text-sm text-slate-300 leading-relaxed">${att.bio}</p>

      <div class="p-4 bg-slate-900 rounded-xl border border-slate-800">
        <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Primary Legal Practice Focus:</h4>
        <p class="text-xs text-slate-200">${att.specialization}</p>
      </div>

      <button onclick="triggerConsultationFor('Attn: ${att.name}')" class="w-full btn-gold py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider">
        Request Consultation with ${att.name}
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
};

// Open Insight Modal
window.openInsightModal = function(id) {
  const ins = insightsData.find(i => i.id === id);
  if (!ins) return;

  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <div class="relative h-44 rounded-xl overflow-hidden bg-slate-900">
        <img src="${ins.image}" alt="${ins.title}" class="w-full h-full object-cover">
      </div>

      <div class="flex items-center gap-3 text-xs text-slate-400">
        <span class="bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase">${ins.category}</span>
        <span>${ins.date}</span>
      </div>

      <h3 class="text-xl font-bold text-white font-serif">${ins.title}</h3>
      <p class="text-sm text-slate-300 leading-relaxed">${ins.content}</p>

      <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400">
        <em>Disclaimer: Legal insights published by Horizon Legal Associates are intended for general educational guidance only and do not constitute formal legal advice.</em>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
};

// Trigger Consultation Modal Pre-filled
window.triggerConsultationFor = function(topic) {
  closeModal("detail-modal");
  
  const modal = document.getElementById("consultation-modal");
  if (modal) {
    const serviceSelect = document.getElementById("book-service");
    if (serviceSelect) serviceSelect.value = topic;
    modal.classList.remove("hidden");
  }
};

window.openConsultationModal = function() {
  const modal = document.getElementById("consultation-modal");
  if (modal) modal.classList.remove("hidden");
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("hidden");
};

// Toast Notification
function showToast(message) {
  let toast = document.getElementById("legal-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "legal-toast";
    toast.className = "fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center gap-3 z-50 transition-all duration-300 opacity-0 translate-y-4 max-w-md";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
      <i class="fa-solid fa-scale-balanced"></i>
    </div>
    <span class="text-xs sm:text-sm font-medium leading-normal">${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove("opacity-0", "translate-y-4");
    toast.classList.add("opacity-100", "translate-y-0");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-4");
  }, 5000);
}
