/**
 * Created by carlosvacamorales on 9/26/14.
 */
Meteor.publish('products', function () {
    // you can remove this if you return a cursor
    return Products.find();
});
