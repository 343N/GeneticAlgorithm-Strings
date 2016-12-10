function Population(a, b, c) {
    this.target = a;
    this.mutationRate = b;
    this.size = c;
    this.generations = 1;
    this.finished = false;
    this.bestDNA;
    this.DNApool = [];
    this.generationalArray = [];

    //     this.maxFitness = 0;
    //     this.maxFitness2 = 0;
    //     this.dnaFitness = 0;
    //
    //
    //
    //create DNA objects
    for (var i = 0; i < this.size; i++) {
        // // console.log(this.target.length);
        this.DNApool.push(new DNA(this.target.length));
        this.DNApool[i].createString(this.target.length);
        // // console.log('New DNA created!');
    }

    // this.matingPool = [];


    this.getBestDNA = function() {
        if (this.generations === 1) {
            this.bestDNA = this.DNApool[0];
        }
        for (var i = 0; i < this.size; i++) {
            this.DNApool[i].calcFitness(this.target);
            // console.log(this.DNApool[i].fitness + ":CURRENT DNA FITNESS")
            // this.curDNAFitness = this.DNApool[i].fitness;
            if (this.DNApool[i].fitness > this.bestDNA.fitness) {
                // console.log(this.bestDNA.fitness + ": BEST DNA FITNESS - ");
                this.bestDNA = this.DNApool[i];
                // console.log(this.bestDNA.fitness + ": BEST DNA FITNESS - ");
            }
            if (this.bestDNA.fitness === this.target.length) {
                this.finished = true;
                // console.log('finished!')
                // console.log(this.target.length);
            }
        }
        // if (this.generations > 10) {
            // this.finished = true;
        // }
        // for (var i = 0; i < this.size; i++) {
        var genesArray = [];
        var fitnessArray = [];
        for (var i = 0; i < this.size; i++) {
            genesArray.push(this.DNApool[i].genes);
            fitnessArray.push(this.DNApool[i].fitness);
        }
        //this.generationalArray.push([this.generations, fitnessArray, genesArray, this.bestDNA.fitness]);
        // console.log(this.generationalArray);
        // }
        // console.log("done getting BESTDNA");
    }




    this.newGeneration = function() {

        for (var i = 0; i < this.size; i++) {
            // console.log(this.DNApool[i]);
            // console.log("BEST GENES FOR GENERATION: " + this.bestDNA.genes.join('') + " with fitness of " + this.bestDNA.fitness);
            // console.log(this.bestDNA);
            var child = this.bestDNA.newChild();
            child.mutate(this.mutationRate);
            this.DNApool[i] = child;
            // console.log(this.DNApool[i].genes);
            // console.log("NEW DNA GENES OF FITNESS " + this.DNApool[i].calcFitness(this.target) +  " ABOVE");
            // console.log(this.DNApool[i]);
        }
        this.generations++;
        // console.log(this.bestDNA.fitness);
        // console.log(this.generations + " is the generation count");
    }





}
