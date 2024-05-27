let person=
{
    firstname:"Dnyan",
    lastname:"Thete",
    age:"27"
};

console.log(person.age);
console.log(person["firstname"]);
//add new property height
person.height = 5.5;
console.log(person.height);

//update existing property
person.age="28";
console.log(person.age);
delete person.age;
console.log(person.age);

//for/in lop
console.log("for in lop");
for(let x in person)
    {
       // console.log(x) // prints only properties names
       // console.log(person[x]); // prints properties  values 
       console.log(x+" "+person[x]);
    }
