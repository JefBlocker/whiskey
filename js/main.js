(function () {

    // Grab the template string.
    var templateString = $('#item-template').text();

    // Turn it into a template function.
    var renderTemplate = _.template(templateString);

    _.each(etsy.results, function(item) {

    // Pass in an object. Return value is a string
    // with the bee stings replaced with object's properties
    var freshHTML = renderTemplate(item);

    // Inject the fresh html into the page.
    $('.container').append(freshHTML);
  });

}());

//var templateString = $('#itemTemplate').text();
//var itemFunction = _.template(templateString);

//_.each(etsy.results, function (item) {
 // console.log(item);
 // var itemHTML = templateFunction(item);
 // $('.container').append(itemHTML);
//});