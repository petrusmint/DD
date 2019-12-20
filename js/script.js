
const nav = document.querySelector('nav')
const head = document.querySelector('header')
// const options = { root: null, threshold: 0.80 }
const options = { rootMargin: "-600px 0px 0px 0px" }
const headObserver = new IntersectionObserver(function (entries, headObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    })
}, options)
headObserver.observe(head)

var d = new Date()
var n = d.getFullYear()
document.querySelector('.year').innerHTML = n