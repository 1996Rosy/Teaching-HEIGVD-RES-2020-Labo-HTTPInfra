var Chance = require('chance');
var chance = new Chance();
//console.log("Hey!! Visit " + chance.country({ full: true }) + " cause this country is lit!!");


const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send(generateCountry())
})

app.listen(3000, function () {
  console.log('Accepting HTTP requests on port 3000!')
})


function generateCountry() {
    var countries = []
  //  console.log("The lucky animal of " + chance.country({full:true}) + " is " +chance.animal() + " and their national dish is " + chance.word() )
    var limit = chance.integer({min:1, max:6})
    for(var i = 0; i < limit; i++){
      countries.push({
        countryName : chance.country({full:true}),
        symbolicAnimal: chance.animal(),
        nationalDish: chance.word()
      })
    }
    console.log(countries)
    return countries
  }