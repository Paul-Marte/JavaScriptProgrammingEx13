/**
 * Person class
 * @param {string} fName The first name
 * @param {string} lName The last name
 * @param {Date} dob The date of birth
 */
const Person = function (fName, lName, dob) {
    this.firstName = fName;
    this.lastName = lName;
    this.dateOfBirth = dob;

    this.toString = function () {
        return `Name: ${this.firstName} ${this.lastName} DOB: ${this.dateOfBirth}`;
    }

    this.age = function () {
        let now = new Date();
        let yearsOfAge = now.getFullYear() - this.dateOfBirth.getFullYear();

        if (now.getMonth() < this.dateOfBirth.getMonth() ||
            (
                now.getMonth() === this.dateOfBirth.getMonth()
                && now.getDate() < this.dateOfBirth.getDate()
            )
        ) {
            yearsOfAge -= 1;
        }

        return yearsOfAge;
    }
}

let person1 = new Person('Chris', 'Cusack', new Date(2000, 2, 30));
let person2 = new Person('Justin', 'Cormier', new Date(1996, 4, 15));
let person3 = new Person('Jean', 'Cormier', new Date(1990, 2, 2));
let person4 = new Person('Jennifer', 'Cusack', new Date(1999, 5, 5));

let people = [];

people.push(person1, person2, person3, person4);

//console.log(people);

// Query
// filter
let query = people.filter(person => person.lastName === 'Cormier'
    || person.firstName === 'Jennifer');

if (!!query.length) {
    console.log(`${query.length} people found`);

    for (const p of query) {
        console.log(p.toString(), `Age ${p.age()}`);
    }
} else {
    console.log('No results found');
}

// filter on age
let people25OrLess = people.filter(p => p.age() <= 25);

console.log('--25 or less--');
console.log(people25OrLess);

//Find
let findChris = people.find(p => {
    return p.firstName === 'Chris'
});

console.log('---Find---');
console.log(findChris);

if (!!findChris) {
    console.log('Chris was found');
} else {
    console.log('Chris was not found');
}

let findCormier = people.find(p => p.lastName === 'Cormier');
console.log(findCormier);

// Starts with
let filterStartsWith = people.filter(p => p.lastName.indexOf('Cu') === 0);
console.log('--Starts with Cu--');
console.log(filterStartsWith);

// Anywhere partial search
let filterAnywherePartial = people.filter(p => p.lastName.indexOf('ac') > -1);
console.log('--Partial anywhere ac--');
console.log(filterAnywherePartial);

// Mapping
let firstNames = people.map(p => p.firstName);

console.log('---Mapping---');
console.log(firstNames);

// Mapping to a new representational object
let newObjects = people.map(p => {
    return {
        wholeName: `${p.firstName} ${p.lastName}`,
        yearsOfAge: p.age()
    }
});

console.log('--New Object--');
console.log(newObjects);






/*if(now.getMonth() < this.dateOfBirth.getMonth()){
           
            if(now.getDate() < this.dateOfBirth.getDate()){
                yearsOfAge -= 1;
            }
            else{
                yearsOfAge = now.getFullYear() - this.dateOfBirth.getFullYear()-1 ;
            }
        }
        else{
            yearsOfAge = now.getFullYear() - this.dateOfBirth.getFullYear()-1 ;
        }*/