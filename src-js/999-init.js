;(function () {
  var $ = window.jQuery
  var THE_BLACK_POT = window.THE_BLACK_POT

  function globalInit () {
    THE_BLACK_POT.fetchFlickrImages()
    THE_BLACK_POT.fetchNews()
    THE_BLACK_POT.callDailySpecial()
    THE_BLACK_POT.fetchMenu()
    THE_BLACK_POT.initGoogleMap()
  }

  $(globalInit)
})()
