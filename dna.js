function DNA(a) {
    this.length = a;
    this.genes = [];
    this.fitness = 0;
    this.phrase;



    // createString(a);
    // console.log(this.length);


    this.createString = function(length) {
        // console.log("generating string..")
        for (var i = 0; i < length; i++) {
            this.genes.push(randomChar());
            // console.log("generating string..");
        }
        // console.log("ARRAY ON CREATION: " + this.genes);
        // this.phrase = this.genes.join('');
        // this.genes = this.phrase.split('')
        // console.log("array ON MUTATION: " + this.genes);
    }


    this.mutate = function(rate) {
        for (var i = 0; i < this.length; i++) {
            if (random(1) < rate) {
                var r = randomChar();
                this.genes[i] = r;
                // console.log(rate);
            }
        }
    }

    function randomChar() {
      return String.fromCharCode(32 + Math.random() * 95);
    }

    this.calcFitness = function(target) {
        var j = 0;
        for (var i = 0; i < target.length; i++) {
            if (target.charAt(i) === this.genes[i]) {
                j++;
                //console.log(j);
            }
        }
        this.fitness = j;
        // this.fitness;
        // console.log(this.fitness);
        return this.fitness;
    }

    this.newChild = function() {
      var child = new DNA(this.genes.length);
      for (var i = 0; i < this.genes.length; i++){
        child.genes.push(this.genes[i]);
        // console.log(this.g/enes[i]);
      }
      // console.log('for loop running');
      // console.log(child.genes);
      return child;



    }

}
