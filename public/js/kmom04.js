import { getWindowSize, getBoxSize, getBoxPosition, moveObject } from './modules/kmom04/sizeAndPositions.js'
import { windowResize, clickingObject, handleKeyEvent } from './modules/kmom04/eventHandling.js'

const box = document.getElementById('box1')
const boxData = window.getComputedStyle(box)

const windowSize = getWindowSize()
const boxSize = getBoxSize(boxData)
getBoxPosition(boxData)
moveObject(boxData, box)
windowResize(boxData, box)
clickingObject(box)
handleKeyEvent()

console.log('Windowsize: ', windowSize, 'Boxsize: ', boxSize)
