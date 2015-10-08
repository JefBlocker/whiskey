(function () {

var templateString = $('#itemTemplate').text();
var itemFunction = _.template(templateString);

_.each(etsy.results, function (item) {
  console.log(item);
  var itemHTML = templateFunction(item);
  $('.container').append(itemHTML);
});



}());