import extractWords from 'extractwords';
import cmudict from "@lunarisapp/cmudict";

const cmuDict = cmudict.dict();

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
        const pronunciation = cmuDict[word]?.[0] ?? [];

        if (pronunciation.length) {
            const stresses = pronunciation.filter((phoneme) => /[0-2]/.test(phoneme));
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
