var isPalindrome = function(s) {
    const newString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return newString === newString.split('').reverse().join('');
};

// Usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("race a car")); 

