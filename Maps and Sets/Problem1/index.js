/*"Problem:1
You are given a string (STR) of length N, consisting of only the lower case
 English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef"*/

let str = "abcadeecfb";
let newset = new Set();
for (let i = 0; i < str.length; i++) {
    newset.add(str[i]);
}
let str2 = "";
for (let val of newset.values()) {
    str2 += val;
}
console.log(str2);