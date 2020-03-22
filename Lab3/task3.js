const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20
};

function isEquivalent(first, second) {
    if (first === second) {
        return true;
    }
    for(let field in first) {
        if(second[field] !== first[field]) {
            return false;
        }
    }
    return true;
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false