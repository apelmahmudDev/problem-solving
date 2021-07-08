// CONVERT FEET TO MILE

function feetToMile(feet){
    var everyMile = 0.000189394;
    var totalMile = (feet * everyMile).toFixed(8);
    return totalMile + ' ' + 'mile';
}

var tobeMile = feetToMile(5280);
console.log(tobeMile);


//WOOD CALCULATION OF TABLE, CHAIR AND BED

function woodCalculator(chairNumber, tableNumber , khatNumber){
    var everyChairCubicFeet = 1;
    var everyTableCubicFeet = 3;
    var everyKhatCubicFeet = 5;

    var totalChairWood = chairNumber * everyChairCubicFeet;
    var totalTableWood = tableNumber * everyTableCubicFeet;
    var totolKhatWood = khatNumber * everyKhatCubicFeet;

    return totalWoodNeed = totalChairWood + totalTableWood + totolKhatWood + ' ' + 'Cubic Feet';
}

var chairTableKhat = woodCalculator(10, 2, 5);
console.log(chairTableKhat);



//BRICK CALCULATION OF BUILDING

function brickCalculator(buildingNumber){

    var buildindHeightOne = 15;
    var buildindHeightTwo = 12;
    var buildindHeightThree = 10;
    var brickForOneFeet = 1000;
    var totalBricksForBuilding = 0;

    if(buildingNumber <= 10){
        totalBricksForBuilding = buildingNumber * buildindHeightOne * brickForOneFeet;
    }
    else if(buildingNumber <= 20){
        var firstBuildingPart = brickForOneFeet * buildindHeightOne * 10;
        var otherBuilding = buildingNumber - 10;
        var secondBuildingPart = otherBuilding * buildindHeightTwo * brickForOneFeet;
        totalBricksForBuilding = firstBuildingPart + secondBuildingPart;
    }
    else{
        var firstBuildingPart = brickForOneFeet * buildindHeightOne * 10;
        var secondBuildingPart = brickForOneFeet * buildindHeightTwo * 10;
        var otherBuilding = buildingNumber - 20;
        var thirdBuildingPart = otherBuilding * buildindHeightThree * brickForOneFeet;
        totalBricksForBuilding = firstBuildingPart + secondBuildingPart + thirdBuildingPart;
    }
    return totalBricksForBuilding + ' bricks';
}

var totalBricks = brickCalculator(24);
console.log(totalBricks);


//DETERMINE TINY FRIEND
function tinyFriend(){
    const friends = ['Moborok', 
    'Shekh Arin', 
    'Nur Alom Siddik', 
    'Hasin Haydar', 
    'Noman Kabir', 
    'Liakat karim', 
    'Sujona'];

    const allFrNameLength = [];
    for(let i = 0; i < friends.length; i++) {
        const frName = friends[i];
        const frNameLength = frName.length;
        allFrNameLength.push(frNameLength);
    }

    for(let i = 0; i < friends.length; i++) {
        const frName = friends[i];
        if(frName.length == Math.min(...allFrNameLength)){
            const tinyFriend = frName;
            return tinyFriend;
        }
    }  
}

const result = tinyFriend();
console.log('Our tiny friend is '+ result);