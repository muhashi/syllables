import { dictionary } from 'cmu-pronouncing-dictionary'
import extractWords from 'extractwords';


export default function syllables(input) {
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof input}`);
    }

    const words = extractWords(input, { lowercase: true });
    let syllables = 0;

    for (let word of words) {
        const pronounciation = dictionary[word] ?? '';
        const stresses = pronounciation.match(/[0-2]/g) ?? [];
        syllables += stresses.length;
    }

    return syllables;
}
