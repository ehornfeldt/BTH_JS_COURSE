/**
 * A function that set innerText a greeting depending on time.
 */
function getGreetings () {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  console.log('HOURS', hours)

  let greetings = 'God natt'

  if (hours >= 6 && hours < 8) {
    greetings = 'God morgon'
  } else if (hours >= 8 && hours < 12) {
    greetings = 'God förmiddag'
  } else if (hours === 12 && minutes === 0) {
    greetings = 'Solen står som högst!'
  } else if (hours >= 12 && hours < 18) {
    greetings = 'God eftermiddag'
  } else if (hours >= 18 && hours < 22) {
    greetings = 'God kväll'
  }
  document.getElementById('greetings').innerText = greetings
}

getGreetings()
