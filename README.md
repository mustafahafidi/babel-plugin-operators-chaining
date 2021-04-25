# babel-plugin-operators-chaining

For transpiling chained arithmetic comparison operators to normal logical expressions (as in python).

**Important: this is an experimental plugin for an enclosed project. Be aware that it modifies the semantics. See the example below.**

## Example

**In**

```js
if(0<=a<5) {
  // something
}
console.log(2!=1===1==1<2);             // false before plugin
console.log(2 > 3 < 4 == 4);            // false before plugin
console.log(2 <= 4 === true);           // true  before plugin
```
transpiles to

**Out**

```js
if (0 <= a && a < 5) {
  // something
}
console.log(2 != 1 && 1 === 1 && 1 == 1 && 1 < 2); // prints true
console.log(2 > 3 && 3 < 4 && 4 == 4);             // prints false
console.log(2 <= 4 && 4 === true);                 // prints false
```
## Installation

```sh
$ npm install babel-plugin-operators-chaining
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["operators-chaining"]
}
```

### Via CLI

```sh
$ babel --plugins operators-chaining script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["operators-chaining"]
});
```
