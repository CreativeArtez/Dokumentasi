 //untuk anu
 import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
 import '@fancyapps/ui/dist/fancybox/fancybox.css';
 
 import './dokum.css';
 
 Fancybox.bind('[data-fancybox="gallery"]', {
   compact: false,
   idle: false,
 
   animated: false,
   showClass: false,
   hideClass: false,
 
   dragToClose: false,
 
   Images: {
     // Disable animation from/to thumbnail on start/close
     zoom: false,
   },
 
   Toolbar: {
     display: {
       left: [],
       middle: [],
       right: ['close'],
     },
   },
 
   Thumbs: {
     type: 'classic',
     Carousel: {
       center: function () {
         return this.contentDim > this.viewportDim;
       },
     },
   },
 
   Carousel: {
     // Remove the navigation arrows
     Navigation: false,
   },
 });


  
//untuk tanggal
function tampilkanTanggalWaktu() {
     const date = new Date();
     const options = {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
     };
 
     const formattedDate = date.toLocaleDateString('id-ID', options);
 
     document.getElementById('tanggal-waktu').textContent = formattedDate;
 }
 
 tampilkanTanggalWaktu();
 setInterval(tampilkanTanggalWaktu, 1000);

 
 //animation gsap pop up

