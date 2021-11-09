import './styles/style.css'
import image from './assets/26a20a99d83cf280fe907a14674c1ad6.png'

const testImage = document.querySelector('.container')
let imageTest = document.createElement('img')
imageTest.src = image
testImage.appendChild(imageTest)

let h1 = document.createElement('h1')
h1.innerText = 'test server'

document.body.appendChild(h1)