const getObject = (arr, obj) => obj ? {
    id: obj.id,
    next: obj.next,
    value: obj.value || getObject(arr, arr.find(e => e.id === obj.next)),
} : null;

const arrayProblemSolver = arr => arr.map(obj => getObject(arr, obj));

const array = [
    { id: 'one', next: 'two', value: null },
    { id: 'two', next: 'three', value: null },
    { id: 'three', next: null, value: null },
];

console.log(arrayProblemSolver(array));