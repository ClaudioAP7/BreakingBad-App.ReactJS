const base_url = 'https://www.breakingbadapi.com/api/';
const characters = 'characters';
const quoteRandom = 'quote/random';
const counterDeath = 'death-count';

export const charactersGet = () => `${base_url}${characters}`
export const quoteRandomGet = () => `${base_url}${quoteRandom}`
export const counterDeathsGet = () => `${base_url}${counterDeath}`