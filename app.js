
const foodInfo = require('./food.json');

function listFood(food = '') {
    if (food.length > 0) {
        return foodInfo.filter((food) => food.category === food)
    }
    else {
        return foodInfo
    }
}

listFood("Protein")
listFood('Nuts')
listFood('Vegetable')
listFood('Fruit')
listFood('Grain')
listFood('Dairy')


function sort(type_of_food) {
    if (type_of_food === "protein") {
        return foodInfo.sort((a, b) => b.protiens - a.protiens)
    }
    else if (type_of_food === "carb") {
        return foodInfo.sort((a, b) => a.cab - b.cab)
    }
}
sort('protein')
sort('carb')



function sortCalorie(condition) {
    if (condition === 'asec') {
        return foodInfo.filter((food) => food.calorie < calorie);
    }
    else if (condition === "desc") {
        return foodInfo.filter((food) => food.calorie > calorie)
    }
}

sortCalorie('asec')
sortCalorie('desc')

