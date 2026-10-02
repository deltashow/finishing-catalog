// بيانات الباقات والتشطيبات لعرضها تفاعلياً بشكل جذاب
const finishingPackages = [
    {
        title: "باقة الـ Classic الاقتصادية",
        desc: "تشطيبات أساسية بجودة عالية وعملية، مناسبة للوحدات السكنية الاستثمارية.",
        badge: "الأكثر طلباً"
    },
    {
        title: "باقة الـ Premium العصرية",
        desc: "تشمل خامات فاخرة، وتفاصيل إضاءة حديثة، وتصميمات دقيقة تناسب المعيشة الراقية.",
        badge: "مميز"
    },
    {
        title: "باقة الـ Ultra Luxury الفاخرة",
        desc: "تصميم هندسي متكامل، خامات مستوردة، وتنفيذ ديكورات خاصة بأعلى معايير الرفاهية.",
        badge: "حصري"
    }
];

const catalogContainer = document.getElementById('catalogContainer');

function renderCatalog() {
    catalogContainer.innerHTML = "";
    
    finishingPackages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        
        card.innerHTML = `
            <div>
                <span class="card-badge">${pkg.badge}</span>
                <h3>${pkg.title}</h3>
                <p>${pkg.desc}</p>
            </div>
            <a href="https://wa.me/" target="_blank" style="color: var(--accent-blue); text-decoration: none; font-size: 0.9rem; font-weight: bold; margin-top: 10px; display: inline-block;">استفسر عن التفاصيل ←</a>
        `;
        catalogContainer.appendChild(card);
    });
}

renderCatalog();
