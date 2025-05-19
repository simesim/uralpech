// Баннер сверху
const slides = document.querySelectorAll('.slider__slide');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('slider__slide--active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 7000);

showSlide(currentSlide);

// Проекты
const sections = {
  'dveri': {
    title: 'СТУДЕНЧЕСКИЙ КАМПУС УРФУ, ЕКАТЕРИНБУРГ',
    description: 'Комплекс работ по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУПП». В составе противопожарных конструкций комплекса используются двери и перегородки из профильной системы Alutech и стекла Pyrolut.',
    images: [
      'img/projects/door1.webp',
      'img/projects/door2.webp',
      'img/projects/door3.jpg',
      'img/projects/door4.jpg',
      'img/projects/door5.webp',
      'img/projects/door6.jpg',
      'img/projects/door7.webp'
    ]
  },
  'peregorodki': {
    title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА (ДВВС) ЕКАТЕРИНБУРГ',
    description: 'Работы по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». В составе используются перегородки и двери из стального профиля Schuco и стекла Pyrolut с пределами огнестойкости EIW45 и EIW30 соответственно.',
    images: [
      'img/projects/pere1.webp',
      'img/projects/pere2.webp',
      'img/projects/pere3.jpg',
      'img/projects/pere4.jpg',
      'img/projects/pere5.webp',
      'img/projects/pere6.jpg',
      'img/projects/pere7.jpg',
      'img/projects/pere8.jpg',
      'img/projects/pere9.webp'
    ]
  },
  'okna': {
    title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА, КРЫМ',
    description: 'ООО «УКС ГРУП» выполнило работы по проектированию, производству и монтажу огнестойких витражей и дверей. Выполнены технически сложные работы по монтажу витража высотой более 9 метров со внутренними и наружными углами поворотов. В составе конструкций используются противопожарный профиль Alutech серии F50 и W62 с пределами огнестойкости EIW15 и EIW60.',
    images: [
      'img/projects/okno1.webp',
      'img/projects/okno2.webp',
      'img/projects/okno3.jpg',
      'img/projects/okno4.jpg',
      'img/projects/okno5.jpg',
      'img/projects/okno6.webp'
    ]
  },
  'vitrazhi': {
    title: 'КЛУБНЫЙ ДОМ "РИВЬЕРА". ЕКАТЕРИНБУРГ',
    description: 'Комплекс работ по остеклению Клубного дома "Ривьера", с использованием фасадных систем премиального уровня SCHUCO и AGC выполнил завод ООО «УКС груп».',
    images: [
      'img/projects/vetr1.webp',
      'img/projects/vetr2.webp',
      'img/projects/vetr3.jpg',
      'img/projects/vetr4.jpg',
      'img/projects/vetr5.jpg',
      'img/projects/vetr6.jpg',
      'img/projects/vetr7.webp',
    ]
  }
};

let currentSection = 'dveri';
let currentImageIndex = 0;

function changeSection(section, clickedBtn) {
  currentSection = section;
  currentImageIndex = 0;
  const buttons = document.querySelectorAll('.projects__button');
  buttons.forEach(btn => btn.classList.remove('projects__button--active'));
  if (clickedBtn) clickedBtn.classList.add('projects__button--active');
  document.getElementById('textTitle').textContent = sections[section].title;
  document.getElementById('textDescription').textContent = sections[section].description;
  updateImage();
}

function updateImage() {
  document.getElementById('photoContainer').style.background = `url('${sections[currentSection].images[currentImageIndex]}') lightgray 50% / cover no-repeat`;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % sections[currentSection].images.length;
  updateImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + sections[currentSection].images.length) % sections[currentSection].images.length;
  updateImage();
}

