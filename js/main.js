var modalMandale = document.querySelectorAll('#modal-img-mandale');

    for (var i = 0, j = modalMandale.length; i < j; i++) {

        modalMandale[i].addEventListener('click', function(){

            document.getElementById('my-modal-mandale').style.display = 'block';
            document.getElementById('img-mandale').src = this.src;
        })
    };

    document.getElementsByClassName('close-mandale')[0].addEventListener('click', function() { 
        document.getElementById('my-modal-mandale').style.display = 'none';
    });

    var modalSzkice = document.querySelectorAll('#modal-img-szkice');

    for (var i = 0, j = modalSzkice.length; i < j; i++) {

        modalSzkice[i].addEventListener('click', function(){

            document.getElementById('my-modal-szkice').style.display = 'block';
            document.getElementById('img-szkice').src = this.src;
        })
    };

document.getElementsByClassName('close-szkice')[0].addEventListener('click', function() { 
    document.getElementById('my-modal-szkice').style.display = 'none';
});

document.getElementsByClassName('switch-main')[0].addEventListener('click', function(element) {

    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.remove('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-szkice-opacity');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
    document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
    document.getElementsByClassName('main-section')[0].style.opacity = '0';
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('main-section')[0].style.opacity = '1';
    }
});

var switchAkrylowe = document.querySelectorAll('.switch-akrylowe');

    for (var i = 0, j = switchAkrylowe.length; i < j; i++) {

        switchAkrylowe[i].addEventListener('click', function(element) {

            element.preventDefault();
            document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
            document.getElementsByClassName('main-section')[0].classList.remove('switch-main-opacity');
            document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-on');
            document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
            document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
            setTimeout(timer, 1);
            function timer() {
                document.getElementsByClassName('akrylowe')[0].classList.add('switch-akrylowe-opacity');
            }
        })
    };

    document.getElementsByClassName('switch-mandale')[0].addEventListener('click', function(element) {
    
        element.preventDefault();
        document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
        document.getElementsByClassName('mandale')[0].classList.add('switch-gallery-on');
        document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
        document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
        setTimeout(timer, 1);
        function timer() {
            document.getElementsByClassName('mandale')[0].classList.add('switch-gallery-opacity');
        }
    });

    var switchOlejne = document.querySelectorAll('.switch-olejne');

    for (var i = 0, j = switchOlejne.length; i < j; i++) {

        switchOlejne[i].addEventListener('click', function(element) {

        element.preventDefault();
        document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
        document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
        document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-on');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
        document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
        document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
        setTimeout(timer, 1);
        function timer() {
            document.getElementsByClassName('olejne')[0].classList.add('switch-olejne-opacity');
        }
    })
};  

    var switchSzkice = document.querySelectorAll('.switch-szkice');

    for (var i = 0, j = switchSzkice.length; i < j; i++) {

        switchSzkice[i].addEventListener('click', function(element) {

            element.preventDefault();
            document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
            document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
            document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
            document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-on');
            document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-opacity');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
            document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
            document.getElementsByClassName('szkice')[0].classList.add('switch-gallery-on');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-on');
            document.getElementsByClassName('contact')[0].classList.remove('switch-contact-opacity');
            setTimeout(timer, 1);
            function timer() {
                document.getElementsByClassName('szkice')[0].classList.add('switch-gallery-opacity');
            }
        })
    };

document.getElementsByClassName('switch-contact')[0].addEventListener('click', function(element) {

    element.preventDefault();
    document.getElementsByClassName('main-section')[0].classList.add('switch-main-off');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-on');
    document.getElementsByClassName('akrylowe')[0].classList.remove('switch-akrylowe-opacity');
    document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('mandale')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-on');
    document.getElementsByClassName('olejne')[0].classList.remove('switch-olejne-opacity');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-on');
    document.getElementsByClassName('szkice')[0].classList.remove('switch-gallery-opacity');
    document.getElementsByClassName('contact')[0].classList.add('switch-contact-on');
    setTimeout(timer, 1);
    function timer() {
        document.getElementsByClassName('contact')[0].classList.add('switch-contact-opacity');
    }
})