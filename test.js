import test from 'ava';
import syllables from './index.js';

test('Counts syllables in a word', t => {
    const count = syllables('hello');
    t.is(count, 2);
});

test('Counts syllables in a word with uppercase', t => {
    const count = syllables('Hello');
    t.is(count, 2);
});

test('Counts syllables in a sentence', t => {
    const count = syllables('Hi, how are you?');
    t.is(count, 4);
});

test('Handles non-dictionary words', t => {
    const count = syllables('Notawordinthedictionary');
    t.is(count, 0);
});

test('Handles made-up words', t => {
    const count = syllables('A made up word oapissjoa');
    t.is(count, 4);
});

test('Handles empty string', t => {
    const count = syllables('');
    t.is(count, 0);
});

test('Handles symbols and numbers', t => {
    const count = syllables('Symbols ,    ! *1@981 9');
    t.is(count, 2);
});

test('Counts syllables with contractions and apostrophes', t => {
    const count = syllables("i'm i isn't very cool");
    t.is(count, 7);
});
