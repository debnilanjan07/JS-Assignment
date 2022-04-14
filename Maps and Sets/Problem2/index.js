/*"Problem:2
You are given a string (STR) of length N, you have to print the count 
of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1"*/


let str = "abcadeecfb";
let a = str.split("");
let newMap = new Map();

for (let i = 0; i < a.length; i++) {
    let count = 1;
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            count++;
            a.splice(j, 1);
            j--;
        }
    }
    newMap.set(a[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}