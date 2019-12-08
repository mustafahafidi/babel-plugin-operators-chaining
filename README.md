# babel-plugin-operators-chaining

For transpiling chained arithmetic comparison operators to normal logical expressions (as in python).

## Example

**In**

```js
if (4 <= a < 10) {
  //something
}
```

**Out**

```js
if (4 <= a && a < 10) {
  //something
}
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
