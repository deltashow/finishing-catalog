// رقم الواتساب الرسمي المعتمد
const WHATSAPP_NUMBER = "201515323171";

// بيانات الباقات لمنصة وساطة وإدارة التشطيبات
const finishingPackages = [
    {
        title: "باقة الـ Classic الاقتصادية",
        badge: "الأكثر طلباً",
        shortDesc: "نوفر لك أفضل المقاولين لتنفيذ تشطيبات أساسية بجودة عالية وأسعار تنافسية مناسبة للاستثمار.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80",
        features: [
            "ترشيح والإشراف على أفضل فرق التنفيذ والعمالة.",
            "مراجعة المواصفات وخامات الكهرباء والسباكة.",
            "تسهيل التعاقد وضمان الالتزام بالمقايسات.",
            "متابعة دورية لسير العمل حتى الاستلام."
        ]
    },
    {
        title: "باقة الـ Premium العصرية",
        badge: "مميز",
        shortDesc: "نربطك بكبرى شركات الديكور لتنفيذ إضاءات حديثة، جبس بورد، وخامات فاخرة لوحدتك.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
        features: [
            "تنسيق كامل مع مصممين وديكورات مودرن.",
            "استخدام بورسلين وخامات فاخرة ومعتمدة.",
            "إشراف هندسي على جودة التشطيبات الدقيقة.",
            "عقود مضمونة وحماية لحقوق العميل بالكامل."
        ]
    },
    {
        title: "باقة الـ Ultra Luxury الفاخرة",
        badge: "حصري",
        shortDesc: "إدارة تنفيذ كاملة لأعلى مستويات الفخامة، الخامات المستوردة، والتشطيبات الخاصة.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&auto=format&fit=crop&q=80",
        features: [
            "تصميم هندسي متكامل وإشراف نخبة الاستشاريين.",
            "تنفيذ ديكورات خاصة ورخام عالي الجودة.",
            "أنظمة منزلية ذكية (Smart Home) معتمدة.",
            "متابعة استثنائية لجميع مراحل التنفيذ والتسليم."
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
                <span style="color: var(--accent-blue); font-size: 0.88rem; font-weight: bold; margin-top: 10px;">استعرض تفاصيل الباقة والخدمة ←</span>
            </div>
        `;

        card.addEventListener('click', () => {
            openModal(pkg);
        });

        catalogContainer.appendChild(card);
    });
}

function openModal(pkg) {
    const whatsappMsg = encodeURIComponent(`السلام عليكم، مهتم بالاستفسار عن ترتيب وتوفير (${pkg.title}) لتوجهاتها عبر شركة DeltaShow.`);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

    modalBody.innerHTML = `
        <img src="${pkg.image}" alt="${pkg.title}" class="modal-img">
        <div class="modal-body-content">
            <span class="card-badge">${pkg.badge}</span>
            <h2>${pkg.title}</h2>
            <p>${pkg.shortDesc}</p>
            <h4 style="color: #ffffff; margin-bottom: 10px; font-size: 1.05rem;">📋 مميزات الخدمة والترشيح الهندسية:</h4>
            <ul class="modal-features">
                ${pkg.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="${whatsappLink}" target="_blank" class="modal-cta">💬 تواصل معنا لترتيب ومعاينة هذه الباقة عبر واتساب</a>
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

// تحديث زر التواصل العام في الصفحة الرئيسية للموقع
document.addEventListener('DOMContentLoaded', () => {
    const generalCtaBtn = document.querySelector('.action-box .cta-btn');
    if (generalCtaBtn) {
        const generalMsg = encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن خدمات الوساطة وإدارة وتنظيم التشطيبات من DeltaShow.");
        generalCtaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMsg}`;
    }
});

renderCatalog();
