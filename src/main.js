import "./style.css";
import Alpine from "alpinejs";

Alpine.data('navbar', () => ({
  isOpen: false,
  init() {
    const self = this;
    const mobileMenu = this.$refs.mobileMenu;
    const mobileMenuTrigger = this.$refs.mobileMenuTrigger;

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuTrigger.contains(e.target) && self.isOpen) {
        self.isOpen = false;
      }
    });

    mobileMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  },
  openMobileMenu() {
    this.isOpen = !this.isOpen;
  }
}));

Alpine.data('reservationForm', () => ({
  firstName: '',
  lastName: '',
  date: '',
  notes: '',
  errors: {
    firstName: '',
    lastName: '',
    date: '',
    notes: '',
  },
  submitForm() {
    this.errors.firstName = '';
    this.errors.lastName = '';
    this.errors.date = '';
    this.errors.notes = '';

    let hasErrors = false;

    if (!this.firstName.trim()) {
      this.errors.firstName = 'First name is required';
      hasErrors = true;
    }

    if (!this.lastName.trim()) {
      this.errors.lastName = 'Last name is required';
      hasErrors = true;
    }

    if (!this.date.trim()) {
      this.errors.date = 'Date is required';
      hasErrors = true;
    }

    // if (!this.notes.trim()) {
    //   this.errors.notes = 'Notes are required';
    //   hasErrors = true;
    // }

    if (!hasErrors) {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        date: this.date,
        notes: this.notes
      };
      console.log('Form submitted successfully:', formData);
    }
  }
}));

Alpine.start();
