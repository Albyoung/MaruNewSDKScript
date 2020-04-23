// @ts-nocheck
const Scene = require('Scene');
const Patches = require('Patches');


Promise.all([
    Scene.root.findFirst('directionalLight01'),
    Scene.root.findFirst('number'),
    Patches.outputs.getScalar('score'),
    Patches.outputs.getPulse('gameOver'),
    Patches.outputs.getPulse('gamePlay')
    ]).then( (loadedItems) => {
   
    const directionalLight = loadedItems[0];
    
   
    var counterNumber = loadedItems[1];
    
    
    var scoreNumber = loadedItems[2];
    var gameOver = loadedItems[3];
    var gamePlay = loadedItems[4];
    
   
    counterNumber.text = scoreNumber.toString();

    Patches.setBooleanValue('start', true);
    Patches.setBooleanValue('reset', false);

    gameOver.subscribe(function(){
        Patches.setBooleanValue('start', true);
        Patches.setBooleanValue('reset', true);
    

    });

    gamePlay.subscribe(function(){
        Patches.setBooleanValue('start', true);
        Patches.setBooleanValue('reset', false);
    });

});