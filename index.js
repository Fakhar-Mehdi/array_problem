const getNestedObj = (arr, obj) => obj ? {
    id: obj.id,
    next: obj.next,
    value: obj.value || getNestedObj(arr, arr.find(e => e.id === obj.next)),
} : null;

const arrayProblemSolver = arr => arr.map(obj => getNestedObj(arr, obj));

const array = [
    { id: 'one', next: 'two', value: null },
    { id: 'two', next: 'three', value: null },
    { id: 'three', next: null, value: null },
];

console.log(JSON.stringify(arrayProblemSolver(array), null, 2));
