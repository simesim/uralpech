function initUKSWebsite() {

  function checkWebPSupport(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  checkWebPSupport(function (isSupported) {
    const stats = document.querySelector('.stats');
    if (stats) {
      const webp = stats.dataset.webp;
      const fallback = stats.dataset.fallback;
      const url = isSupported ? webp : fallback;
      stats.style.backgroundImage = `url('${url}')`;
    }
    const contact = document.querySelector('.contact__container');
    if (contact) {
      const webp = contact.dataset.webp;
      const fallback = contact.dataset.fallback;
      const url = isSupported ? webp : fallback;
      contact.style.backgroundImage = `url('${url}')`;
    }
  });

  // Баннер сверху
  const slides = document.querySelectorAll('.slider__slide');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  let currentSlide = 0;

  function showSlide(index) {
    const slideElement = slides[index];

    checkWebPSupport(function (isSupported) {
      const imageUrl = isSupported ?
        slideElement.dataset.webp || slideElement.style.backgroundImage :
        slideElement.dataset.fallback || slideElement.style.backgroundImage;

      slideElement.style.backgroundImage = `url('${imageUrl}')`;
    });

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
  const navBtn = document.querySelector('.header__nav-mobile');
  const closeBtn = document.querySelector('.header__close-btn');
  const navLinks = document.querySelector('.header__links');
  const linkItems = document.querySelectorAll('.header__link');

  navBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
    navBtn.classList.add('active');
    closeBtn.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    linkItems.forEach(link => link.classList.remove('active'));
  });

  linkItems.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
        e.preventDefault();
        link.classList.toggle('active');
      }
    });
  });


  const navLinkItems = document.querySelectorAll('.header__link-a-mobile');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      linkItems.forEach(link => link.classList.remove('active'));
    });
  });

  // Проекты
  // Проекты
  const sections = {
    'dveri': {
      title: 'СТУДЕНЧЕСКИЙ КАМПУС УРФУ, ЕКАТЕРИНБУРГ',
      description: 'Комплекс работ по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУПП». В составе противопожарных конструкций комплекса используются двери и перегородки из профильной системы Alutech и стекла Pyrolut.',
      images: [
        {
          webp: './static/webp/new_index/generators/door1.webp',
          fallback: './static/img/new_index/generators/door1.png'
        },
        {
          webp: './static/webp/new_index/generators/door2.webp',
          fallback: './static/img/new_index/generators/door2.png'
        },
        {
          webp: './static/webp/new_index/generators/door3.webp',
          fallback: './static/img/new_index/generators/door3.png'
        },
        {
          webp: './static/webp/new_index/generators/door4.webp',
          fallback: './static/img/new_index/generators/door4.png'
        },
        {
          webp: './static/webp/new_index/generators/door5.webp',
          fallback: './static/img/new_index/generators/door5.png'
        },
        {
          webp: './static/webp/new_index/generators/door6.webp',
          fallback: './static/img/new_index/generators/door6.png'
        },
        {
          webp: './static/webp/new_index/generators/door7.webp',
          fallback: './static/img/new_index/generators/door7.png'
        }
      ]
    },
    'peregorodki': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА (ДВВС) ЕКАТЕРИНБУРГ',
      description: 'Работы по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». В составе используются перегородки и двери из стального профиля Schuco и стекла Pyrolut с пределами огнестойкости EIW45 и EIW30 соответственно.',
      images: [
        {
          webp: './static/webp/new_index/generators/pere1.webp',
          fallback: './static/img/new_index/generators/pere1.png'
        },
        {
          webp: './static/webp/new_index/generators/pere2.webp',
          fallback: './static/img/new_index/generators/pere2.png'
        },
        {
          webp: './static/webp/new_index/generators/pere3.webp',
          fallback: './static/img/new_index/generators/pere3.png'
        },
        {
          webp: './static/webp/new_index/generators/pere4.webp',
          fallback: './static/img/new_index/generators/pere4.png'
        },
        {
          webp: './static/webp/new_index/generators/pere5.webp',
          fallback: './static/img/new_index/generators/pere5.png'
        },
        {
          webp: './static/webp/new_index/generators/pere6.webp',
          fallback: './static/img/new_index/generators/pere6.png'
        },
        {
          webp: './static/webp/new_index/generators/pere7.webp',
          fallback: './static/img/new_index/generators/pere7.png'
        },
        {
          webp: './static/webp/new_index/generators/pere8.webp',
          fallback: './static/img/new_index/generators/pere8.png'
        },
        {
          webp: './static/webp/new_index/generators/pere9.webp',
          fallback: './static/img/new_index/generators/pere9.png'
        }
      ]
    },
    'okna': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА, КРЫМ',
      description: 'ООО «УКС ГРУП» выполнило работы по проектированию, производству и монтажу огнестойких витражей и дверей. Выполнены технически сложные работы по монтажу витража высотой более 9 метров со внутренними и наружными углами поворотов. В составе конструкций используются противопожарный профиль Alutech серии F50 и W62 с пределами огнестойкости EIW15 и EIW60.',
      images: [
        {
          webp: './static/webp/new_index/generators/okno1.webp',
          fallback: './static/img/new_index/generators/okno1.png'
        },
        {
          webp: './static/webp/new_index/generators/okno2.webp',
          fallback: './static/img/new_index/generators/okno2.png'
        },
        {
          webp: './static/webp/new_index/generators/okno3.webp',
          fallback: './static/img/new_index/generators/okno3.png'
        },
        {
          webp: './static/webp/new_index/generators/okno4.webp',
          fallback: './static/img/new_index/generators/okno4.png'
        },
        {
          webp: './static/webp/new_index/generators/okno5.webp',
          fallback: './static/img/new_index/generators/okno5.png'
        },
        {
          webp: './static/webp/new_index/generators/okno6.webp',
          fallback: './static/img/new_index/generators/okno6.png'
        }
      ]
    },
    'vitrazhi': {
      title: 'КЛУБНЫЙ ДОМ "РИВЬЕРА". ЕКАТЕРИНБУРГ',
      description: 'Комплекс работ по остеклению Клубного дома "Ривьера", с использованием фасадных систем премиального уровня SCHUCO и AGC выполнил завод ООО «УКС груп».',
      images: [
        {
          webp: './static/webp/new_index/generators/vetr1.webp',
          fallback: './static/img/new_index/generators/vetr1.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr2.webp',
          fallback: './static/img/new_index/generators/vetr2.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr3.webp',
          fallback: './static/img/new_index/generators/vetr3.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr4.webp',
          fallback: './static/img/new_index/generators/vetr4.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr5.webp',
          fallback: './static/img/new_index/generators/vetr5.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr6.webp',
          fallback: './static/img/new_index/generators/vetr6.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr7.webp',
          fallback: './static/img/new_index/generators/vetr7.png'
        }
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
    const imageData = sections[currentSection].images[currentImageIndex];
    const photoContainer = document.getElementById('photoContainer');

    checkWebPSupport(function (isSupported) {
      const imageUrl = isSupported ? imageData.webp : imageData.fallback;
      photoContainer.style.backgroundImage = `url('${imageUrl}')`;
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % sections[currentSection].images.length;
    updateImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + sections[currentSection].images.length) % sections[currentSection].images.length;
    updateImage();
  }

  document.getElementById('projectLeftBtn')?.addEventListener('click', prevImage);
  document.getElementById('projectRightBtn')?.addEventListener('click', nextImage);


  document.addEventListener('DOMContentLoaded', () => {
    changeSection('dveri', document.querySelector('.projects__button[data-section="dveri"]'));
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
  });

  // О нас
  const images = [
    {
      webp: './static/webp/new_index/generators/ab1.webp',
      png: './static/img/new_index/generators/ab1.png'
    },
    {
      webp: './static/webp/new_index/generators/ab2.webp',
      png: './static/img/new_index/generators/ab2.png'
    },
    {
      webp: './static/webp/new_index/generators/ab3.webp',
      png: './static/img/new_index/generators/ab3.png'
    },
    {
      webp: './static/webp/new_index/generators/ab4.webp',
      png: './static/img/new_index/generators/ab4.png'
    },
    {
      webp: './static/webp/new_index/generators/ab5.webp',
      png: './static/img/new_index/generators/ab5.png'
    },
    {
      webp: './static/webp/new_index/generators/ab6.webp',
      png: './static/img/new_index/generators/ab6.png'
    }
  ];

  let currentIndex = 0;
  const photoBlock = document.getElementById('photoBlock');
  const prevBtn1 = document.getElementById('prevBtn');
  const nextBtn1 = document.getElementById('nextBtn');

  function updatePhoto() {
    checkWebPSupport(function (isSupported) {
      const imageUrl = isSupported ? images[currentIndex].webp : images[currentIndex].png;
      photoBlock.style.backgroundImage = `url('${imageUrl}')`;
    });
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
      image: './static/img/new_index/generators/n1.jpg',
      text: `A balancing rock, also called balanced rock or precarious boulder, is a naturally occurring geological formation...`
    },
    {
      title: 'НОВОСТЬ ДВА',
      image: './static/img/new_index/generators/n2.jpg',
      text: ``
    },
    {
      title: 'НОВОСТЬ ТРИ',
      image: './static/img/new_index/generators/n3.jpg',
      text: ``
    },
    {
      title: 'НОВОСТЬ ЧЕТЫРЕ',
      image: './static/img/new_index/generators/n4.jpg',
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

  //Кнопки в выпада.щем списки для проектов
  document.querySelectorAll('a[data-project]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetSection = this.getAttribute('data-project');
      setTimeout(() => {
        if (targetSection && sections[targetSection]) {
          changeSection(targetSection, null);
        }
      }, 100);
    });
  });

  //Кнопка в форме
  //   const requestForm = document.getElementById('requestForm');
  //   if (requestForm) {
  //     requestForm.addEventListener('submit', function (e) {
  //       e.preventDefault();
  //       if (this.checkValidity()) {
  //         this.reset();
  //         showSuccessPopup();
  //       } else {
  //         const invalidFields = this.querySelectorAll(':invalid');
  //         invalidFields.forEach(field => {
  //           field.classList.add('invalid-field');
  //         });
  //       }
  //     });
  //   }

  // Обработчик для формы в попапе
  const popupRequestForm = document.getElementById('popupRequestForm');
  if (popupRequestForm) {
    popupRequestForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        this.reset();
        closePopup();
        showSuccessPopup();
      } else {
        const invalidFields = this.querySelectorAll(':invalid');
        invalidFields.forEach(field => {
          field.classList.add('invalid-field');
        });
      }
    });
  }


  // Функции для управления попапом
  function openPopup() {
    document.getElementById('requestPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
  }

  function closePopup() {
    document.getElementById('requestPopup').style.display = 'none';
    document.body.style.overflow = '';
  }

  // Закрытие попапа при клике вне его области
  document.getElementById('requestPopup').addEventListener('click', function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

  // Закрытие по ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });



  // Данные для попапов
  const projectData = {
    'dveri': {
      title: 'СТУДЕНЧЕСКИЙ КАМПУС УРФУ, ЕКАТЕРИНБУРГ',
      description: 'Ключевая идея проекта — формирование мощного научно-образовательного кластера в сфере IT, где российские и международные студенты смогут жить и учиться в комфортных условиях. Это способствует привлекательности учебного заведения и мотивации студентов для достижения высоких результатов. Многофункциональный общественный центр кампуса включает в себя лекционные аудитории, комплекс лабораторий, помещения для самостоятельной и проектной работы, а также холлы для отдыха. В составе противопожарных конструкций комплекса используются двери и перегородки из профильной системы Alutech и стекла Pyrolut. Предел огнестойкости конструкций EIW45 (период сдерживания продуктов горения до 45 минут). Огнестойкие светопрозрачные конструкции оснащены ручками штангами из нержавеющей стали СДР-13 1200 мм, Dorma TS Match с координатором последовательного закрывания G-GSRN, автоматическими выпадающими порогами Sipam (Италия) и врезными электромагнитными замками AL-400SM. Комплекс работ по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУПП» Применяемые в работе материалы, комплектующие и фурнитура отвечают всем требованиям с точки зрения надежности, эстетики и пожарной безопасности.'
    },
    'peregorodki': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА (ДВВС) ЕКАТЕРИНБУРГ',
      description: 'Дворец водных видов спорта (ДВВС) — это самый крупный современный комплекс в России для тренировок и соревнований, соответствущий всем требованиям международной федерации университетского спорта FISU и готовый принимать чемпионаты мира по водным видам спорта. Ключевой особенностью объекта является возможность предоставить профессиональным спортменам совершенствовать свое мастерство по плаванию, водному поло, синхронному плаванию, подводным дисциплинам и прыжкам в воду. В составе противопожарных конструкций комплекса используются перегородки и двери из стального профиля Schuco и стекла Pyrolut с пределами огнестойкости EIW45 и EIW30 соответственно. Работы по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». ДВВС — лауреат премии Sportsfacilities в номинации «Спортивный объект — открытие года».'
    },
    'okna': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА, КРЫМ',
      description: 'Современные оконные решения включают энергосберегающие стеклопакеты, шумозащитные конструкции и интеллектуальные системы управления. Наши окна сочетают в себе высокую функциональность и эстетичный дизайн.'
    },
    'vitrazhi': {
      title: 'Витражи',
      description: 'Наши витражи - это сочетание традиционных технологий и современных материалов. Мы создаем уникальные светопрозрачные конструкции для интерьеров любого стиля.'
    }
  };

  // Текущий выбранный раздел
  let currentsSection = 'dveri';

  document.querySelectorAll('.projects__button').forEach(button => {
    button.addEventListener('click', function () {
      currentsSection = this.dataset.section;
    });
  });

  document.getElementById('projectsSelect').addEventListener('change', function () {
    currentsSection = this.value;
  });

  // Обработчик для кнопки "Узнать больше"
  document.getElementById('learnMoreBtn').addEventListener('click', function () {
    const data = projectData[currentsSection];
    openProjectPopup(data.title, data.description);
  });

  // Функции управления попапом
  function openProjectPopup(title, description) {
    document.getElementById('projectPopupTitle').textContent = title;
    document.getElementById('projectPopupDescription').textContent = description;
    document.getElementById('projectPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeProjectPopup() {
    document.getElementById('projectPopup').style.display = 'none';
    document.body.style.overflow = '';
  }

  document.getElementById('projectPopup').addEventListener('click', function (e) {
    if (e.target === this) {
      closeProjectPopup();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeProjectPopup();
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('.projects__nav-btn--left')) prevImage();
    if (e.target.closest('.projects__nav-btn--right')) nextImage();
    if (e.target.closest('.aboutus__arrow-btn--left')) showPrev();
    if (e.target.closest('.aboutus__arrow-btn--right')) showNext();
  });



  window.changeSection = function (section, clickedBtn) {
    console.log('Switching to section:', section); // Логируем
    currentSection = section;
    currentImageIndex = 0;

    const buttons = document.querySelectorAll('.projects__button');
    buttons.forEach(btn => btn.classList.remove('projects__button--active'));

    if (clickedBtn) {
      clickedBtn.classList.add('projects__button--active');
    }

    document.getElementById('textTitle').textContent = sections[section].title;
    document.getElementById('textDescription').textContent = sections[section].description;
    updateImage();
  };

  document.querySelectorAll('.projects__button').forEach(button => {
    button.addEventListener('click', (e) => {
      const section = e.currentTarget.getAttribute('data-section');
      changeSection(section, e.currentTarget);
    });
  });

  // Обработчик для мобильного селекта
  document.getElementById('projectsSelect')?.addEventListener('change', (e) => {
    changeSection(e.target.value, null);
  });

  /* Благодарности */
  function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  document.getElementById('successPopupCloseBtn').addEventListener('click', () => {
    document.getElementById('successPopup').style.display = 'none';
    document.body.style.overflow = '';
  });

  //функции глобальные, вроде все
  window.openPopup = openPopup;
  window.closePopup = closePopup;
  window.openProjectPopup = openProjectPopup;
  window.closeProjectPopup = closeProjectPopup;
  window.closeNewsModal = closeNewsModal;
  window.changeSection = changeSection;
  window.showSuccessPopup = showSuccessPopup;

}

document.addEventListener('DOMContentLoaded', initUKSWebsite);
initUKSWebsite();
