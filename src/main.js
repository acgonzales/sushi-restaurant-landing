import "./style.css";
import Alpine from "alpinejs";

Alpine.data('navbar', () => ({
  isOpen: false,
  openMobileMenu() {
    this.isOpen = !this.isOpen;
  }
}));

Alpine.start();

// const mobileMenuButton = document.getElementById('mobile-menu-trigger');
// const mobileMenu = document.getElementById('mobile-menu');

// mobileMenuButton.addEventListener('click', (e) => {
//   e.stopPropagation();
//   mobileMenu.classList.toggle('-translate-x-0');
//   mobileMenu.classList.toggle('-translate-x-full');
// });

// document.addEventListener('click', (e) => {
//   if (!mobileMenu.contains(e.target) && mobileMenu.classList.contains('-translate-x-0')) {
//     mobileMenu.classList.remove('-translate-x-0');
//     mobileMenu.classList.add('-translate-x-full');
//   }
// });

// mobileMenu.addEventListener('click', (e) => {
//   e.stopPropagation();
// });