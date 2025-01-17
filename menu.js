///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

//FROM FIRST ATTEMPT
const pizza = {
    name: 'cheese',
    price: 14.99,
    category: `entree`,
    popularity: 7,
    rating: 4,
    tags: [`vegan`, `fresh`, `kids`, `authentic`],
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
//FROM FIRST ATTEMPT

console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE



console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

// const {price} = pizza

// const {pizza = 8.99} = price

// const {price = `${8.99}`} = pizza

function printDetails({price}){
    console.log(`${8.99}`)
}

printDetails(pizza)




/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

function newCategory({category}){
    console.log(`${'appetizer'}`)
}

newCategory(pizza)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE


//FROM FIRST ATTEMPT

let foodArr = [ 
    {
        name: `ramen`,
        price: 12.99,
        category: `entree`,
        popularity: 9,
        rating: 5,
        tags: [`organic`, `vegan`],
    },
    {
        name: `tteokbokki`,
        price: 7.99,
        category: `entree`,
        popularity: 10,
        rating: 4,
        tags: [`fresh`, `vegetarian`],
    },
    {
    name: `burger`,
    price: 5.99,
    category: `entree`,
    popularity: 5,
    rating: 3,
    tags: [`vegan`],
    },
    {
    name:`salad`,
    price: 3.99,
    category: `appetizer`,
    popularity: 4,
    rating: 4,
    tags: [`fresh`],
},
{
    name: `french fries`,
    price: 4.99,
    category: `appetizer`,
    popularity: 7,
    rating: 5,
    tags: [`kids`],
}
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)
//FROM FIRST ATTEMPT

// const filteredFood = foodArr.filter(ele => ele === vegan)
// console.log(filteredFood)

//NEW

const filteredFood = foodArr.filter((item) => {
   for(let i = 0; i < item.tags.length; i++){
    if(item.tags[i] === 'vegan'){
        return item
    }
   }
})

console.log(filteredFood)


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
//We want to be able to filter for food that has above a certain rating, below a certain price, or any other combo.
// The parameters you will use for those 3 arguments are property, number, and type. 
//It also is saying that when you give it arguments, they will be a string(for property), a number(for number), and either the string 'above' or the string 'below' (for type).

let property = 'rating'
let number = 4
let type = 'above'




function filterByProperty(property, number, type) {
    const filteredArr = foodArr.filter((item)=> {
            if(type === 'above'){
                return item[property] > number
            } else if(type === 'below'){
                return item[property] < number
            }
        
    })
    return filteredArr

}

console.log(filterByProperty(property, number, type))







// const filterByProperty = foodArr.filter((food) => {
//     for(let i = 0; i < food.foodArr.length; i++){
//         if(food.rating > 4){
//             return objects.property > number{
//                 else if(food.rating != 'below'){
//                     return objects.property < number
//                 }
//             }
//         }
//     }
// })





// let property = 'rating'
// let number = 4
// let type = 'above'


// function filterByProperty(foodSpots){
//     return foodArr.filter((item) => {
//         for(let i = 0; i < foodArr.length; i++){
//             if(item.rating > 4){
//                 return item
//             }
//         }
//     })
// }

// console.log(filterByProperty(property))





// let property = 'rating'
// let number = 4
// let type = 'below'
// let filteredArr = foodArr


// function filterByProperty(){
//  return foodArr.filter((item) => {
//     for(let i = 0; i < item.foodArr.length; i++){
//         if(item.rating >= 4){
//             return item
//         }
//     }
// })
// }
// console.log(filterByProperty(4))

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE


console.log(filterByProperty(property, number, type))