// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(feet){
    return Math.abs(feet - 42 )*264;

}

function distanceTravelledInFeet(street1, street2){
return Math.abs(street1-street2)*264;
}

function calculatesFarePrice(start, destination) {
let distance = Math.abs(start - destination)*264;
let fare;
if(distance <=400){
return fare=0;
}
else if (distance >= 400 && distance <=2000){
return fare=0.02*(distance - 400);
}
else if (distance>=2000 && distance<= 2500 ) {
    return fare= 25;
}
else {
return 'cannot travel that far';
}

}