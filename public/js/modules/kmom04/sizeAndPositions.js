/**
 * A function that print the width and height of the window in the console log.
 * @returns {Array} Width and height of window.
 */
function getWindowSize () {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  console.log('Width of window: ', windowWidth)
  console.log('Height of window: ', windowHeight)
  return [windowWidth, windowHeight]
}

/**
 * A function that get the width and height of the box.
 * @param {object} boxData The properties of the box.
 * @returns {Array} Width and height of the box.
 */
function getBoxSize (boxData) {
  const boxWidth = parseInt(boxData.getPropertyValue('width'))
  const boxHeight = parseInt(boxData.getPropertyValue('height'))
  console.log('Width of box: ', boxWidth)
  console.log('Height of box: ', boxHeight)
  return [boxWidth, boxHeight]
}

/**
 * A function that get the left and top position of the box.
 * @param {object} boxData The properties of the box.
 */
function getBoxPosition (boxData) {
  const boxTop = parseInt(boxData.getPropertyValue('top'))
  const boxLeft = parseInt(boxData.getPropertyValue('left'))
  console.log('Top of box: ', boxTop)
  console.log('Left of box: ', boxLeft)
}

/**
 * Sets the object to center of the window.
 * @param {object} boxData The properties of the box.
 * @param {object} box The box element.
 */
function moveObject (boxData, box) {
  const windowWidth = getWindowSize()[0] // ska det verklien vara boxdata i här...???
  const windowHeight = getWindowSize()[1]
  const boxWidth = getBoxSize(boxData)[0]
  const boxHeight = getBoxSize(boxData)[1]

  const centerTop = windowHeight / 2 - boxHeight / 2
  const centerLeft = windowWidth / 2 - boxWidth / 2

  box.style.position = 'absolute'
  box.style.top = centerTop + 'px'
  box.style.left = centerLeft + 'px'
}

/**
 * Finds a random position.
 * @param {object} objData The properties of the object.
 * @returns {Array} Positions The top and left position.
 */
function randomPlace (objData) {
  const objSizes = getBoxSize(objData)
  const windowWidth = getWindowSize()[0] - objSizes[0]
  const windowHeight = getWindowSize()[1] - objSizes[1]

  const widthValue = Math.floor(Math.random() * (windowWidth - 0) + 0)
  const topValue = Math.floor(Math.random() * (windowHeight - 0) + 0)

  return [widthValue, topValue]
}

export { getWindowSize, getBoxSize, getBoxPosition, moveObject, randomPlace }
