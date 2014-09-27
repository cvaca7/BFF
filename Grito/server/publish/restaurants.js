/**
 * Created by carlosvacamorales on 9/26/14.
 */
Meteor.publish('restaurants', function () {
    // you can remove this if you return a cursor
    return Restaurants.find();
});
