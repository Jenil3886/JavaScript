// const tinderUser = new Object() // this is singelton object

const tinderUser = {} // this is non singelton user

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const ragelarUsar = {
    email: "jenilgajera@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Jenil",
            lastname: "Gajera"
        }
    }
}

// console.log(ragelarUsar.fullname?.userfullname.firstname)

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D" }
const obj3 = { 5: "E", 6: "F" }

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4)
const users = [
    {
        id: "jenil gajera",
        email: "jenil@gmail.com"
    },
    {
        id: "sanket talaviya",
        email: "sanket@gmail.com"
    },
    {
        id: "parth meghani",
        email: "parth@gmail.com"
    }
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ 'abc123', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', 'abc123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]  // all object value is sepret valus is array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // aapada object ma aa propaty che k nay ae aapana ne aana thi khabar pade 