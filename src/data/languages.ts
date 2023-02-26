// eslint-disable-next-line import/no-anonymous-default-export
type Language = {
  name: string;
  link: string;
};

type Languages = Language[];

const languages: Languages = [
  {
    name: 'C#',
    link: 'https://github.com/organisationsnummer/csharp'
  },
  {
    name: 'Dart',
    link: 'https://github.com/organisationsnummer/dart'
  },
  {
    name: 'Go',
    link: 'https://github.com/organisationsnummer/go'
  },
  {
    name: 'Java',
    link: 'https://github.com/organisationsnummer/java'
  },
  {
    name: 'JavaScript',
    link: 'https://github.com/organisationsnummer/js'
  },
  {
    name: 'PHP',
    link: 'https://github.com/organisationsnummer/php'
  },
  {
    name: 'Rust',
    link: 'https://github.com/organisationsnummer/rust'
  }
];

export default languages;
