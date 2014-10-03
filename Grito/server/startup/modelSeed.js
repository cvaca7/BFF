
ModelSeed = {};

ModelSeed.seedModel = function(){
    //Encounter
    var AssetEncounter = Assets.getText("encounter.txt");
    var Encounters = JSON.parse(AssetEncounter);
    console.log(Encounters.length + " Encounters");
    var i = 0;
    Encounters.forEach (function (enc) {
        var AlreadyExists = Encounter.findOne (enc._id);
        if (AlreadyExists == undefined) {
            var result = Encounter.insert(enc);
            console.log(i + "-" + result);
            i++;
        }
    });
};