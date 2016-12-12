# profanity-censor

A very simply profanity filter. Replaces profanity with asterisk. The module currently uses the Google list of bad words as default. Adding/replacing the dictionary coming soon.

## Installation

```
npm install --save simply-profanity-filter
```

## Usage

```javascript
var profanityFilter = require('simply-profanity-filter');

var filtered_string = profanityFilter.filter("Some bad words, bitch! ");
console.log(filtered_string); // "Some bad words, \*\*\*\*\*!"
```