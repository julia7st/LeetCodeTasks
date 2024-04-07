var containsDuplicate = function(nums) {
    const s = new Set();
    for (let num of nums) {
        if (s.has(num)) {
            return true;
        }
        s.add(num);
    }
    return false;
};

// Usage
console.log(containsDuplicate([1, 2, 3, 1])); 
console.log(containsDuplicate([1, 2, 3, 4])); 
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
