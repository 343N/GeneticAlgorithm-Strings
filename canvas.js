var array = [];
var population, target, mutationRate, popSize;
var x1, x2, y1, y2;
var duration = 0;
var progress, progressBarActualWidth;
var progressBarWidth = 0;
var currentTime, startTime;
var fpsLERP = 0;

function setup(){
  width = $(window).width();
  height = $(window).height();
  target = "Type your phrase to evolve here.";
  mutationRate =  1 / target.length;
  popSize = 200;
  popul = new Population(target, mutationRate, popSize);
  // createCanvas(width, height);

  // progressBar.parent('stats');

  // wordInput.size(400, 64);
  progressBar = createDiv('');
  progressBar.style('left' ,'0px');
  progressBar.id('progressBar');
  progressBar.style('position', 'absolute');
  progressBar.style('top', '0px');
  progressBar.style('height' ,'66px');
  // progressBar.style('width' ,'1px');
  progressBar.style('background-color', 'rgba(50,150,50,.5)');
  // progressBar.style('display','block');
  progressBar.parent('stats');
  wordInput = createInput(target);
  wordInput.style('font-size', '14pt');
  wordInput.style('height','64px');
  wordInput.attribute('id','inputWindow');
  wordInput.style('background-color','');
  wordInput.style('position', 'relative');
  wordInput.style('width', '100%');
  // wordInput.style('z-index','10');
  // wordInput.position(50, 50);
  wordInput.parent('stats');
  wordInput.input(newEvolve);


  bestMatchTitle = createP('Best match:');
  // bestMatch.position(500, 50);
  bestMatchTitle.parent('stats');
  bestMatchTitle.style('left','16px');
  bestMatchTitle.style('top','80px');
  bestMatchTitle.style('color','rgba(200,200,200,250)');
  bestMatchTitle.style('position', 'relative');
  // bestMatchTitle.size(200, 64);
  bestMatchTitle.style('font-size', '20pt');
  bestMatchText = createP('');
  bestMatchText.parent('stats');
  bestMatchText.style('top','130px');
  bestMatchText.style('color','white');
  bestMatchText.style('left','16px');
  bestMatchText.style('position', 'relative');
  bestMatchText.style('font-size', '18pt');

  generationTitle = createP('Generation:');
  generationTitle.parent('stats');
  generationTitle.style('top','200px');
  generationTitle.style('font-size','18pt');
  generationTitle.style('left','16px');
  generationTitle.style('color','rgba(200,200,200,250)');
  generationTitle.style('position', 'relative');
  // generationTitle.size(200, 64);
  generationCount = createP('1');
  generationCount.style('font-size', '16pt');
  generationCount.parent('stats');
  generationCount.style('top','240px');
  generationCount.style('color','white');
  generationCount.style('left','16px');
  generationCount.style('position', 'relative');
  // generationCount.size(200, 64);
  // generationCount.style('font-size', '18pt');

  mutationTitle = createP('Total Mutations:');
  mutationTitle.parent('stats');
  mutationTitle.style('top','280px');
  mutationTitle.style('left','16px');
  mutationTitle.style('font-size','18pt');
  mutationTitle.style('color','rgba(200,200,200,250)');
  mutationTitle.style('position', 'relative');
  // mutationTitle.size(200, 64);
  mutationCount = createP('1');
  mutationCount.style('font-size', '16pt');
  mutationCount.parent('stats');
  mutationCount.style('left','16px');
  mutationCount.style('top','320px');
  mutationCount.style('color','white');
  mutationCount.style('position', 'relative');

  percentTitle = createP('Percent completed:');
  percentTitle.parent('stats');
  percentTitle.style('top','360px');
  percentTitle.style('left','16px');
  percentTitle.style('font-size','18pt');
  percentTitle.style('color','rgba(200,200,200,250)');
  percentTitle.style('position', 'relative');
  // percentTitle.size(200, 64);
  percentCount = createP('1');
  percentCount.style('font-size', '16pt');
  percentCount.parent('stats');
  percentCount.style('left','16px');
  percentCount.style('top','400px');
  percentCount.style('color','white');
  percentCount.style('position', 'relative');

  allMutations = createP('dicks');
  allMutations.style('font-size','11pt');
  // allMutations.parent('mutationlist');
  allMutations.style('position','absolute');
  allMutations.style('width', '66%');
  allMutations.style('top','72px');
  allMutations.style('transform','translateX(-50%)');
  allMutations.style('left','66.6%');
  allMutations.style('padding','0');
  allMutations.style('margin','0');
  allMutations.style('height','20px');
  allMutations.style('vetical-align','center');
  // allMutations.style('background-color','black');
  allMutations.style('text-align','center');
  // mutationCount.size(200, 64);
  // mutationCount.style('font-size', '18pt');
  // bestMatchText.size(200, 64);
  // bestMatchTitle.html('Best match: <br>');
  // for (var i = 0; i < populationSize, i++){
  //   ArrayOfMutations.push()
  // }

  durationTitle = createP('Time elapsed:');
  durationTitle.parent('stats');
  durationTitle.style('top','480px');
  durationTitle.style('left','16px');
  durationTitle.style('font-size','18pt');
  durationTitle.style('color','rgba(200,200,200,250)');
  durationTitle.style('position', 'relative');
  // durationTitle.size(200, 64);
  durationCount = createP('0 seconds');
  durationCount.style('font-size', '16pt');
  durationCount.parent('stats');
  durationCount.style('left','16px');
  durationCount.style('top','520px');
  durationCount.style('color','white');
  durationCount.style('position', 'relative');

  fpsCount = createP('');
  fpsCount.parent('stats');
  fpsCount.style('bottom','0px');
  fpsCount.style('left','16px');
  fpsCount.style('font-size','18pt');
  fpsCount.style('color','rgba(200,200,200,150)');
  fpsCount.style('position', 'relative');
  startTime = new Date();



  // frameRate(1);
  // evolve(target, popSize);

  // popul.getBestDNA();
}

