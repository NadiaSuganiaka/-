//function
const firstAge = prompt ('Enter your age: ');
const secondAge = prompt ('Enter your age: ');
const thirdAge = prompt ('Enter your age: ');
const fourthAge = prompt ('Enter your age: ');

function checkAge(age){
    const ageOfMajority = 18;

    if (age >= ageOfMajority){
        return 'Користувач повнолітній';
    
    }else if (age < ageOfMajority && age > 0){
        return 'Користувач неповнолітній';

    }else if (age < 0){
        return null;
    }
}
console.log(checkAge(firstAge));
console.log(checkAge(secondAge));
console.log(checkAge(thirdAge));
console.log(checkAge(fourthAge));

//without function

const ageOfMajority = 18;

if (firstAge >= ageOfMajority){
    console.log('Користувач повнолітній'); 

}else if (firstAge < ageOfMajority && firstAge > 0){
   console.log('Користувач неповнолітній');

}else if (firstAge < 0){
    console.log(null);
}

if (secondAge >= ageOfMajority){
    console.log('Користувач повнолітній'); 

}else if (secondAge < ageOfMajority && secondAge > 0){
    console.log('Користувач неповнолітній');

}else if (secondAge < 0){
    console.log(null);
}

if (thirdAge >= ageOfMajority){
    console.log('Користувач повнолітній'); 

}else if (thirdAge < ageOfMajority && thirdAge > 0){
    console.log('Користувач неповнолітній');

}else if (thirdAge < 0){
    console.log(null);
}

if (fourthAge >= ageOfMajority){
    console.log('Користувач повнолітній'); 

}else if (fourthAge < ageOfMajority && fourthAge > 0){
    console.log('Користувач неповнолітній');

}else if (fourthAge < 0){
    console.log(null);
}
