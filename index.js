// Get Data

console.log('Connected')

// const dulwichList = JSON.parse(src='data')
// const peckhamList = JSON.parse(document.getElementById('my_peckham_data').textContent)
// const tasksList = JSON.parse(document.getElementById('my_tasks_data').textContent)

// const dulwichList = JSON.parse(document.getElementById('my_dulwich_data').textContent)
// const peckhamList = JSON.parse(document.getElementById('my_peckham_data').textContent)
// const tasksList = JSON.parse(document.getElementById('my_tasks_data').textContent)

let peckhamList = []
let tasksList = []
let dulwichList = []

fetch('data/streets_peckham.json')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    return (peckhamList = data)
  })

fetch('data/tasks.json')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    return (tasksList = data)
  })

fetch('data/eastDulwichStreets.json')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    return (dulwichList = data)
  })

// Get Buttons

const dropDown = document.getElementById('dropbtn')
const peckhamBtn = document.getElementById('peckhamBtn')
const eastDulwichBtn = document.getElementById('eastDulwichBtn')
const myButton = document.getElementById('go-btn')
const dropDownContent = document.querySelector('.dropdown-content')
const openInMaps = document.getElementById('open-in-maps-link')

// Street Inject

const injectedStreet = document.querySelector('#injectedStreet')
const injectedTask = document.querySelector('#injectedTask')

// Event Listeners

peckhamBtn.addEventListener('click', function (event) {
  dataList = peckhamList
  dropDown.innerHTML = 'Peckham'
  event.preventDefault() // prevents the page from refreshing when the anchor tag is pressed
})

eastDulwichBtn.addEventListener('click', function (event) {
  dropDown.innerHTML = 'East Dulwich'
  dataList = dulwichList
  event.preventDefault()
})

myButton.addEventListener('click', function (event) {
  console.log('My button presssed')
  var randSelectionList = Math.random() * dataList.length
  var selection = Math.floor(randSelectionList)
  let finalSelection = dataList[selection]

  var randSelectionListTasks = Math.random() * tasksList.length
  var selection = Math.floor(randSelectionListTasks)
  let finalSelectionTasks = tasksList[selection]

  injectedStreet.innerHTML = finalSelection
  injectedTask.innerHTML = finalSelectionTasks
  let mapRef = 'https://google.com/maps/search/' + finalSelection + ', +SE15'
  openInMaps.href = mapRef
  event.preventDefault()
})

// https://www.google.com/maps/search/?api=1&parameters
