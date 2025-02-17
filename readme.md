# syllables ![](https://badgen.net/npm/dt/syllables)

> Count syllables in text using a dictionary

Counts the number of syllables in given text using the [CMU Pronouncing Dictionary](https://www.npmjs.com/package/@lunarisapp/cmudict), which contains over 134,000 words. This has the benefit of being much more accurate than algorithmic methods, but can fall short on less common words. Unknown words are provided a syllable count of 0.

Alternatively, a fallback function can be used in the case a word is not in the dictionary. A function such as the [npm package that counts syllables algorithmically](https://www.npmjs.com/package/syllable) can be passed as an option.

## Install

```sh
npm install syllables
```

## Usage

```js
import syllables from 'syllables';

syllables('Hello!');
//=> 2

syllables('Language is an amazing thing, really.');
//=> 10

syllables("What's an asjhaiuhaiajsos?");
//=> 2

syllables("What's an abcd?", { fallbackSyllablesFunction: (word) => word.length });
//=> 6
```

## API

### syllables(input, options?)

#### input

Type: `string`

Text to count syllables of. May include punctuation and contain any case.

#### options

Type: `object`

##### fallbackSyllablesFunction

Type: `(word: string) => number`\
Default: `undefined`

Fallback function used to calculate the syllable count of a word if the word is not in the dictionary. Must take a word as an input and return a number representing the number of syllables.

The function will be passed a lowercased word stripped of punctuation, but still includes contractions (such as `don't`).
