import { addDataToTable } from '../../kmom05.js'

/**
 * Fetch data from "Our world in data".
 */
async function fetchData () {
  const swedenData = await fetch('https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/sweden.json')
  swedenJson = await swedenData.json()

  const norwayData = await fetch('https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/norway.json')
  norwayJson = await norwayData.json()

  const denmarkData = await fetch('https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/denmark.json')
  denmarkJson = await denmarkData.json()

  addDataToTable('1900')
}

let swedenJson = ''
let norwayJson = ''
let denmarkJson = ''

export { fetchData, swedenJson, norwayJson, denmarkJson }
