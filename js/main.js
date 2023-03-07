document.getElementsByClassName('switch-main')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.remove('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-akrylowe')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-akrylowe-1')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-olejne')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-olejne-1')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-szkice')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-szkice-1')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.add('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
});

document.getElementsByClassName('switch-contact')[0].addEventListener('click', function(element) {
    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-on');
    document.getElementsByClassName('contact')[0].classList.add('switch-contact-on');
})