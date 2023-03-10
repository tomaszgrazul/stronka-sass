document.getElementById('my-img').addEventListener('click', function(){
    document.getElementById('my-modal').style.display = 'block';
    document.getElementById('img-1').src = this.src;
});

document.getElementsByClassName('close')[0].addEventListener('click', function() { 
    document.getElementById('my-modal').style.display = 'none';
});

document.getElementsByClassName('switch-main')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.remove('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    document.getElementsByClassName('main-section')[0].style.opacity = '0';
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('main-section')[0].style.opacity = '1';
    }
});

document.getElementsByClassName('switch-akrylowe')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('main-section')[0].classList.remove('switch-main-opacity');
    document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-opacity');
    }
});

document.getElementsByClassName('switch-akrylowe-1')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-opacity');
    }
});

document.getElementsByClassName('switch-olejne')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-opacity');
    }
});

document.getElementsByClassName('switch-olejne-1')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-opacity-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-opacity');
    }
});

document.getElementsByClassName('switch-szkice')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-opacity');
    }
});

document.getElementsByClassName('switch-szkice-1')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-opacity');
    }
});

document.getElementsByClassName('switch-contact')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.add('switch-contact-on');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('contact')[0].classList.add('switch-contact-opacity');
    }
})