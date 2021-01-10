import fromPairs from 'lodash/fromPairs';

import en from './en/embed';
import de from './de/embed';
import pl from './pl/embed';
import ru from './ru/embed';

const localePairs = [
  ['en', en],
  ['de', de],
  ['ru', ru],
  ['pl', pl],
];

export const languages = localePairs.map((locale) => locale[0]);

export const embedLocales = fromPairs(localePairs);
