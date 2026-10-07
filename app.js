/* ==========================================================================
   HORIZON LEGAL ASSOCIATES - APPLICATION LOGIC & INTERACTION CONTROLLER
   ========================================================================== */

// Practice Areas Data
const practiceAreasData = [
  {
    id: "corp-law",
    title: "Corporate & Commercial Advisory",
    category: "Corporate",
    shortDesc: "Strategic counsel on SECP compliance, business incorporations, joint ventures, M&A, and commercial agreements.",
    fullDesc: "Horizon Legal Associates represents domestic companies, multinational entities, and investors in navigating Pakistan's corporate regulatory framework under the Companies Act 2017. Our team advises on shareholder disputes, corporate governance, SECP compliance, foreign direct investment, and cross-border commercial transactions.",
    bulletPoints: [
      "SECP Company Incorporation & Annual Compliance Audits",
      "Mergers, Acquisitions & Joint Venture Structuring",
      "Shareholders Agreements & Board Governance Counsel",
      "Commercial Lease & Distribution Contract Drafting",
      "Cross-Border Investment & Banking Regulatory Law"
    ]
  },
  {
    id: "const-law",
    title: "Civil & Constitutional Litigation",
    category: "Litigation",
    shortDesc: "Representation in High Court writ petitions, fundamental rights protection, and appellate civil litigation.",
    fullDesc: "Our senior advocates represent individual and corporate litigants before the High Courts of Sindh, Punjab, and Islamabad under Article 199 of the Constitution. We handle stay orders, administrative law challenges, public interest litigation, and appellate proceedings.",
    bulletPoints: [
      "High Court Constitutional Writs (Article 199) & Stay Orders",
      "Administrative Law & Public Regulatory Challenges",
      "Civil Appeals & High Court Revision Petitions",
      "Breach of Contract & Commercial Damage Suits",
      "Arbitration & Out-of-Court Dispute Mediation"
    ]
  },
  {
    id: "prop-law",
    title: "Property & Real Estate Law",
    category: "Real Estate",
    shortDesc: "Property title verification, land partition suits, commercial lease deeds, and SBCA/KDA compliance.",
    fullDesc: "Real estate investments require thorough title verification and proactive legal defense. We represent land owners, property developers, and overseas Pakistanis in title searches, SBCA building clearance, boundary litigation, tenant eviction, and High Court partition suits.",
    bulletPoints: [
      "KDA, MDA, SBCA Title & Mutation Record Verification",
      "High Court Property Partition & Title Disputes",
      "Overseas Pakistani Property Protection & Power of Attorney",
      "Commercial Lease & Conveyance Deed Drafting",
      "Tenant Eviction & Rental Tribunal Litigation"
    ]
  },
  {
    id: "family-law",
    title: "Family & Inheritance Law",
    category: "Family Law",
    shortDesc: "High Court succession certificates, estate distribution, child custody, and matrimonial settlements.",
    fullDesc: "We approach sensitive family matters with discretion, empathy, and uncompromising legal strategy. Our advocates assist clients with succession certificates under the High Court, Muslim Family Laws Ordinance compliance, divorce/khula procedures, child custody, and legal partition of family estates.",
    bulletPoints: [
      "High Court Succession Certificates & Letter of Administration",
      "Inheritance Estate Partition & Execution of Legal Wills",
      "Child Custody & Guardianship Petitions",
      "Divorce (Khula / Talaq) & Dower Claim Litigation",
      "Pre-Nuptial & Family Settlement Agreement Drafting"
    ]
  },
  {
    id: "crim-law",
    title: "Criminal Defense & Regulatory Law",
    category: "Criminal Law",
    shortDesc: "Pre-arrest bail petitions, white-collar crime defense, FIA/NAB proceedings, and quashment of FIRs.",
    fullDesc: "Immediate legal intervention is vital in criminal proceedings. Our criminal defense team provides robust representation before Sessions Courts, High Courts, FIA, and NAB. We handle pre-arrest bails, financial fraud defense, FIR quashments, and criminal trial litigation.",
    bulletPoints: [
      "Pre-Arrest (Bail Before Arrest) & Post-Arrest Bails",
      "Quashment of Malicious FIRs & Illegal Proceedings",
      "White-Collar Crime, FIA & Banking Offense Defense",
      "NAB Inquiry Representation & Appeal Petitions",
      "Criminal Appeals & High Court Sentence Revisions"
    ]
  },
  {
    id: "emp-law",
    title: "Employment & Labor Advisory",
    category: "Labor Law",
    shortDesc: "Workplace agreements, wrongful termination claims, NIRC petitions, and labor law audits.",
    fullDesc: "We advise employers and executive employees on Pakistani labor statutes, industrial relations, employment contracts, NDAs, and workplace harassment compliance. We litigate before Labor Courts and the National Industrial Relations Commission (NIRC).",
    bulletPoints: [
      "Executive Employment Contracts & Non-Compete Clauses",
      "Wrongful Termination Claims & Reinstatement Petitions",
      "NIRC & Labor Appellate Tribunal Litigation",
      "Workplace Harassment Inquiry Committee Representation",
      "EOBI & Social Security Compliance Audits"
    ]
  },
  {
    id: "tax-law",
    title: "Taxation & Financial Litigation",
    category: "Taxation",
    shortDesc: "FBR tax planning, income tax appeals, sales tax audits, and wealth tax compliance.",
    fullDesc: "Our tax practice assists corporate entities and high-net-worth individuals in navigating FBR regulations, provincial revenue boards (SRB/PRA), sales tax audits, income tax assessment appeals, and international tax treaties.",
    bulletPoints: [
      "Corporate Income Tax & Sales Tax Advisory",
      "Appeals before Commissioner & ATIR Tribunal",
      "High Court Tax Reference Petitions",
      "Overseas Asset Declarations & Tax Return Filings",
      "Customs Duty & Tariff Dispute Litigation"
    ]
  },
  {
    id: "ip-law",
    title: "Intellectual Property & Trademarks",
    category: "IP Law",
    shortDesc: "IPO Pakistan trademark registrations, copyright enforcement, and IP infringement lawsuits.",
    fullDesc: "Protecting brand identity and proprietary assets is critical for business longevity. We represent clients before the Intellectual Property Organization of Pakistan (IPO Pakistan), handling trademark registrations, opposition proceedings, and copyright infringement lawsuits.",
    bulletPoints: [
      "Trademark Search, Filing & IPO Registration",
      "Trademark Opposition & Rectification Petitions",
      "Copyright & Patent Registration",
      "IP Infringement Injunctions & Damages Litigation",
      "Franchise & Commercial Licensing Agreements"
    ]
  }
];

