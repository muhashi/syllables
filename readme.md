# syllables

> Count syllables in text using a dictionary

Counts the number of syllables in given text using the [CMU Pronouncing Dictionary](https://www.npmjs.com/package/cmu-pronouncing-dictionary), which contains over 134,000 words. This has the benefit of being much more accurate than algorithmic methods, but can fall short on less common words. Unknown words are provided a syllable count of 0.

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
```

## API

### syllables(input)

#### input

Type: `string`

Text to count syllables of. May include punctuation and contain any case.
