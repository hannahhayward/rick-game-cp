let trackerItems = {
  belch: {
    name: 'belch',
    price: 0,
    value: 0,
    buffs: 1
  },
  swig: {
    name: 'swig',
    price: 25,
    value: 0,
    buffs: 1,
  },
  scream: {
    name: 'scream',
    price: 50,
    value: 0,
    buffs: 5
  },
  schwifty: {
    name: 'schwifty',
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
function belch() {
  drawTracker()
  let purchaseAlert = document.getElementById("alert")
  purchaseAlert.classList.add("take-away")
  if (trackerItems.swig.value >= 1) {
    ((trackerItems.belch.value += (trackerItems.swig.value * trackerItems.swig.buffs)));
    ((historicalCount += (trackerItems.swig.value * trackerItems.swig.buffs)))
  }

  if (trackerItems.swig.value >= 1 && trackerItems.scream.value >= 1) {
    (trackerItems.belch.value += ((trackerItems.swig.buffs * trackerItems.swig.value) + (trackerItems.scream.buffs + trackerItems.scream.value)));
    (historicalCount += ((trackerItems.swig.buffs * trackerItems.swig.value) + (trackerItems.scream.buffs + trackerItems.scream.value)));
  }
  if (trackerItems.scream.value >= 1 && trackerItems.chase.value >= 1) {
    (trackerItems.belch.value += ((trackerItems.scream.buffs * trackerItems.scream.value) + (trackerItems.chase.buffs * trackerItems.chase.value)));
    (historicalCount += ((trackerItems.scream.buffs * trackerItems.scream.value) + (trackerItems.chase.buffs * trackerItems.chase.value)));
  }
  if (trackerItems.swig.value >= 1 && trackerItems.scream.value >= 1 && trackerItems.chase.value >= 1) {
    (trackerItems.belch.value += ((trackerItems.swig.buffs * trackerItems.swig.value) + (trackerItems.scream.buffs * trackerItems.scream.value) + (trackerItems.chase.buffs * trackerItems.chase.value)));
    (historicalCount += ((trackerItems.swig.buffs * trackerItems.swig.value) + (trackerItems.scream.buffs * trackerItems.scream.value) + (trackerItems.chase.buffs * trackerItems.chase.value)))
  }
  if (trackerItems.scream.value >= 1) {
    ((trackerItems.belch.value += (trackerItems.scream.value * trackerItems.scream.buffs)));
    ((historicalCount += (trackerItems.scream.value * trackerItems.scream.buffs)))
  }
  if (trackerItems.chase >= 1) {
    ((trackerItems.belch.value += (trackerItems.chase.value * trackerItems.chase.buffs)));
    ((historicalCount += (trackerItems.chase.value * trackerItems.chase.buffs)))
  }
  historicalCount += 1
  trackerItems.belch.value += 1
  drawTracker()
  btnsEnabled()
  btns()
}
function swig() {
 swiggSound()
  if (trackerItems.belch.value >= trackerItems.swig.price) {
    btns()
  }
  let purchaseAlert = document.getElementById("alert")
  trackerItems.belch.value -= trackerItems.swig.price
  trackerItems.swig.value += 1
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <div> <strong>You purchased a swig!</strong> </div>
</div>`
  purchaseAlert.classList.remove("take-away")
  priceIncreaseSwig()
  btnsEnabled()
  drawTracker()
}

function scream() {
  stop()
  if (trackerItems.belch.value >= trackerItems.scream.price) {
    btns()
  }
  let purchaseAlert = document.getElementById("alert")
  trackerItems.belch.value -= trackerItems.scream.price
  trackerItems.scream.value += 1
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <div> <strong>You paid to scream Morty!</strong> </div>
  </div>`
  purchaseAlert.classList.remove("take-away")
  priceIncreaseScream()
  btnsEnabled()
  drawTracker()
}

function chase() {
  terrySound()
  let showTerry = document.getElementById("terry")
  if (trackerItems.belch.value >= trackerItems.chase.price) {
    btns()
  }
  showTerry.classList.remove("take-away")
  startChaseInterval()
  let purchaseAlert = document.getElementById("alert")
  trackerItems.chase.value += 1
  trackerItems.belch.value -= trackerItems.chase.price
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <div> <strong>You paid to initiate a chase after Rick!</strong> </div>
  </div>`
  purchaseAlert.classList.remove("take-away")
  priceIncreaseChase()
  btnsEnabled()
  drawTracker()
}

function schwifty() {
  getSchwifty()
  if (trackerItems.belch.value >= trackerItems.schwifty.price) {
    btns()
  }
  let purchaseAlert = document.getElementById("alert")
  startschwiftyInterval()
  trackerItems.schwifty.value += 1
  trackerItems.belch.value -= trackerItems.schwifty.price
  purchaseAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert" data-dismiss="2000">
  <div> <strong>You purchased a bottle of schwifty!</strong> </div>
  </div>`
  purchaseAlert.classList.remove("take-away")
  priceIncreaseSchwifty()
  btnsEnabled()
  drawTracker()
}
function priceIncreaseSwig() {
  let swigPrice = document.getElementById("swig-price")
  if (swig) {
    trackerItems.swig.price += (Math.floor(trackerItems.swig.price * .20))
    swigPrice.innerHTML = `
    <h3>
    ${trackerItems.swig.price}<i class="mdi mdi-thought-bubble"></i> 
    </h3>`}
  btnsEnabled()
  btns()
}
function priceIncreaseScream() {
  let screamPrice = document.getElementById("scream-price")
  if (scream) {
    trackerItems.scream.price += (Math.floor(trackerItems.scream.price * .20))
    screamPrice.innerHTML = `
    <h3>
    ${trackerItems.scream.price}<i class="mdi mdi-thought-bubble"></i> 
    </h3>`
    btnsEnabled()
    btns()
  }
}
function priceIncreaseSchwifty() {
  let schwiftyPrice = document.getElementById("schwifty-price")
  if (schwifty) {
    trackerItems.schwifty.price += (Math.floor(trackerItems.schwifty.price * .30))
    schwiftyPrice.innerHTML = `
    <h3>
    ${trackerItems.schwifty.price}<i class="mdi mdi-thought-bubble"></i> 
    </h3>`
  }
  btnsEnabled()
  btns()
}
function priceIncreaseChase() {
  let chasePrice = document.getElementById("chase-price")
  if (chase) {
    trackerItems.chase.price += (Math.floor(trackerItems.chase.price * .50))
    chasePrice.innerHTML = `
    <h3>
    ${trackerItems.chase.price}<i class="mdi mdi-thought-bubble"></i> 
    </h3>`
  }
  btnsEnabled()
  btns()
}
function startschwiftyInterval() {
  drawTracker()
  if (trackerItems.chase.value >= 1) {
    startChaseInterval()
  }
  let interval = setInterval(belch, 3000)
}
function startChaseInterval() {
  drawTracker()
  if (trackerItems.schwifty.value >= 1) {
    return startschwiftyInterval
    let interval = setInterval(belch, 700)
  }
  let interval = setInterval(belch, 1000)
}
function btns() {
    document.getElementById("chase").classList.add("disabled");
    document.getElementById("schwifty").classList.add("disabled");
    document.getElementById("scream").classList.add("disabled");
    document.getElementById("swig").classList.add("disabled");
  btnsEnabled()
  drawTracker()
}
function btnsEnabled() {
  if (trackerItems.belch.value >= trackerItems.chase.price) {
    document.getElementById("chase").classList.remove("disabled")
  }
  if (trackerItems.belch.value >= trackerItems.schwifty.price) {
    document.getElementById("schwifty").classList.remove("disabled")
  }
    if (trackerItems.belch.value >= trackerItems.scream.price) {
      document.getElementById("scream").classList.remove("disabled")
    }
    if (trackerItems.belch.value >= trackerItems.swig.price) {
      document.getElementById("swig").classList.remove("disabled")
  }
}
function drawTracker() {
  let trackswig = document.getElementById("swig-value")
  let trackBelch = document.getElementById("belch-value")
  let trackscream = document.getElementById("scream-value")
  let trackschwifty = document.getElementById("schwifty-value")
  let trackChase = document.getElementById("chase-value")
  let trackHistorical = document.getElementById("historical")


  trackswig.innerHTML = `<h3> ${trackerItems.swig.value} <i class="mdi mdi-24px mdi-thought-bubble txt-lgt-blue"></i></h3>`
  trackBelch.innerHTML = `<h3> ${trackerItems.belch.value} <i class="mdi mdi-24px mdi-thought-bubble txt-lgt-blue"></i></h3>`
  trackscream.innerHTML = `<h3> ${trackerItems.scream.value} <i class="mdi mdi-24px mdi-thought-bubble txt-lgt-blue"></i></h3>`
  trackschwifty.innerHTML = `<h3> ${trackerItems.schwifty.value} <i class="mdi mdi-24px mdi-thought-bubble txt-lgt-blue"></i></h3>`
  trackChase.innerHTML = `<h3> ${trackerItems.chase.value} <i class="mdi mdi-24px mdi-thought-bubble txt-lgt-blue"></i></h3>`
  trackHistorical.innerHTML = `<h3> ${historicalCount} <i class="mdi mdi-24px mdi-thought-bubble txt-lgt-blue"></i></h3>`
}
drawTracker()
btns()
function getSchwifty(){
 let audio = new Audio('https://sound.peal.io/ps/audios/000/000/550/original/get_schwifty_in_here.wav?1469744423');
 audio.play();
}
function stop(){
  let audio = new Audio('https://sound.peal.io/ps/audios/000/000/739/original/ohmygod.mp3?1469744104')
  audio.play();
}
function swiggSound(){
  let audio = new Audio('https://sound.peal.io/ps/audios/000/000/533/original/Riggity.wav?1469744359')
  audio.play();
}
function terrySound(){
  let audio = new Audio('https://www.101soundboards.com/storage/board_sounds_rendered/141101.mp3?md5=R5fOjpotDJz6loqWQkDmAg&expires=1621210931')
  audio.play();
}

