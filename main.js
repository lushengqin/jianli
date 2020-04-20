setTimeout(function () {
    siteWelcome.classList.remove('active');
}, 100)

window.onscroll = function (xxx) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
}

let aTags = document.querySelectorAll('nav.menu  ul  li  a')
console.log(aTags)

