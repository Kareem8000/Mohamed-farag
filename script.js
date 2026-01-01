// Initialize Lucide Icons
lucide.createIcons();

// Data Constants
const SERVICES = [
    { id: 'implants', title: 'زراعة الأسنان', description: 'تعويض الأسنان المفقودة بأحدث تقنيات الغرس لنتائج دائمة ومظهر طبيعي.', icon: 'anchor' },
    { id: 'root-canal', title: 'حشو وعلاج الجذور', description: 'علاج العصب بدقة عالية لإنقاذ السن والتخلص من الألم نهائياً.', icon: 'activity' },
    { id: 'surgery', title: 'جراحة وجه وفكين', description: 'جراحات متخصصة للفكين والأسنان المنطمرة والأكياس والاورام بأمان تام.', icon: 'stetho-scope' },
    { id: 'prosthetics', title: 'تركيبات الأسنان', description: 'تيجان وجسور (زيركون - إيماكس) لاستعادة وظيفة وشكل الأسنان الجمالي.', icon: 'layers' },
    { id: 'cosmetic', title: 'تجميل الأسنان', description: 'ابتسامة هوليود، فينير، وتبييض الأسنان لابتسامة مشرقة وجذابة.', icon: 'sparkles' },
    { id: 'orthodontics', title: 'تقويم الأسنان', description: 'تصحيح تزاحم الأسنان ومشاكل الإطباق لتحسين المظهر والوظيفة (معدني وشفاف).', icon: 'git-commit' },
    { id: 'gum', title: 'علاج اللثة', description: 'علاج التهابات اللثة وانحسارها وإزالة الجير للحفاظ على ثبات الأسنان.', icon: 'heart' },
    { id: 'pediatric', title: 'أسنان الأطفال', description: 'رعاية خاصة لأسنان الأطفال ومتابعة التبديل وعلاج التسوس في بيئة محببة.', icon: 'smile' },
    { id: 'general', title: 'أسنان بالغين', description: 'فحص شامل، حشوات تجميلية، وتنظيف وقائي للحفاظ على صحة الفم.', icon: 'shield-check' }
];

const REVIEWS = [
    { patientName: "Ahmed Gawish", rating: 5, text: "Perfect", date: "قبل يومين", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW2kDN2kzfXdyzc54CjScy5wgYSvN9PmCvYgedyOXRNzrtrZc5E=s1920-c-rp-mo-ba3-br100" },
    { patientName: "Aya Hamedo", rating: 5, text: "ممتاز", date: "قبل 4 أيام", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWsxFYWi8cGNohsUsht8-pTlXsH1ne7IT1EUFMntUt6lshSuG84=s1920-c-rp-mo-br100" },
    { patientName: "Haneen Badawi", rating: 5, text: "خلعت ضروس العقل ال٤ مع الدكتور ماشاء الله عليه سريع وشاطر وفاهم شغله الاستقبال رائع والعيادة نظيفة وكل شي تمام يعطيهم العافية", date: "منذ أسبوع", avatar: "https://lh3.googleusercontent.com/a/ACg8ocI6IpRHS9IQkI_WaMY_o_Od3OONfLlHHtU7nW8AavGrFF7a6w=s1920-c-rp-mo-ba3-br100" },
    { patientName: "oya oya", rating: 5, text: "دكتور محترم جدا وشاطر ما شاء الله ومستمع جدا وصبور وما شاء الله ربنا يزيده من علمه ويحسن ما بين ايديه محستش ب اي الم ف ضرس العقل وكنت مرعوبه والموضوع طلع مع الدكتور بسيط الحمد لله", date: "منذ 9 أيام", avatar: "https://lh3.googleusercontent.com/a/ACg8ocLBShl0BBqX1zHLQuYNVYD9eNgadetcw--mhKYj9A0dRWddNw=s1920-c-rp-mo-br100" },
    { patientName: "Hany Al-Khozahi", rating: 5, text: "السهل الممتع ما شاء الله يا دكتور محمد أفضل من قابلت في طب الأسنان", date: "منذ 10 أيام", avatar: "https://lh3.googleusercontent.com/a/ACg8ocKby1d_407DaTr8OnfFlLTxR9zoM5ovs4UZNJRCyIChQhRSbQ=s1920-c-rp-mo-br100" }
];

const HERO_SLIDES = [
    { image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop", title: "ابتسامة واثقة،", highlight: "حياة أفضل", desc: "نجمع بين الخبرة الطبية وأحدث التقنيات لنمنحك الابتسامة التي تستحقها." },
    { image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop", title: "رعاية أسنان", highlight: "بلمسة فنية", desc: "خدمات تجميلية وعلاجية شاملة بأعلى معايير التعقيم والجودة." },
    { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", title: "خبرة سنوات", highlight: "في خدمتك", desc: "عيادة د. محمد فرج، حيث تلتقي المهنية بالراحة النفسية." }
];

const CASES = [
    { id: 1, image: "/images/case-1.jpg" },
    { id: 2, image: "/images/case-2.jpg" },
    { id: 3, image: "/images/case-3.jpg" },
    { id: 4, image: "/images/case-4.jpg" },
    { id: 5, image: "/images/case-5.jpg" }
];

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.remove('py-4');
        nav.classList.add('py-2');
    } else {
        nav.classList.remove('py-2');
        nav.classList.add('py-4');
    }
});

// Hero Slideshow Logic
let currentSlide = 0;
const heroSlidesContainer = document.getElementById('hero-slides');
const slideIndicators = document.getElementById('slide-indicators');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');

function initHero() {
    HERO_SLIDES.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slideDiv.innerHTML = `
            <img src="${slide.image}" alt="Clinic Background">
            <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30"></div>
        `;
        heroSlidesContainer.appendChild(slideDiv);

        const indicator = document.createElement('button');
        indicator.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-medical-accent w-8' : 'bg-white/30 hover:bg-white/60'}`;
        indicator.onclick = () => goToSlide(index);
        slideIndicators.appendChild(indicator);
    });
    updateHeroText();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = slideIndicators.querySelectorAll('button');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('bg-medical-accent', 'w-8');
    indicators[currentSlide].classList.add('bg-white/30');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('bg-medical-accent', 'w-8');
    indicators[currentSlide].classList.remove('bg-white/30');
    
    updateHeroText();
}

