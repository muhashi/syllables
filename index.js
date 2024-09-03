import { dictionary } from 'cmu-pronouncing-dictionary';
import extractWords from 'extractwords';


export default function syllables(input, { fallbackSyllablesFunction = null } = {}) {
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof input}`);
    }

    if (typeof fallbackSyllablesFunction !== 'function') {
        fallbackSyllablesFunction = null;
    }

    const words = extractWords(input, { lowercase: true });
    let syllables = 0;

    for (let word of words) {
        const pronounciation = dictionary[word] ?? '';

        if (pronounciation) {
            const stresses = pronounciation.match(/[0-2]/g) ?? [];
            syllables += stresses.length;
        } else if (fallbackSyllablesFunction) {
            const fallbackSyllablesCount = fallbackSyllablesFunction(word);
            const fallbackSyllablesReturnValid = typeof fallbackSyllablesCount === 'number' && fallbackSyllablesCount && fallbackSyllablesCount > 0;

            if (fallbackSyllablesReturnValid) {
                syllables += fallbackSyllablesCount;
            }
        }
    }

    return syllables;
}
