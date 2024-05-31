// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for (let year = 2000; year <= 2100 ; year++) {
   let x = new Date(year, 0, 1)
    
   if(x.getDay() === 0){
    console.log(`First January will be Sunday in : ${year}`)
   }
}