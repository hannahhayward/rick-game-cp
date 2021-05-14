let trackerItems = {
  idea: {
    name: 'idea',
    price: 0,
    value: 0,
    buffs: 1
  },
  fear: {
    name: 'fears',
    price: 50,
    value: 0,
    buffs: 5
  },
  beer: {
    name: 'beer',
    price: 25,
    value: 0
  },
  wine: {
    name: 'wine',
    price: 100,
    value: 0,
    buffs: 0
  },
  chase: {
    name: 'chase',
    value: 0,
    price: 350,
    buffs: 10
  },
  historical: {
    name: 'total idea',
    price: 0,
    value: 0,
    buffs: 0
  }
}
// debugger
//main image
//on click harvest a good idea
//one idea per click
function think() {
  drawTracker()
  leveler()

  if (trackerItems.beer.value >= 1) {
    ((trackerItems.idea.value += (trackerItems.beer.value * trackerItems.beer.buffs)) && (trackerItems.historical.value += (trackerItems.beer.value * trackerItems.beer.buffs)))
  }

  // if (trackerItems.beer >= 1 && trackerItems.scare >= 1) {
  //   (trackerItems.idea.value += (buffs.beer + trackerItems.fear.buffs))
  // }
  // if (trackerItems.beer >= 1 && trackerItems.scare >= 1 && trackerItems.chase) {
  //   (trackerItems.idea.value += (buffs.beer + trackerItems.fear.buffs + buffs.chase))
  // }
  if (trackerItems.fear.value >= 1) {
    ((trackerItems.idea.value += trackerItems.fear.value * trackerItems.fear.buffs) && (trackerItems.historical.value += trackerItems.fear.value * trackerItems.fear.buffs))
  }
  if (trackerItems.chase >= 1) {
    ((trackerItems.idea.value += trackerItems.chase * buffs.chase) && (trackerItems.historical.value += trackerItems.chase * buffs.chase))

  }
  trackerItems.historical.value += trackerItems.idea.value
  trackerItems.idea.value += trackerItems.idea.value
  console.log("idea click")
}

//multiplies think click rate by 2
//costs 20 idea
// for every buy it adds 10% price increase
function beer() {
  trackerItems.idea.value -= trackerItems.beer.price
  trackerItems.beer.value += 1
  priceIncreaseBeer(trackerItems.beer.price)
  drawTracker()
  // console.log ("multiplied by two per click", 2)
}

//increase the fear count by 5
//for every scare the click count multiplies by 5
function scare() {
  let scareElm = think()
  let fearCost = priceIncreaseFear(trackerItems.fear.price)
  trackerItems.fear.value += 1
  trackerItems.idea.value -= trackerItems.fear.price
  drawTracker()
  // console.log("fear increase")

}

function chase() {
  let chaseElm = startChaseInterval()
  let chaseCost = priceIncreaseChase()
  trackerItems.chase += 1
  trackerItems.idea.value -= trackerItems.chase.price
  drawTracker()
}

//getting wine calls click function at an increased rate of 2x your normal click price
function wine() {
  let wineElm = startwineInterval()
  let wineCost = priceIncreaseWine()
  trackerItems.wine += 1
  trackerItems.idea.value -= trackerItems.wine.price
  drawTracker()
}

//increase the price of each add on by 10% for every click(purchase)
function priceIncreaseBeer() {
  let beerPrice = document.getElementById("beer-price")
  if (beer) {
    trackerItems.beer.price += (Math.floor(trackerItems.beer.price * .20))
    beerPrice.innerHTML = `
    <div>
    ${trackerItems.beer.price}
    </div>`
    // console.log("beer price increase", trackerItems.beer.price)
  }

}
function priceIncreaseFear() {
  let fearPrice = document.getElementById("fear-price")
  if (scare) {
    trackerItems.fear.price += (Math.floor(trackerItems.fear.price * .20))
    fearPrice.innerHTML = `
      <div> ${trackerItems.fear.price} </div>`
    // console.log("scare price increase", trackerItems.fear.price)
  }
}
function priceIncreaseWine() {
  let winePrice = document.getElementById("wine-price")
  if (wine) {
    trackerItems.wine.price += (Math.floor(trackerItems.wine.price * .30))
    winePrice.innerHTML = ` <div> ${trackerItems.wine.price} </div>`
    console.log("wine price is now increased", trackerItems.wine.price)
  }
}
function priceIncreaseChase() {
  let chasePrice = document.getElementById("chase-price")
  if (chase) {
    trackerItems.chase.price += (Math.floor(trackerItems.chase.price * .50))
    chasePrice.innerHTML = `<div> ${trackerItems.chase.price}`
    console.log("chase price is now increased", trackerItems.chase.price)
  }
}
function startwineInterval() {
  drawTracker()
  let interval = setInterval(think, 5000)
  console.log("you have now become wine")
}
function startChaseInterval() {
  drawTracker()
  let interval = setInterval(think, 1000)
  console.log("you are now being chased")
}
function drawTracker() {
  let tracker = document.getElementById("tracker")
  tracker.innerHTML = `
<div id="tracker" class="tracker">
<div>Current Idea Balance: ${trackerItems.idea.value} 
 <i class="mdi mdi-thought-bubble"></i>
</div>
<!-- <div>idea per Second:
  multiplier: 
  <i class="mdi mdi-thought-bubble"></i>
</div> -->
<div>beer drank: ${trackerItems.beer.value}
<i class="mdi mdi-thought-bubble"></i>
</div>
<div>Fear drank: ${trackerItems.fear.value}
 <i class="mdi mdi-thought-bubble"></i>
</div>
<div>Wine drank: ${trackerItems.wine.value}
 <i class="mdi mdi-thought-bubble"></i>
</div>
<div>Chases initiated: ${trackerItems.chase.value}
  <i class="mdi mdi-thought-bubble"></i>
</div>
<div>Total idea Created:${trackerItems.historical.value}
  <i class="mdi mdi-thought-bubble"></i>
</div>
</div>`
  // leveler()

}
function leveler() {
  if (trackerItems.idea.value >= 50) {
    trackerItems.idea.value += 1
  }
  if (trackerItems.idea.value >= 40) {
    trackerItems.idea.value += 1
  }
  if (trackerItems.idea.value >= 30) {
    trackerItems.idea.value += 1
  }
  if (trackerItems.idea.value >= 20) {
    trackerItems.idea.value += 1
  }
  if (trackerItems.idea.value >= 10) {
    trackerItems.idea.value += 1
  }
  console.log("automatic buffer")
}
function buffCounter(){
  for(let key in trackerItems){
    let buff = trackerItems[key]
  }
}
drawTracker()
leveler()