// Attorneys Team Data
const attorneysData = [
  {
    id: "att-1",
    name: "Advocate Tariq Horizon",
    role: "Senior Managing Partner",
    qualifications: "LL.B (Hons), LL.M (London), High Court Advocate",
    experience: "25+ Years Experience",
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
    bio: "Barrister Sarah Ahmed heads the corporate transactions practice. She regularly advises Fortune 500 multinationals, commercial banks, and tech startups on SECP regulatory structuring and commercial agreements."
  },
  {
    id: "att-3",
    name: "Daniel Khan",
    role: "Partner – Civil & Property Litigation",
    qualifications: "LL.B (LUMS), High Court Advocate",
    experience: "14+ Years Experience",
    specialization: "Property Title Verification, Land Suits, Inheritance Disputes",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Daniel Khan is renowned for his sharp trial strategy in real estate litigation, title disputes, and High Court land mutation appeals representing domestic and overseas clients."
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

// Insights Data
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
    excerpt: "Essential legal guidelines for verifying property titles, KDA/MDA revenue records, and avoiding land fraud in urban real estate.",
    content: "Property transactions require strict due diligence. Always verify the physical revenue register (Khatuni/Khasra), inspect non-encumbrance certificates from the Sub-Registrar office, and confirm building approval from SBCA/MDA before making any advance payments."
  },
  {
    id: "ins-3",
    title: "Navigating High Court Succession Certificates & Family Inheritance",
    category: "Family Law",
    date: "August 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=80",
    excerpt: "A legal walkthrough on obtaining Succession Certificates and Letters of Administration for bank accounts, stocks, and estate partition.",
    content: "Under the Succession Act, heirs must file a formal petition supported by NADRA family registration certificates (FRC) and legal notice publications. Our step-by-step guide explains how to expedite court approvals for deceased estates."
  },
  {
    id: "ins-4",
    title: "Pre-Arrest Bail & Protecting Constitutional Personal Liberty",
    category: "Criminal Defense",
    date: "July 04, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    excerpt: "How pre-arrest bail petitions under Section 498 CrPC safeguard individuals against malicious FIRs and unlawful arrest.",
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

// Render Practice Area Cards with Lucide SVG Icons
function renderPracticeAreas() {
  const container = document.getElementById("practice-areas-grid");
  if (!container) return;

  container.innerHTML = practiceAreasData.map(area => `
    <div class="legal-card rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center text-xl mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
          <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-12L3 9m18 6L3 15" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 font-serif group-hover:text-amber-400 transition-colors">${area.title}</h3>
        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">${area.shortDesc}</p>
      </div>

      <button onclick="openPracticeModal('${area.id}')" class="text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2 pt-4 border-t border-slate-800 transition-colors">
        <span>Detailed Overview</span>
        <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
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
        <img src="${att.image}" alt="${att.name} - Senior Law Advocate at Horizon Legal" width="400" height="400" loading="lazy" class="w-full h-full object-cover img-zoom">
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
        <button onclick="openAttorneyModal('${att.id}')" class="w-full btn-outline-bronze py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider mt-2">
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
          <img src="${ins.image}" alt="${ins.title}" width="400" height="240" loading="lazy" class="w-full h-full object-cover img-zoom">
          <span class="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">${ins.category}</span>
        </div>

        <div class="p-5">
          <div class="flex items-center gap-3 text-xs text-slate-400 mb-2">
            <span>${ins.date}</span>
            <span>•</span>
            <span>${ins.readTime}</span>
          </div>

          <h3 class="text-base font-bold text-white font-serif group-hover:text-amber-400 transition-colors mb-2 line-clamp-2">${ins.title}</h3>
          <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">${ins.excerpt}</p>
        </div>
      </div>

      <div class="p-5 pt-0">
        <button onclick="openInsightModal('${ins.id}')" class="w-full text-left text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider flex items-center gap-2">
          <span>Read Article</span>
          <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
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
      
      showToast(`Thank you, ${name}. Your consultation request for ${service} on ${date} has been received. Our legal office will contact you within 2 business hours.`);
      
      bookingForm.reset();
      closeModal("consultation-modal");
    });
  }

  // Accordion Keyboard / Focus Accessibility
  const accordions = document.querySelectorAll(".faq-accordion-item");
  accordions.forEach(acc => {
    acc.addEventListener("toggle", () => {
      // Accessible state check
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
        <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">${area.category} Practice</span>
      </div>

      <h3 class="text-2xl font-bold text-white font-serif">${area.title}</h3>
      <p class="text-sm text-slate-300 leading-relaxed">${area.fullDesc}</p>

      <div class="pt-3 border-t border-slate-800">
        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Key Legal Services & Capabilities:</h4>
        <ul class="space-y-2 text-xs text-slate-300">
          ${area.bulletPoints.map(pt => `
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row gap-3">
        <button onclick="triggerConsultationFor('${area.title}')" class="w-full btn-bronze py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider">
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
        <img src="${att.image}" alt="${att.name}" width="96" height="96" class="w-24 h-24 rounded-2xl object-cover border border-amber-500/30">
        <div>
          <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">${att.experience}</span>
          <h3 class="text-2xl font-bold text-white font-serif">${att.name}</h3>
          <p class="text-xs text-slate-300">${att.role}</p>
          <p class="text-xs text-amber-400/90 font-semibold mt-1">${att.qualifications}</p>
        </div>
      </div>

      <p class="text-sm text-slate-300 leading-relaxed">${att.bio}</p>

      <div class="p-4 bg-slate-900 rounded-xl border border-slate-800">
        <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Primary Practice Focus:</h4>
        <p class="text-xs text-slate-200">${att.specialization}</p>
      </div>

      <button onclick="triggerConsultationFor('Attn: ${att.name}')" class="w-full btn-bronze py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider">
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
        <img src="${ins.image}" alt="${ins.title}" width="600" height="200" class="w-full h-full object-cover">
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

// Open Modal by ID
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("hidden");
};

// Open Privacy / Terms / Disclaimer Modals
window.openPrivacyModal = function() {
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-white font-serif">Privacy Policy</h3>
      <p class="text-xs text-slate-300 leading-relaxed">Horizon Legal Associates respects client confidentiality. All consultation requests, personal details, contact numbers, and case summaries submitted to our firm are protected under professional attorney-client privilege. We do not sell, rent, or share client information with third parties.</p>
    </div>
  `;
  modal.classList.remove("hidden");
};

window.openTermsModal = function() {
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-white font-serif">Terms of Representation</h3>
      <p class="text-xs text-slate-300 leading-relaxed">Formal legal representation begins only upon the execution of a written retainer agreement between Horizon Legal Associates and the client. Submitting a consultation form or website message creates an inquiry, but formal advocacy is established after matter evaluation and retainer agreement.</p>
    </div>
  `;
  modal.classList.remove("hidden");
};

window.openDisclaimerModal = function() {
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-white font-serif">Legal Disclaimer</h3>
      <p class="text-xs text-slate-300 leading-relaxed">The contents of this website are for general informational purposes only and do not constitute formal legal advice. Visiting this website, submitting an inquiry, or reviewing legal insights does not form an attorney-client relationship. Clients should consult qualified advocates regarding their specific legal circumstances.</p>
    </div>
  `;
  modal.classList.remove("hidden");
};

// Trigger Consultation Pre-filled
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
      <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-12L3 9m18 6L3 15" /></svg>
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
