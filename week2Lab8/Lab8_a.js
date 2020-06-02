(function () {
    "use strict"
    const buttn = document.getElementById("start");
    
    let bicyclePrototype;
    let mountainBikePrototype;
    
    const createBicyclePrototye = function () {
        return {
            speed:0,
            speedUp: function (increment) {
                this.speed += increment
            },
            applyBrake: function (decrement) {
                this.speed -= decrement
            }
        }
    }
    const createMountainBikeProtoype = function (prototyp) {
        let objct = Object.create(prototyp);
        objct.gear = 1;
        objct.SetGear = function (val) {
            this.gear = val;
        }

        return objct;

    }

    const playStart = function () {
        bicyclePrototype = createBicyclePrototye();
        mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.speed);
        bicyclePrototype.speedUp(15);
        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.speed);
        console.log(mountainBikePrototype.hasOwnProperty('speed'));
        mountainBikePrototype.applyBrake(10);
        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.SetGear(7);
        console.log( mountainBikePrototype.gear);
        console.log(`is Speed mountbike property? ${mountainBikePrototype.hasOwnProperty('speed')}`);

        // new object from mountainBikePrototype
        let mountainBike = Object.create(mountainBikePrototype);
        mountainBike.SetGear(9);
        console.log(`my new MOuntain bike has ${mountainBike.gear} gears`);
    }
    window.onload = function () {
        buttn.onclick = playStart;
    }

})();
