import { colors, persons, years } from './modules/kmom03/info.js'

/**
 * A function that creates a form with a color from module.
 */
function createForm () {
  const shapes = document.getElementsByClassName('shapes')[0]
  const shape = document.createElement('div')
  shape.className = 'shape'
  shape.style.backgroundColor = colors[indexParam]

  shape.style.cursor = 'pointer'
  shape.setId = indexParam

  button.innerText = 'Look at a ' + colors[indexParam + 1] + ' circle!'

  shape.addEventListener('click', function (event) {
    if (event.target.hasChildNodes()) {
      const imageId = 'image-' + event.target.setId
      const personId = 'person-' + event.target.setId
      const yearId = 'year-' + event.target.setId
      const imageElement = document.getElementById(imageId)
      const personElement = document.getElementById(personId)
      const yearEelement = document.getElementById(yearId)
      imageElement.remove()
      personElement.remove()
      yearEelement.remove()
    } else {
      const image = document.createElement('img')
      image.src = 'img/logo.png'
      image.id = 'image-' + event.target.setId
      console.log('image:', image)

      const person = document.createElement('p')
      person.id = 'person-' + event.target.setId
      person.innerText = persons[event.target.setId]

      const year = document.createElement('p')
      year.id = 'year-' + event.target.setId
      year.innerText = years[event.target.setId]

      event.target.appendChild(image)
      event.target.appendChild(person)
      event.target.appendChild(year)
    }
  })

  shapes.appendChild(shape)

  if (indexParam === (colors.length - 1)) {
    button.style.visibility = 'hidden'
    const myText = document.getElementsByClassName('hiddenButton')[0]
    myText.innerText = 'DONE!'
  }
  indexParam++
}

let indexParam = 0
const button = document.querySelector('.createButton')
console.log(button)
button.addEventListener('click', createForm)
