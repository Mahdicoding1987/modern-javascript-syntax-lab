const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentNum) => {
  return currentNum * 2;
});

//console.log(nums2);

/////////////////////////////////////////////////////////////////////////////////////

const toppingsArray = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = toppingsArray;

//console.log(firstTopping); // 'Pineapple'
//console.log(secondTopping); // 'Olives'

//console.log(toppingsArray[0]); // 'Pineapple'
//console.log(toppingsArray[1]); // 'Olives'

//////////////////////////////////////////////////////////////////////////////////////

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };

const {make, model} = car;
  //console.log(make); // 'Audi'
  //console.log(model); // 'q5'

//////////////////////////////////////////////////////////////////////////////////////

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings]

//console.log(controversialPizzaToppings); // ['Pineapple', 'Olives', 'Anchovies']

//////////////////////////////////////////////////////////////////////////////////////

const car2 = {
    make: 'Audi',
    model: 'q5',
  };

const myCar = {...car2};

myCar.model = 'q7';

//console.log('Clone: ', myCar); // Clone:  { make: 'Audi', model: 'q7' }

//////////////////////////////////////////////////////////////////////////////////////

const userProfile = 'Name';

const propertyName = {[userProfile]:"Mahdi"};

//console.log(propertyName); // Name: Mahdi

//////////////////////////////////////////////////////////////////////////////////////

function myCat (animal = "cat", color = "white") {
    return "the " + animal + " is " + color;
    };
  

 //console.log(myCat()); // the cat is white

 //////////////////////////////////////////////////////////////////////////////////////

const pizza = 'tasty';

let taste = pizza === 'tasty' ? 'yum' : 'yuck';

//console.log(taste); 

//////////////////////////////////////////////////////////////////////////////////////

const localLangConfig = null;

const LANG = localLangConfig || 'en';

//console.log('Language setting:', LANG);

const userSavedTheme = null;

const USER_THEME = userSavedTheme || 'light';

//console.log('User theme setting:', USER_THEME);

//////////////////////////////////////////////////////////////////////////////////////

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.dog?.name;
  
  console.log(cat);