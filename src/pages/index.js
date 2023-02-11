import Card from '../components/Card';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './index.css';
import { defaultProducts } from '../utils/defaultProducts';

const productsContainer = document.querySelector('.swiper-wrapper');

const getNewProduct = (data) => {
  const newProduct = new Card(data, '.product-template')
  const d = document.createElement("div")
  d.classList.add("swiper-slide")
  d.append(newProduct.generateCard())
  return d
}

function renderProducts(data) {
  data.forEach(element => {
    productsContainer.prepend(getNewProduct(element))
  });
}

renderProducts(defaultProducts)

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  allowTouchMove: true,
  rewind: true,
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    }
  }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    dotsClass: 'owl__dots-container',
    responsive: {
      1000: {
        items:1,
        mouseDrag: true,
        touchDrag: true,
      },
      0: {
        items:1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      }
    }
  });
});






