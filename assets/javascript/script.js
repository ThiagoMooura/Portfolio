function navbar(){
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.line1').classList.toggle('active')
    document.querySelector('.line2').classList.toggle('active')
    document.querySelector('.line3').classList.toggle('active')
}

//AUTO-SCROLL
// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(2, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 1000;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//============================================
function opacity(){
  if(window.scrollY < 75){
    document.querySelector('header').style.backgroundColor='transparent';
    document.querySelector('.wrapper').style.backgroundColor='transparent';
    document.querySelector('.hamburger').style.opacity='0';
    document.querySelector('.hamburger').style.transition='0s'
    document.querySelector('.menu').style.display='none';
  }if(window.scrollY > 75){
    document.querySelector('header').style.backgroundColor='#16160e';
    document.querySelector('.wrapper').style.backgroundColor='#16160e';
    document.querySelector('.hamburger').style.opacity='1';
    document.querySelector('.menu').style.display='flex';
  }if(window.scrollY < 400){
    document.querySelector('.whatsapp').style.opacity='0';
    document.querySelector('.github-btn').style.opacity='0';
  }if(window.scrollY > 400){
    document.querySelector('.whatsapp').style.opacity='1';
    document.querySelector('.github-btn').style.opacity='1';
  }
  if( window.scrollY > 75){
    document.querySelector('.wrapper').style.justifyContent="space-between"
  }if( window.scrollY < 75){
    document.querySelector('.wrapper').style.justifyContent="center";
    document.querySelector('.menu').classList.remove('active')
    document.querySelector('.line1').classList.remove('active')
    document.querySelector('.line2').classList.remove('active')
    document.querySelector('.line3').classList.remove('active')
  }
}
window.addEventListener('scroll', opacity);

function scrollTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelector('.logo').addEventListener('click',scrollTop)

function dlt1(){
  document.querySelector('.click1').classList.add('dlt');
}
function dlt2(){
  document.querySelector('.click2').classList.add('dlt');
}
function dlt3(){
  document.querySelector('.click3').classList.add('dlt');
}
function dlt4(){
  document.querySelector('.click4').classList.add('dlt');
}
function dlt5(){
  document.querySelector('.click5').classList.add('dlt');
}
function dlt6(){
  document.querySelector('.click6').classList.add('dlt');
}
function dlt7(){
  document.querySelector('.click7').classList.add('dlt');
}


function screeen(){
  if(window.innerWidth < 770){
    document.querySelector(".click2").innerHTML="Clique aqui"
    document.querySelector(".click3").innerHTML="Clique aqui"
    document.querySelector(".click4").innerHTML="Clique aqui"
    document.querySelector(".click5").innerHTML="Clique aqui"
    document.querySelector(".click6").innerHTML="Clique aqui"
    document.querySelector(".click7").innerHTML="Clique aqui"
  }else{
    document.querySelector(".click2").innerHTML="Passe o mouse"
    document.querySelector(".click3").innerHTML="Passe o mouse"
    document.querySelector(".click4").innerHTML="Passe o mouse"
    document.querySelector(".click5").innerHTML="Passe o mouse"
    document.querySelector(".click6").innerHTML="Passe o mouse"
    document.querySelector(".click7").innerHTML="Passe o mouse"
  }
}


// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 0,
//   loop: true,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction:false
//   },
//   breakpoints: {
//       1000: {
//           slidesPerView: 6
//       },
//       800: {
//           slidesPerView: 6
//       },
//       600: {
//           slidesPerView: 4
//       },
//       200: {
//         slidesPerView: 4
//       },
//   },
//   speed: 400,
//   allowTouchMove: false,
// });

// var swiper = new Swiper(".swiper", {
//   spaceBetween: 0,
//   loop: true,
//   autoplay: {
//     delay: 100, // Aumentei o valor para 3 segundos
//     disableOnInteraction: false
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 6
//     },
//     768: {
//       slidesPerView: 4
//     },
//     640: {
//       slidesPerView: 3
//     },
//     320: {
//       slidesPerView: 2
//     }
//   },
//   speed: 400,
//   allowTouchMove: false,
//   rewind: true
// });

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 0, // Delay in milliseconds
    disableOnInteraction: false
  },
  breakpoints: {
        768: {
          slidesPerView: 5
        },
        640: {
          slidesPerView: 3
        },
        320: {
          slidesPerView: 2
        }
      },
        speed: 1000,
  rewind: true // Enable rewind functionality
});
