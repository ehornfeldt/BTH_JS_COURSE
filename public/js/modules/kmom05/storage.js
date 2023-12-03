import { countries } from './info.js'

/**
 * Shows current points i GUI.
 */
function setHighscore () {
  for (const country of countries) {
    const points = window.sessionStorage.getItem(country)
    const pointsElm = document.getElementById(country.toLowerCase())
    pointsElm.innerHTML = points.toString()
  }
}

/**
 * Initiate session store.
 */
function initiateStorage () {
  window.sessionStorage.setItem('Sweden', 0)
  window.sessionStorage.setItem('Norway', 0)
  window.sessionStorage.setItem('Denmark', 0)
}

/**
 * Changes the backgroundcolor of an element.
 * @param {Array} elmIndex Which country that has the best value in category.
 */
function saveHighscore (elmIndex) {
  if (!window.sessionStorage.getItem('Sweden')) {
    initiateStorage()
  }

  for (const index of elmIndex) {
    let count = window.sessionStorage.getItem(countries[index])
    count++
    window.sessionStorage.setItem(countries[index], count)
  }

  setHighscore()
}

/**
 * Resets the points.
 */
function clearPoints () {
  sessionStorage.clear()
  location.reload()
}

export { saveHighscore, clearPoints }
