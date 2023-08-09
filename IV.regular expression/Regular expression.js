// regular expression: is patterns used to match character combinations in strings
// declare regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// regex.test(value) return boolean
// console.log(re1.test("hello world"));

// Anchor "^" "$"
// // "^": string start with specific word (^word)
// // "$": string end with specific word (word$)
/domain/.test("domain"); //true
/domain$/.test("my domain"); //true
/^domain/.test("domain expansion"); //true

// ranges []
// // [a-z]: lower case character from a to z
// // [A-Z]: upper case character from Z to Z
// // [0-9]: number from 0-9
// // [a-z0-9A-Z]: all the case above
// // if the string that transmission in include the character satisfy the condition it gonna return true
/[0-9]/.test("1412kid"); //true
/[A-Z]/.test("Domain"); //true
/[a-z]/.test("Domain"); // true
// // negative pattern
/[^a-z]/.test("domain"); // false: anchor of [a-z] mean all the string was input are not include a-z

// Meta characters

// \d: Find a digit ([0-9])
/\d/.test("123"); // true

// \D: Find a non-digit character ([a-z],[A-Z])
/\D/.test("123"); // false

// \w: Find a word character ([a-z0-9A-Z])
/\w/.test("_"); // true

// \W: 	Find a non-word character ([^a-z0-9A-Z])
/\w/.test("_"); // false

// \s: Find a whitespace character
/\s/.test(" "); // true

// \S:Find a non-whitespace character
/\S/.test(" "); // false

// \t: Find a tab character
// \n: Find a new line character
// .: Find a single character, except newline or line terminator
// [^]: find everything

// Quantifiers:
// // syntax: {n} {n,m} + ? *

const str1 = "Kaitou Kid 14121412";
console.log(str1.match(/\d/)); // ['1', index: 11, input: 'Kaitou Kid 1412', groups: undefined]

// // get four digit character
console.log(str1.match(/\d{4}/)[0]);

// // get from four to six character
console.log(str1.match(/\d{4,6}/)[0]);

// // get all character meet the conditon
console.log(str1.match(/\d+/)[0]);

// // '?':u' has or not in color

// // flag: g:global | i:case insensitive | m: multi lines | *: The n* quantifier matches any string that contains zero or more occurrences of n.
const str2 = "color or colour?";
console.log(str2.match(/colou?r/g));

const str3 = "123456";
console.log(str3.match(/\d*/g));

// Group '()'
/(\d{3})(\w+)/.test("123"); // false: after d{3} it has to have 1 or more character to return true
/(\d{3})?(\w+)/.test("123"); // true

// Escaping
// // \ / [ ] ( ) { } ? + * | . ^ $
// // for the program input it as a normal character use: \
/\?/.test('?')
/\*/.test('*')

// Boundaries
// // \b: Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
'domain expasion'.match(/\domain/g) // domain
'my name isSherlock'.match(/\Sherlock/g) // Sherlock

// replace method with regex

const str4= 'hello welcome to my hello'
console.log(str4.replace("hello","evondev")); // cannot replace all the "hello" word
str4.replace(/hello/g,"evondev") // replace all the "hello" word

"welcome 1234567".match(/\d+/g) // ["1234567"]

// website checking regex