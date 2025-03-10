function isAlt(word){
    const vowels = new Set (['a','e','i','o','u'])
    str = str.toLowerCase()
    for (let i=0;i<str.length -1; i++){
        let isCurrentVowel = vowels.has(word[i]);
        let isNextVowel = vowels.has(word[i+1]);

        if(isCurrentVowel == isNextVowel){
            return false;   
        }
    }
    return true
}


// Task
// Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// Examples
// "amazon" --> true
// "apple" --> false
// "banana" --> true
// Note
// Arguments consist of only lowercase letters.