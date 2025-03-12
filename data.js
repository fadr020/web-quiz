function button() {
    window.location.href = "home.html"
}

function mode() {
    alert ('JANGAN DI PENCET DONGO NANTI BURUNG NYA TERBANG')
}

function mode2() {
    alert ('DAH DIBILANG JANGAN DI PENCET IDIOT')
}

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }    
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

    let jawaban = document.getElementById('jawaban');
    let link = document.getElementById('link');
    let cluee = document.getElementById('cluee');
    let buttonClue = document.getElementById('buttonClue');

    link.style.display = "none";
    cluee.style.display = "none";

function enter(){
    if(jawaban.value == 'Fadil' || jawaban.value == 'fadil'){
        alert('nah pinter')
        link.style.display = "block";
        return;
    }

    if(jawaban.value == 'Hizkia' || jawaban.value == 'kia'){
        alert('kok kia goblok');
        return;
    }  

    if(jawaban.value == 'Freem' || jawaban.value == 'freem'){
        alert('jelek ini cok');
        return;
    } 

    if(jawaban.value == 'Adit' || jawaban.value == 'adit'){
        alert('ini tukang judi');
        return;
    } 

    if(jawaban.value == 'Galung' || jawaban.value == 'galung'){
        alert('coba liat lagi fotonya mana yang ganteng');
        return;
    } 

    if(jawaban.value == 'jamek' || jawaban.value == 'Dzaky'  || jawaban.value == 'jaki'){
        alert('apalagi si lobang ini gamungkin benar');
        return;
    } 

    else{
        alert('salah goblok');
    }
}

function clue() {
    cluee.style.display = "block";
}

window.addEventListener("orientationchange", function() {
    let warning = document.querySelector(".rotate-warning");
    if (window.matchMedia("(orientation: portrait)").matches) {
        warning.style.opacity = "1";
    } else {
        warning.style.opacity = "0";
        setTimeout(() => warning.style.display = "none", 500); // Hilang setelah animasi
    }
});
