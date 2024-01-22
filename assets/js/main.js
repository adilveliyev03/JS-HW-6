function changeDateFormat(obj) {
    const date = new Date(obj.date);


    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
}); 


const newObj = { ...obj, date: formattedDate };


return newObj;
}


const input = {
    id: 1,
    title: "Date format",
    date: "2024-01-22T00:00:00Z",
    content: "Date format"
}; 

const output = changeDateFormat(input);
console.log(output);







const objects = [
    { id: 1, name: 'object1' },
    { id: 2, name: 'object2' },
    { id: 3, name: 'object3' }
];

const reducedObject = objects.reduce((acc, curr) => {
    return { ...acc, [curr.id]: curr.name };
}, {});

console.log(reducedObject);


