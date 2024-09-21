let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];


// print by Map function
function printdeveloperByMap(){
    employees.map((employees) =>{
        if(employees.profession === 'developer'){
            console.log(employees);
        }
    })
}
printdeveloperByMap();


// print by forEach function
function printDevlepByForEach(){
    employees.forEach((employees) =>{
        if(employees.profession === 'developer'){
            console.log(employees);
        }
    })
}
// printDevlepByForEach();

// Add data 
function addData(){
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(employees);
}
addData();

// remove data
function removeAdmin(){
    employees = employees.filter((employees)=>{
        if(employees.profession !== 'admin'){
            console.log(employees);
        }
    })
}
removeAdmin();

// conact data
function ConcatinateArray() {
    const newEmployees = [
        { id: 5, name: "alice", age: "22", profession: "developer" },
        { id: 6, name: "bob", age: "25", profession: "admin" },
        { id: 7, name: "charlie", age: "23", profession: "intern" }
    ];
    const concatenatedArray = employees.concat(newEmployees);
    console.log(concatenatedArray);
}
ConcatinateArray();