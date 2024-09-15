export type Options = {
    /**
    Fallback function used to calculate the syllable count of a word if the word is not in the dictionary. Must take a word as an input and return a number representing the number of syllables.

    The function will be passed a lowercased word stripped of punctuation, but still includes contractions (such as `don't`).

    @default undefined
    */
    fallbackSyllablesFunction?: (word: string) => number;
};

/**
Counts the number of syllables in given text using the CMU Pronouncing Dictionary. Unknown words are provided a syllable count of 0.

Alternatively, a fallback function can be used in the case a word is not in the dictionary.

@param input - Text to count syllables of. May include punctuation and contain any case.
@returns Number of syllables in text. Unknown words are provided a syllable count of 0 by default.

@example
```
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
*/
export default function syllables(input: string, options?: Options): number;
