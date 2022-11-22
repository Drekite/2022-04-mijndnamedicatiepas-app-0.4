# Coding Standards
This file contains the coding standards the team conforms to.
This implies variable naming, brace placement, avoided language features, function and line sizes, code documentation and unit test coverage.

## Language
The language used in comments and variable naming is in English. Content of texts used in the application is in the language preferred by the client, in this case, Dutch.

## Variable naming
We will be using a "myVariable" format for naming variables, functions and classes.
Constants are in all CAPITAL letters.
Variables are defined with ```let``` and constants with ```const```.

## Indentation
We will be using 2 spaces per standard indentation.

## Brace placement
We will be placing braces on the same line, if possible.

### If statements
For ```if``` statements where there are multiple lines are present, use
```react
if (statement) {
  line 1
  line 2
}
else if (statement) {
  line 3
  line 4
}
else {
  line 5
  line 6
}
```

For ```if``` statements where a single line is present, use
```react
if (statement)
  line 1
else if (statement)
  line 2
else
  line 3
```

### Loops
For ```for``` and ```while``` loops that consist of a single line, use the same format as a single-line ```if``` statement.
For ```for``` and ```while``` loops that consist of a multiple lines, use the same format as a multi-line ```if``` statement.

### Data structures
For lists and dictionaries that exceed the maximum line size and improve readability, use
```react
const lst = [
    'one',
    'two',
    'three',
  ];
```

## Avoided features (per language)
Functions are not defined with the property of "default export". Instead, these functions will be listed at the bottom of the file:
```react
/**
 * [function description].
 * @function [function name]
 * @param  {[type]} [var1]  [parameter description]
 * @param  {[type]} [var2]  [parameter description]
 * @return {[type]}         [return description]
 */
function [function name] (param1, param2) {
    return param1 + param2;
}

...

module.exports = {
  [function name]
}

export default [function name];
```

Variable declarations with ```var``` will be avoided.

## Maximum size of a function and line
The maximum size of our functions will be 30 lines. Each line does not contain more than 75 characters. We will be using else statements in the form of an error clause: none of the previous if statements sufficed and thus an error is raised.

## Code documentation
### Variables
Each variable is named in such way that it is clearly understood by the reader what its purpose is. If this is not possible, the variable is explained by an additional comment after (but on the same line) the declaration. Variable naming is concise, short and to the point.

### Functions
Each function is named in such way that it is clearly understood by the reader what its purpose is. Function naming is concise, short and to the point. Furthermore, the format of the function declaration is as follows:
```react
/**
 * [function description].
 * @function [function name]
 * @param  {[type]} [var1]  [parameter description]
 * @param  {[type]} [var2]  [parameter description]
 * @return {[type]}         [return description]
 */
function [function name] (param1, param2) {
    return param1 + param2;
}
```

### Classes
Each class is named in such way that it is clearly understood by the reader what its purpose is. Class naming is concise, short and to the point. Furthermore, the format of the class declaration is as follows:
```react
/**
 * [class description]
 * @class [class name]
 * @memberOf module:[modules]
 */
class [class name] ... {
```

### Documentation
Each file is marked at the top with a documentation about the overal information of the file. This contains the name, the contributors, compiler, the version used and a small description of what the file contains.
```react
/**
  * [FILE NAME]
  * Contributors: 
  * Description:
  */
```

### File names
Files are named with a capatalized first letter, and capatalized letters of each following word. Examples are: App.js, FileReader.js, etc. 

### Folder names
Folder names are in lower case letters. Examples are: src, assets, etc.

### Style sheets
We will make a seperate file(s) for style sheets. This also prevents double code as well as a well organized structured code.

### TO DO's
TO DO's have to be properly marked with a comment. TO DO's can be kept in a pull request to the branch of the current sprint, as long as it is clear it will be resolved in said sprint. 

## Format commit messages
The format of a commit message must be concise, short and to the point. Preferably use keywords such as 'added', 'removed', 'changed' and 'fixed'. For elaborate commits, refer to issue numbers on GitHub.

## Unit test coverage
Unittests were written for the feature.
We aim to get a unit test coverage of 80% (preferably 80+%).
