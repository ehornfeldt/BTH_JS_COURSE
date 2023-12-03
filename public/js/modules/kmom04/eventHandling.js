import { moveObject, getBoxSize, randomPlace } from './sizeAndPositions.js'
/**
 * A function that catch event resizing window and sets the object to center.
 * @param {object} objData The properties of the object.
 * @param {object} myObject The object.
 */
function windowResize (objData, myObject) {
  window.addEventListener('resize', function () {
    moveObject(objData, myObject)
  }, false)
}

/**
 * A function that handle click and dblclick event.
 * @param {object} myObject The object.
 */
function clickingObject (myObject) {
  const classes = myObject.classList

  myObject.addEventListener('dblclick', (event) => {
    myObject.classList.add('animateSize')
    myObject.style.height = '2px'
    myObject.style.width = '2px'

    setTimeout(() => {
      myObject.remove()
    }, '2000')
  })

  myObject.addEventListener('click', () => {
    classes.toggle('selected')
  })
}

/**
 * Changes the size of an element.
 * @param {object} myObject The object.
 * @param {string} operator Plus or minus.
 * @param {Array} sizes Height and width.
 */
function changeSize (myObject, operator, sizes) {
  let myWidth = sizes[0]
  let myHeight = sizes[1]

  if (operator === 'minus') {
    myWidth = myWidth - 10
    myHeight = myHeight - 10
  } else {
    myWidth = myWidth + 10
    myHeight = myHeight + 10
  }
  myObject.style.width = myWidth + 'px'
  myObject.style.height = myHeight + 'px'
}

/**
 * Changes the backgroundcolor of an element.
 * @param {string} color The old color.
 * @returns {string} The new color.
 */
function changeColor (color) {
  switch (color) {
    case 'rgb(255, 0, 0)':
      return ['rgb(255, 165, 0)', 'rgb(255, 165, 0.4)'] // orange
    case 'rgb(255, 165, 0)':
      return ['rgb(255, 255, 0)', 'rgb(255, 255, 0, 0.4)'] // yellow
    case 'rgb(255, 255, 0)':
      return ['rgb(0, 128, 0)', 'rgb(0, 128, 0, 0.4)'] // green
    case 'rgb(0, 128, 0)':
      return ['rgb(0, 0, 255)', 'rgb(0, 0, 255, 0.4)'] // blue
    case 'rgb(0, 0, 255)':
      return ['rgb(75, 0, 130)', 'rgb(75, 0, 130, 0.4)'] // indigo
    case 'rgb(75, 0, 130)':
      return ['rgb(238, 130, 238)', 'rgb(238, 130, 238, 0.4)'] // violet
    default:
      return ['rgb(255, 0, 0)', 'rgb(255, 0, 0, 0.4)'] // red
  }
}

/**
 * Handle key events.
 */
function handleKeyEvent () {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'e') {
      const elements = document.getElementsByClassName('selected')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('circle')
      }
    } else if (e.key === 'q') {
      const elements = document.getElementsByClassName('selected')
      for (let i = 0; i < elements.length; i++) {
        const elmData = window.getComputedStyle(elements[i])
        const sizes = getBoxSize(elmData)
        changeSize(elements[i], 'plus', sizes)
        moveObject(elmData, elements[0])
      }
    } else if (e.key === 'w') {
      const elements = document.getElementsByClassName('selected')
      for (let i = 0; i < elements.length; i++) {
        const elmData = window.getComputedStyle(elements[i])
        const sizes = getBoxSize(elmData)
        changeSize(elements[i], 'minus', sizes)
        moveObject(elmData, elements[0])
      }
    } else if (e.key === 'r') {
      const elements = document.getElementsByClassName('selected')
      for (let i = 0; i < elements.length; i++) {
        const elmtData = window.getComputedStyle(elements[i])
        const color = changeColor(elmtData.getPropertyValue('background-color'))
        elements[i].style.backgroundColor = color[0]
        elements[i].style.outlineColor = color[1]
      }
    } else if (e.key === 't') {
      const elements = document.querySelectorAll('div.selected')

      for (let i = 0; i < elements.length; i++) {
        const clone = elements[i].cloneNode()
        document.body.appendChild(clone)

        const elmData = window.getComputedStyle(elements[i])
        const positions = randomPlace(elmData)

        clone.style.left = positions[0] + 'px'
        clone.style.top = positions[1] + 'px'
        clickingObject(clone)
      }
    } else if (e.key === 'y') {
      const elements = document.querySelectorAll('div.selected')
      for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i])
      }
    } else if (e.key === 'u') {
      const elements = document.querySelectorAll('#box1')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('selected')
      }
    } else if (e.key === 'i') {
      const elements = document.querySelectorAll('#box1')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('selected')
      }
    } else if (e.key === 'p') {
      const element = document.querySelector('#box1')
      const clone = element.cloneNode()
      const colors = ['rgb(255, 0, 0)', 'rgb(255, 165, 0)', 'rgb(255, 255, 0)', 'rgb(0, 128, 0)',
        'rgb(0, 0, 255)', 'rgb(75, 0, 130)']

      const elmData = window.getComputedStyle(element)
      const positions = randomPlace(elmData)
      clone.style.left = positions[0] + 'px'
      clone.style.top = positions[1] + 'px'

      const colorIndex = Math.floor(Math.random() * (5 - 0) + 0)

      const color = changeColor(colors[colorIndex])
      clone.style.backgroundColor = color[0]
      clone.style.outlineColor = color[1]

      const formClasses = ['none', 'circle']
      const formIndex = Math.round(Math.random())
      clone.classList.add(formClasses[formIndex])
      document.body.appendChild(clone)
      clickingObject(clone)
    } else if (e.key === 'ArrowUp') {
      const elements = document.querySelectorAll('div.selected')
      for (let i = 0; i < elements.length; i++) {
        const newTop = parseInt(elements[i].style.top) - 5
        elements[i].style.top = newTop + 'px'
      }
    } else if (e.key === 'ArrowDown') {
      const elements = document.querySelectorAll('div.selected')
      for (let i = 0; i < elements.length; i++) {
        const newTop = parseInt(elements[i].style.top) + 5
        elements[i].style.top = newTop + 'px'
      }
    } else if (e.key === 'ArrowLeft') {
      const elements = document.querySelectorAll('div.selected')
      for (let i = 0; i < elements.length; i++) {
        const newLeft = parseInt(elements[i].style.left) - 5
        elements[i].style.left = newLeft + 'px'
      }
    } else if (e.key === 'ArrowRight') {
      const elements = document.querySelectorAll('div.selected')
      for (let i = 0; i < elements.length; i++) {
        const newLeft = parseInt(elements[i].style.left) + 5
        elements[i].style.left = newLeft + 'px'
      }
    } else if (e.key === 'Enter') {
      const elements = document.querySelectorAll('div.selected')
      console.log('Selected elements bumps!')
      for (let i = 0; i < elements.length; i++) {
        const oldTop = parseInt(elements[i].style.top)
        const newTop = parseInt(elements[i].style.top) - 50
        elements[i].style.top = newTop + 'px'
        elements[i].classList.add('bump')
        const temp = elements[i]
        setTimeout(() => {
          temp.style.top = oldTop + 'px'
        }, '500')
      }
    }
  })
}

export { windowResize, clickingObject, handleKeyEvent }
