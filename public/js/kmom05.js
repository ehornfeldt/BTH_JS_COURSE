import { countries } from './modules/kmom05/info.js'
import { fetchData, swedenJson, norwayJson, denmarkJson } from './modules/kmom05/fetch.js'
import { saveHighscore, clearPoints } from './modules/kmom05/storage.js'

/**
 * Adding years as options in dropdown.
 */
function chooseYear () {
  const optionElm = document.getElementById('chooseYear')
  const startYear = 1900
  const endYear = 2019
  for (let i = startYear; i <= endYear; i++) {
    optionElm.innerHTML += '<option value="' + i.toString() + '">' + i + '</option>'
  }
}

/**
 * Finds the data for a specified year.
 * @param {string} selectedYear The selected year.
 * @returns {Array} The data for the specified year.
 */
function findData (selectedYear) {
  const swedenResult = swedenJson.data.find(({ year }) => year === parseInt(selectedYear))
  const norwayResult = norwayJson.data.find(({ year }) => year === parseInt(selectedYear))
  const denmarkResult = denmarkJson.data.find(({ year }) => year === parseInt(selectedYear))

  return [swedenResult, norwayResult, denmarkResult]
}

/**
 * Checks if new value is lower than older values.
 * @param {number} newValue The new value.
 * @param {number} lowestValue The saved, lowest number.
 * @returns {boolean} True if new value is lower than older value, otherwise returns false.
 */
function compareData (newValue, lowestValue) {
  if (newValue < lowestValue) {
    return true
  }
  if (newValue && lowestValue === 'initial') {
    return true
  }
  return false
}

/**
 * Sets the background color to the cell with eth lowest value.
 * @param {Array} elmIndex The indexes that has the lowest value.
 */
function hihglightLowest (elmIndex) {
  const elmOne = document.getElementById('co2' + elmIndex[0])
  const elmTwo = document.getElementById('co2PerCap' + elmIndex[1])
  const elmThree = document.getElementById('co2PerGDP' + elmIndex[2])

  elmOne && (elmOne.style.backgroundColor = '#8db898')
  elmTwo && (elmTwo.style.backgroundColor = '#8db898')
  elmThree && (elmThree.style.backgroundColor = '#8db898')

  saveHighscore(elmIndex)
}

/**
 * Adding data from a specified year to a table.
 * @param {string} year The selected year.
 */
function addDataToTable (year) {
  const data = findData(year)
  const tableElm = document.getElementById('dataTable')
  tableElm.innerHTML = ''

  let lowestVal1 = 'initial'
  let lowestVal2 = 'initial'
  let lowestVal3 = 'initial'

  const saveIndex = ['No data', 'No data', 'No data']

  for (let i = 0; i < data.length; i++) {
    if (compareData(data[i].co2, lowestVal1)) {
      saveIndex[0] = i
      lowestVal1 = data[i].co2
    }
    if (compareData(data[i].co2_per_capita, lowestVal2)) {
      saveIndex[1] = i
      lowestVal2 = data[i].co2_per_capita
    }
    if (compareData(data[i].co2_per_gdp, lowestVal3)) {
      saveIndex[2] = i
      lowestVal3 = data[i].co2_per_gdp
    }

    tableElm.innerHTML += `
    <tr>
        <td>${countries[i]}</td>
        <td class="number">${data[i].year}</td>
        <td id="co2${i}" class="number">${data[i].co2 ?? 'No data'}</td>
        <td id="co2PerCap${i}" class="number">${data[i].co2_per_capita ?? 'No data'}</td>
        <td class="number">${data[i].gdp ?? 'No data'}</td>
        <td id="co2PerGDP${i}" class="number">${data[i].co2_per_gdp ?? 'No data'}</td>
        <td class="number">${data[i].population ?? 'No data'}</td>
    </tr>`
  }

  hihglightLowest(saveIndex)
}

fetchData()
chooseYear()

const selectElm = document.getElementById('chooseYear')
selectElm.addEventListener('change', () => {
  const value = selectElm.value
  addDataToTable(value)
})

const button = document.querySelector('.clearPoints')
button.addEventListener('click', clearPoints)

export { addDataToTable }