setInterval(function() {fpsCount.html("FPS: " + frameRate().toFixed(3))}, 250);

// setInterval(function() {
//   if (!popul.finished){
//     duration+= .1;
//     durationCount.html(((Math.round(duration*100))/100) + " seconds");
//   }
// }, 100)

function draw(){
  // background(10);
  // console.log(popul.generations);
  width = $(window).width();

  if (!popul.finished && typeof popul != "undefined") {

    popul.getBestDNA();
    // noStroke();
    progress = (popul.bestDNA.fitness / popul.target.length);
    // fill(255,150,150,255);
    // rect(0,0,(progress * (width*.333)), 64);

    // if !popul.finished
    bestMatchText.html(popul.bestDNA.genes.join(''));
    bestMatchText.style('font-size', min(18, (2000 / popul.bestDNA.genes.length)) + "pt");
    generationCount.html(popul.generations);
    mutationCount.html(popul.generations * 200  + " (Current mutation rate: " + Math.floor(mutationRate * 10000)/100 + "%)");
    var allMutationsString = "";

    for (var i = 1; i < popSize; i++) {
      allMutationsString += (popul.DNApool[i].genes.join('') + "<br> ");
      // console.log(popul.DNApool[i].genes.join(''));
    }
    allMutations.html(allMutationsString);
    percentCount.html(Math.floor((popul.bestDNA.fitness / popul.target.length)* 10000)/100 + "%" + "<br>(" + popul.bestDNA.fitness +" out of " + popul.target.length + ")");
    if (!popul.finished) {
      popul.newGeneration();
    }
    currentTime = Date.now();
    var timeDiff = Date.now() - startTime.getTime();
    durationCount.html( timeDiff/1000 + " seconds.");

    // for (var i = 0; i < populationSize, i++){
    // }
    // console.log(popul.generations);
    // console.log(popul.bestDNA.fitness);
    // console.log(popul.bestDNA.genes.join(''));
  }
  progressBarWidth = lerp(progressBarWidth, progress, 0.1);
  progressBarActualWidth = progressBarWidth * (width/3);
  progressBar.style('width', Math.round(progressBarActualWidth) + 'px');

  if (popul.finished) {
    bestMatchText.style('color','rgba(150,255,150,255)');
    progressBar.style('background-color', 'rgba(50,150,50,.7)');
    // mutationCount.style('color','rgba(150,255,150,255)');
    // generationCount.style('color','rgba(150,255,150,255)');
    percentCount.style('color','rgba(150,255,150,255)');
    durationCount.style('color','rgba(150,255,150,255)');
    mutationCount.style('color','rgba(150,255,150,255)');
    generationCount.style('color','rgba(150,255,150,255)');

  }


  // if (populationObj.finished != true || populationObj.generations > 5) {
  // populationObj.naturalSelection();
  // populationObj.crossOver();
  // populationObj.createGeneration();
  //
  // }


  // console.log("tried showing branches");



}

function newEvolve() {
  target = this.value();
  if (target.length > 0) {
    progressBar.style('width', 0 + 'px');
    popul = new Population(target, mutationRate, popSize);
    bestMatchText.style('color','rgba(255,255,255,255)');
    progressBar.style('background-color', 'rgba(50,150,50,.5)');
    percentCount.style('color','white');
    mutationCount.style('color','white');
    generationCount.style('color','white');
    durationCount.style('color','white');
    duration = 0;
    mutationRate =  1 / target.length;
    startTime = new Date(Date.now());
    durationCount.html( 0 + " seconds.");
    // popul.getBestDNA();
    // print("INPUTTED " + this.value() );
  }
}
