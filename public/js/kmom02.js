import { africanAnimals, americanAnimals, europeanAnimals } from './modules/kmom02/animals.js'

/**
 * A function that return alla animals for a specific country.
 * @param {string} country The country to use.
 * @returns {Array} All animals for that country.
 */
function getFrom (country) {
  if (country === 'africa') {
    return africanAnimals
  } else if (country === 'america') {
    return americanAnimals
  } else if (country === 'europe') {
    return europeanAnimals
  }
  return []
}

/**
 * A function that returns a random animal from a country.
 * @param {string} country The country to use.
 */
function randomAnimal (country) {
  const animals = getFrom(country)
  const randomIndex = Math.floor(Math.random() * animals.length)
  const animal = animals[randomIndex]
  document.getElementById(country).innerText = animal
}

randomAnimal('africa')
randomAnimal('america')
randomAnimal('europe')
