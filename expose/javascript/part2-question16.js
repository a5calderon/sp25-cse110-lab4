let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40, 
    rareCars: 2
};

for (const property in statistics){
    // console.log('${property}: ${statistics[property]}')
   //console.log(`${property}: ${statistics[property]}`)
   //console.log(`${statistics[property] % 2 != 0}`)
 // console.log(`${property[0]}`)
  if (property[0] === 'r' || statistics[property] % 2 != 0 ) {
    console.log(`${statistics[property]}`);
  }
}