function updateHeroText() {
    const slide = HERO_SLIDES[currentSlide];
    heroTitle.innerHTML = `
        ${slide.title} <br class="md:hidden" />
        <span class="text-medical-accent relative inline-block">
            ${slide.highlight}
            <svg class="absolute w-full h-3 -bottom-1 right-0 text-medical-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" />
            </svg>
        </span>
    `;
    heroDesc.textContent = slide.desc;
}

setInterval(() => {
    goToSlide((currentSlide + 1) % HERO_SLIDES.length);
}, 5000);

// Experience Counter
function initCounter() {
    const counterElement = document.getElementById('experience-count');
    let count = 0;
    const target = 9;
    const interval = setInterval(() => {
        count++;
        counterElement.textContent = count;
        if (count === target) clearInterval(interval);
    }, 150);
}

// Render Services
function initServices() {
    const grid = document.getElementById('services-grid');
    SERVICES.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'reveal bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2';
        card.style.transitionDelay = `${index * 50}ms`;
        card.innerHTML = `
            <div class="w-14 h-14 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-accent mb-6 group-hover:bg-medical-accent group-hover:text-white transition-colors duration-300">
                <i data-lucide="${service.icon}"></i>
            </div>
            <h3 class="text-xl font-bold text-medical-primary mb-3">${service.title}</h3>
            <p class="text-stone-500 leading-relaxed text-sm">${service.description}</p>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

// Render Before/After Cases
function initCases() {
    const container = document.getElementById('scroll-container');
    const allCases = [...CASES, ...CASES, ...CASES, ...CASES];
    allCases.forEach((item) => {
        const caseDiv = document.createElement('div');
        caseDiv.className = 'w-[85vw] md:w-[600px] aspect-video bg-medical-50 rounded-2xl overflow-hidden shadow-lg border border-stone-100 group hover:shadow-xl transition-all duration-300 flex-shrink-0 relative';
        caseDiv.innerHTML = `
            <div class="relative w-full h-full">
                <img src="${item.image}" alt="Case ${item.id}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/640x360?text=Case+Image'">
                <div class="absolute top-3 right-3 bg-stone-800/80 text-white text-xs px-2 py-1 rounded shadow-sm font-bold">قبل</div>
                <div class="absolute bottom-3 left-3 bg-medical-accent/90 text-white text-xs px-2 py-1 rounded shadow-sm font-bold">بعد</div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-white border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i data-lucide="arrow-down"></i>
                </div>
            </div>
        `;
        container.appendChild(caseDiv);
    });
    lucide.createIcons();
}

// Render Reviews
function initReviews() {
    const container = document.getElementById('reviews-container');
    REVIEWS.forEach((review) => {
        const card = document.createElement('div');
        card.className = 'min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 snap-center flex flex-col justify-between';
        card.innerHTML = `
            <div>
                <div class="flex text-amber-400 mb-4">
                    ${Array(review.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('')}
                </div>
                <p class="text-stone-700 leading-relaxed mb-6 italic">"${review.text}"</p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-stone-50">
                <img src="${review.avatar}" alt="${review.patientName}" class="w-12 h-12 rounded-full object-cover border-2 border-medical-50">
                <div>
                    <p class="font-bold text-medical-primary text-sm">${review.patientName}</p>
                    <p class="text-stone-400 text-xs">${review.date}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    lucide.createIcons();
}

// Reveal on Scroll Logic
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initHero();
    initCounter();
    initServices();
    initCases();
    initReviews();
    reveal();
});
