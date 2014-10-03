/**
 * Created by carlosvacamorales on 10/2/14.
 */
Meteor.startup (
    function () {
        console.log('Meteor start, version: ' + Assets.getText("version.txt"));
        ModelSeed.seedModel();
    }
);