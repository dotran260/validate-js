const inputText = document.querySelector('input[type=text]');
const aElement = document.querySelectorAll('a')
const ulElement = document.querySelectorAll('ul')


for (var i = 0; i < ulElement.length; i++) {
    ulElement[i].onmousedown = function(e) {
        console.log(e.preventDefault())
    }
}


for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if (this.origin == 'https://www.facebook.com') {
            e.preventDefault()
        }
    }
}

// inputText.onkeydown = function(e) {
//     // console.log(e.which)
//     switch (e.which) {
//         case 27:
//             console.log('Exit')
//             break;
//         default:
//             console.log(e.key)

//     }
// }