// رقم الواتساب الرسمي المعتمد
const WHATSAPP_NUMBER = "201515323171";

// بيانات الباقات تفصيلية مع الصور والمواصفات لكل كارت
const finishingPackages = [
    {
        title: "باقة الـ Classic الاقتصادية",
        badge: "الأكثر طلباً",
        shortDesc: "تشطيبات أساسية بجودة عالية وعملية، مناسبة للوحدات السكنية الاستثمارية.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80",
        features: [
            "تأسيس كهرباء وسباكة بالكامل بأعلى خامات معتمدة.",
            "سيراميك أرضيات عالي الجودة لجميع الغرف.",
            "دهانات أساسية مقاومة للرطوبة والتشققات.",
            "أبواب خشبية داخلية وتأسيس باب أمني رئيسي."
        ]
    },
    {
        title: "باقة الـ Premium العصرية",
        badge: "مميز",
        shortDesc: "تشمل خامات فاخرة، وتفاصيل إضاءة حديثة، وتصميمات دقيقة تناسب المعيشة الراقية.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
        features: [
            "تمديدات إضاءة مخفية (LED Profiles) وديكورات جبس بورد.",
            "بورسلين فاخر للأرضيات والريسبشن.",
            "أساسيات حمامات ومطابخ مودرن بخلاطات مستوردة.",
            "أبواب خشبية مصفحة وأعتاب مرمر طبيعي."
        ]
    },
    {
        title: "باقة الـ Ultra Luxury الفاخرة",
        badge: "حصري",
        shortDesc: "تصميم هندسي متكامل، خامات مستوردة، وتنفيذ ديكورات خاصة بأعلى معايير الرفاهية.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&auto=format&fit=crop&q=80",
        features: [
            "تصميم ديكور 3D هندسي متكامل قبل بدء التنفيذ.",
            "رخام فاخر وأرضيات خشبية باركيه معالجة.",
            "أنظمة تحكم ذكية (Smart Home) للإضاءة والأمان.",
            "واجهات وتفاصيل تشطيب خاصة بأعلى مستوى فخم."
        ]
    }
];

const catalogContainer = document.getElementById('catalogContainer');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

function renderCatalog() {
    catalogContainer.innerHTML = "";
    
    finishingPackages.forEach((pkg) => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        
        card.innerHTML = `
            <img src="${pkg.image}" alt="${pkg.title}" class="card-thumb">
            <div class="card-body">
                <div>
                    <span class="card-badge">${pkg.badge}</span>
                    <h3>${pkg.title}</h3>
                    <p>${pkg.shortDesc}</p>
                </div>
                <span style="color: var(--accent-blue); font-size: 0.88rem; font-weight: bold; margin-top: 10px;">استعرض التفاصيل والمعاينة ←</span>
            </div>
        `;

        card.addEventListener('click', () => {
            openModal(pkg);
        });

        catalogContainer.appendChild(card);
    });
}

function openModal(pkg) {
    const whatsappMsg = encodeURIComponent(`السلام عليكم، مهتم بالاستفسار عن تفاصيل وحجز (${pkg.title}) من كتالوج DeltaShow.`);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

    modalBody.innerHTML = `
        <img src="${pkg.image}" alt="${pkg.title}" class="modal-img">
        <div class="modal-body-content">
            <span class="card-badge">${pkg.badge}</span>
            <h2>${pkg.title}</h2>
            <p>${pkg.shortDesc}</p>
            <h4 style="color: #ffffff; margin-bottom: 10px; font-size: 1.05rem;">📋 تفاصيل ومواصفات الباقة:</h4>
            <ul class="modal-features">
                ${pkg.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="${whatsappLink}" target="_blank" class="modal-cta">💬 احجز أو استفسر عن هذه الباقة عبر واتساب</a>
        </div>
    `;
    modalOverlay.classList.add('active');
}

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// تحديث زر التواصل العام في الصفحة الرئيسية للموقع ليعمل بالرقم المباشر
document.addEventListener('DOMContentLoaded', () => {
    const generalCtaBtn = document.querySelector('.action-box .cta-btn');
    if (generalCtaBtn) {
        const generalMsg = encodeURIComponent("السلام عليكم، أود الاستفسار عن خدمات التشطيبات والمعاينة الهندسية من DeltaShow.");
        generalCtaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMsg}`;
    }
});

renderCatalog();
