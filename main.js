let trackerItems = {
  ideas: 0,
  fear: 0,
  beers: 0,
  drunk: 0,
  urgency: 0,
}
//make this a dictionary
let prices = {
  beer: 25,
  fear: 50,
  wine: 100,
  chase: 350,
}
let buffs = {
  beer: 2,
  fear: 5,
  chase: 10,
}

//main image
//on click harvest a good idea
//one idea per click
function think() {
  drawTracker()
  if (trackerItems.beers >= 1) {
    (trackerItems.ideas += (trackerItems.beers*buffs.beer))
  }
  // if (trackerItems.beers >= 1 && trackerItems.scare >= 1) {
  //   (trackerItems.ideas += (buffs.beer + buffs.fear))
  // }
  // if (trackerItems.beers >= 1 && trackerItems.scare >= 1 && trackerItems.urgency) {
  //   (trackerItems.ideas += (buffs.beer + buffs.fear + buffs.chase))
  // }
  if (trackerItems.scare >= 1) {
    (trackerItems.ideas += trackerItems.fear*buffs.fear)
  }
  if (trackerItems.urgency >= 1) {
    (trackerItems.ideas += trackerItems.urgency*buffs.chase)
  }
  trackerItems.ideas += 1
  console.log("idea click")
}

//multiplies think click rate by 2
//costs 20 ideas
// for every buy it adds 10% price increase
function beer() {
  trackerItems.ideas -= prices.beer
  trackerItems.beers += 1
  priceIncreaseBeer(prices.beer)
  drawTracker()
  // console.log ("multiplied by two per click", 2)
}

//increase the fear count by 5
//for every scare the click count multiplies by 5
function scare() {
  let scareElm = ((think() * 5))
  let fearCost = priceIncreaseFear(prices.fear)
  trackerItems.fear += 1
  trackerItems.ideas -= prices.fear
  drawTracker()
  // console.log("fear increase")

}

function chase() {
  let chaseElm = think(startChaseInterval())
  let chaseCost = priceIncreaseChase()
  trackerItems.urgency += 1
  trackerItems.ideas -= prices.chase
  drawTracker()
}

//getting drunk calls click function at an increased rate of 2x your normal click price
function getDrunk() {
  let drunkElm = (think(startDrunkInterval()) * 2)
  let drunkCost = priceIncreaseWine()
  trackerItems.drunk += 1
  trackerItems.ideas -= prices.wine
  drawTracker()
}

//increase the price of each add on by 10% for every click(purchase)
function priceIncreaseBeer() {
  let beerPrice = document.getElementById("beer-price")
  if (beer) {
    prices.beer += (Math.floor(prices.beer * .20))
    beerPrice.innerHTML = `
    <div>
    ${prices.beer}
    </div>`
    // console.log("beer price increase", prices.beer)
  }

}
function priceIncreaseFear() {
  let fearPrice = document.getElementById("fear-price")
  if (scare) {
    prices.fear += (Math.floor(prices.fear * .20))
    fearPrice.innerHTML = `
      <div> ${prices.fear} </div>`
    // console.log("scare price increase", prices.fear)
  }
}
function priceIncreaseWine() {
  let winePrice = document.getElementById("wine-price")
  if (getDrunk) {
    prices.wine += (Math.floor(prices.wine * .30))
    winePrice.innerHTML = ` <div> ${prices.wine} </div>`
    console.log("wine price is now increased", prices.wine)
  }
}
function priceIncreaseChase() {
  let chasePrice = document.getElementById("chase-price")
  if (chase) {
    prices.chase += (Math.floor(prices.chase * .50))
    chasePrice.innerHTML = `<div> ${prices.chase}`
    console.log("chase price is now increased", prices.chase)
  }
}
function startDrunkInterval() {
  drawTracker()
  let interval = think(trackerItems.drunk, 500)
  console.log("you have now become drunk")
}
function startChaseInterval() {
  let interval = think(trackerItems.urgency, 250)
  console.log("you are now being chased")
}
function drawTracker() {
  let tracker = document.getElementById("tracker")
  tracker.innerHTML = `
<div id="tracker" class="tracker">
<div>Current Idea Balance: ${trackerItems.ideas} 
 <i class="mdi mdi-thought-bubble"></i>
</div>
//TODO - 
<!-- <div>Ideas per Second:
  <p id="rate"-count>0</p>
  <i class="mdi mdi-thought-bubble"></i>
</div> -->
<div>Beers drank: ${trackerItems.beers}
<i class="mdi mdi-thought-bubble"></i>
</div>
<div>Fear drank: ${trackerItems.fear}
 <i class="mdi mdi-thought-bubble"></i>
</div>
<div>Wine drank: ${trackerItems.drunk}
 <i class="mdi mdi-thought-bubble"></i>
</div>
<div>Chases initiated: ${trackerItems.urgency}
  <i class="mdi mdi-thought-bubble"></i>
</div>
//TODO - 
<div>Total Ideas Created:
  <p id="total-ideas-count">0</p>
  <i class="mdi mdi-thought-bubble"></i>
</div>
</div>`


}
drawTracker()