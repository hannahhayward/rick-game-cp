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
    value: 0,
    buffs: 1,
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
}
let historicalCount = 0
let buffTotal = 0
// debugger
//main image
//on click harvest a good idea
//one idea per click
function think() {
  // debugger
  // buffCounter()
  drawTracker()
  // leveler()

  if (trackerItems.beer.value >= 1) {
    ((trackerItems.idea.value += (trackerItems.beer.value * trackerItems.beer.buffs)));
    ((historicalCount += (trackerItems.beer.value * trackerItems.beer.buffs)))
  }

  if (trackerItems.beer.value >= 1 && trackerItems.fear.value >= 1) {
    (trackerItems.idea.value += ((trackerItems.beer.buffs *trackerItems.beer.value)+(trackerItems.fear.buffs+trackerItems.fear.value)))
    (historicalCount+= ((trackerItems.beer.buffs *trackerItems.beer.value)+(trackerItems.fear.buffs+trackerItems.fear.value)))
  }
  if(trackerItems.fear.value >= 1 && trackerItems.chase.value >= 1){
    (trackerItems.idea.value += ((trackerItems.fear.buffs*trackerItems.fear.value) + (trackerItems.chase.buffs * trackerItems.chase.value)))
    (historicalCount += ((trackerItems.fear.buffs*trackerItems.fear.value) + (trackerItems.chase.buffs * trackerItems.chase.value)))
  }
  if (trackerItems.beer.value >= 1 && trackerItems.fear.value >= 1 && trackerItems.chase.value >=1) {
    (trackerItems.idea.value += ((trackerItems.beer.buffs*trackerItems.beer.value) + (trackerItems.fear.buffs * trackerItems.fear.value) + (trackerItems.chase.buffs*trackerItems.chase.value)));
    (historicalCount += ((trackerItems.beer.buffs*trackerItems.beer.value) + (trackerItems.fear.buffs * trackerItems.fear.value) +t(rackerItems.chase.buffs)*trackerItems.chase.value));
  }
  if (trackerItems.fear.value >= 1) {
    ((trackerItems.idea.value += (trackerItems.fear.value * trackerItems.fear.buffs)));
    ((historicalCount += (trackerItems.fear.value * trackerItems.fear.buffs)))
    // && (trackerItems.historical.value += (trackerItems.fear.value * trackerItems.fear.buffs)))

  }
  if (trackerItems.chase >= 1) {
    ((trackerItems.idea.value += (trackerItems.chase.value * trackerItems.chase.buffs)));
    ((historicalCount += (trackerItems.chase.value * trackerItems.chase.buffs)))

    // && (trackerItems.historical.value += (trackerItems.chase * buffs.chase))))
  }
  historicalCount += 1
  trackerItems.idea.value += 1
  drawTracker()
}
function beer() {
  // debugger
  let purchaseAlert = document.getElementById("alert")
  trackerItems.idea.value -= trackerItems.beer.price
  trackerItems.beer.value += 1
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div> <strong>You purchased a beer!</strong> </div>
  <div> Your current idea balance is: ${trackerItems.idea.value} <i class="mdi mdi-thought-bubble"></i></div
</div>`
  priceIncreaseBeer()
  drawTracker()
  // console.log ("multiplied by two per click", 2)
}

function scare() {
  priceIncreaseFear()
  let purchaseAlert = document.getElementById("alert")
  trackerItems.idea.value -= trackerItems.fear.price
  trackerItems.fear.value += 1
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div> <strong>You paid to scare Rick!</strong> </div>
  <div> Your current idea balance is: ${trackerItems.idea.value} <i class="mdi mdi-thought-bubble"></i></div
</div>`
  drawTracker()
  // console.log("fear increase")

}

function chase() {
startChaseInterval()
 priceIncreaseChase()
  let purchaseAlert = document.getElementById("alert")
  trackerItems.chase.value += 1
  trackerItems.idea.value -= trackerItems.chase.price
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div> <strong>You paid to initiate a chase after Rick!</strong> </div>
  <div> Your current idea balance is: ${trackerItems.idea.value} <i class="mdi mdi-thought-bubble"></i></div
</div>`
  drawTracker()
}

function wine() {
  // debugger
  let purchaseAlert = document.getElementById("alert")
  startwineInterval()
  priceIncreaseWine()
  trackerItems.wine.value += 1
  trackerItems.idea.value -= trackerItems.wine.price
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div> <strong>You purchased a bottle of wine!</strong> </div>
  <div> Your current idea balance is: ${trackerItems.idea.value} <i class="mdi mdi-thought-bubble"></i></div
</div>`
  drawTracker()
}
function alert() {

}
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
  if(trackerItems.chase.value>=1){
    startChaseInterval()
  }
  let interval = setInterval(think, 3000)
  console.log("you have now become wine")
}
function startChaseInterval() {
  drawTracker()
  if(trackerItems.wine.value >= 1){
    return startwineInterval
  let interval = setInterval(think, 700)
}
let interval = setInterval(think, 1000)
  console.log("you are now being chased")
}

function drawTracker() {
  // buffCounter()
  let tracker = document.getElementById("tracker")
  tracker.innerHTML = `
<div id="tracker" class="tracker">
<div>Current Idea Balance: ${trackerItems.idea.value} 
 <i class="mdi mdi-thought-bubble"></i>
</div>
// <div>ideas per Second:
//   <i class="mdi mdi-thought-bubble"></i>
// </div>
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
<div>Total idea Created:${historicalCount}
  <i class="mdi mdi-thought-bubble"></i>
</div>
</div>`
  // leveler()

}
// function leveler() {
//   if (trackerItems.idea.value >= 50) {
//     trackerItems.idea.buffs += 1
//   }
//   if (trackerItems.idea.value >= 40) {
//     trackerItems.idea.buffs += 1
//   }
//   if (trackerItems.idea.value >= 30) {
//     trackerItems.idea.buffs += 1
//   }
//   if (trackerItems.idea.value >= 20) {
//     trackerItems.idea.buffs += 1
//   }
//   if (trackerItems.idea.value >= 10) {
//     trackerItems.idea.buffs += 1
//   }
//   console.log("automatic buffer", buffTotal)
// }

// function buffCounter() {
//   if (trackerItems.beer.value >= 1) {
//     (buffTotal += (trackerItems.beer.value * trackerItems.beer.buffs))
//   }
//   if (trackerItems.fear.value >= 1) {
//     (buffTotal += (trackerItems.fear.value * trackerItems.fear.buffs))
//   }
//   if (trackerItems.chase.value >= 1) {
//     (buffTotal += (trackerItems.chase.value * trackerItems.chase.buffs))
//   }
//   buffTotal = trackerItems.idea.buffs
// }
// buffCounter()
drawTracker()
