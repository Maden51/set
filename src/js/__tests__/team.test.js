import Team from '../team';

const char1 = { character: 'character1' };
const char2 = { character: 'character2' };

test('Должен вызывать ошибку при попытке добавить того же персонажа', () => {
  const teamA = new Team();
  expect(() => {
    teamA.add(char1);
    teamA.add(char1);
  }).toThrow('Такой персонаж уже есть в команде');
});

test('преобразовние в массив', () => {
  const teamA = new Team();
  teamA.add(char2);
  teamA.add(char1);
  expect(teamA.toArray()).toEqual([char2, char1]);
});

test('добавление сразу всех персонажей без ошибки', () => {
  const teamA = new Team();
  expect(() => {
    teamA.addAll([char1, char2]);
  }).not.toThrow();
});

test('добавление всех персонажей без дубликатов', () => {
  const teamA = new Team();
  const teamAAll = teamA.addAll(char1, char2, char1, char2);
  expect(teamAAll.toArray()).toEqual([char1, char2]);
});