document.addEventListener('DOMContentLoaded', () => {
  updateImage();
  const buttons = document.querySelectorAll('.projects__button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');
      if (section && sections[section]) {
        changeSection(section, button);
      }
    });
  });
  const firstButton = document.querySelector('.projects__button');
  if (firstButton) {
    firstButton.classList.add('projects__button--active');
  }

  // Обработчик для выпадающего списка в проектах
  const projectsSelect = document.getElementById('projectsSelect');
  projectsSelect.addEventListener('change', (e) => {
    const section = e.target.value;
    if (section && sections[section]) {
      changeSection(section, null);
    }
  });

  // Обработчик для выпадающего списка в хедере
  const headerNavSelect = document.getElementById('headerNavSelect');
  headerNavSelect.addEventListener('change', (e) => {
    const section = e.target.value;
    if (section) {
      document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
      headerNavSelect.value = ''; // Сброс значения после выбора
    }
  });
});

// О нас
const images = [
  'img/aboutus/ab1.webp',
  'img/aboutus/ab2.webp',
  'img/aboutus/ab3.webp',
  'img/aboutus/ab4.webp',
  'img/aboutus/ab5.webp',
  'img/aboutus/ab6.webp'
];

let currentIndex = 0;
const photoBlock = document.getElementById('photoBlock');
const prevBtn1 = document.getElementById('prevBtn');
const nextBtn1 = document.getElementById('nextBtn');

function updatePhoto() {
  photoBlock.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updatePhoto();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updatePhoto();
}

nextBtn1.addEventListener('click', showNext);
prevBtn1.addEventListener('click', showPrev);

setInterval(showNext, 7000);

updatePhoto();

// Зона видимости (Сертификаты)
const certsliderTrack = document.querySelector('.certificates__slider-track');
const certsliderSlides = document.querySelectorAll('.certificates__slide');
const certsliderPrev = document.querySelector('.certificates__btn--prev');
const certsliderNext = document.querySelector('.certificates__btn--next');
let certsliderIndex = 0;

function updateCertslider() {
    const slideWidth = certsliderSlides[0].offsetWidth + 16;
    const offset = certsliderIndex * slideWidth;
    certsliderTrack.style.transform = `translateX(-${offset}px)`;
    certsliderPrev.disabled = false;
    certsliderNext.disabled = false;
    if (certsliderIndex === 0) certsliderPrev.disabled = true;
    if (certsliderIndex === certsliderSlides.length - 4) certsliderNext.disabled = true;
}

certsliderNext.addEventListener('click', () => {
    certsliderIndex = (certsliderIndex + 1) % certsliderSlides.length;
    updateCertslider();
});

certsliderPrev.addEventListener('click', () => {
    certsliderIndex = (certsliderIndex - 1 + certsliderSlides.length) % certsliderSlides.length;
    updateCertslider();
});

window.addEventListener('load', updateCertslider);

// Модальное окно новостей
const modal = document.getElementById('NewsModal');
const modalTitle = document.getElementById('NewsModalTitle');
const modalImage = document.getElementById('NewsModalImage');
const modalText = document.getElementById('NewsModalText');

// Данные по новостям
const NewsData = [
  {
    title: 'НОВОСТЬ ОДИН',
    image: 'img/news/n1.jpg',
    text: `A balancing rock, also called balanced rock or precarious boulder, is a naturally occurring geological formation...`
  },
  {
    title: 'НОВОСТЬ ДВА',
    image: 'img/news/n2.jpg',
    text: ``
  },
  {
    title: 'НОВОСТЬ ТРИ',
    image: 'img/news/n3.jpg',
    text: ``
  },
  {
    title: 'НОВОСТЬ ЧЕТЫРЕ',
    image: 'img/news/n4.jpg',
    text: ``
  }
];

// Привязка обработчиков ко всем карточкам
document.querySelectorAll('.news__card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const news = NewsData[index];
    modalTitle.innerText = news.title;
    modalImage.src = news.image;
    modalText.innerText = news.text;
    modal.style.display = 'flex';
  });
});

function closeNewsModal() {
  modal.style.display = 'none';
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeNewsModal();
  }
});