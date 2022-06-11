import
{
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

test('Создание объекта со свойствами', () => {
  const bowerman = new Bowerman('Breadly');

  expect(bowerman).toEqual({
    name: 'Breadly',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });

  expect(bowerman.levelUp()).toEqual({
    name: 'Breadly',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });

  expect(bowerman.damage(4)).toEqual({
    name: 'Breadly',
    type: 'Bowerman',
    health: 97,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Повышение уровня при нулевом здоровье', () => {
  const bowerman = new Bowerman('Breadly', 'Bowerman', 0);

  expect(bowerman.levelUp()).toThrowError(new Error('Нельзя повысить уровень'));
});

test('Создание объекта со свойствами', () => {
  const swordsman = new Swordsman('Chris');
  expect(swordsman).toEqual({
    name: 'Chris',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Создание обекта со свойствами', () => {
  const magician = new Magician('Marlin');
  expect(magician).toEqual({
    name: 'Marlin',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание объекта со свойствами', () => {
  const daemon = new Daemon('Sandy');
  expect(daemon).toEqual({
    name: 'Sandy',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание объекта со свойствами', () => {
  const undead = new Undead('Willy');
  expect(undead).toEqual({
    name: 'Willy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Создание объекта со свойствами', () => {
  const zombie = new Zombie('Ray');
  expect(zombie).toEqual({
    name: 'Ray',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Проверка корректности имени', () => {
  const bowerman = new Bowerman('K');
  expect(bowerman).toTHrowError(new Error('Данные некорректны'));
});
