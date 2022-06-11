export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if ((typeof name === 'string') && (name.length > 1) && (name.length < 11)) {
      this.name = name;
      this.type = type;
      this.health = health || 100;
      this.level = level || 1;
      this.attack = attack;
      this.defence = defence;
    } else {
      throw new Error('Данные некорректны');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень');
    } else {
      this.level += 1;
      this.attack *= (1.2);
      this.defence *= (1.2);
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowerman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = type || 'Bowerman';
    this.attack = attack || 25;
    this.defence = defence || 25;
  }

  levelUp() {
    super.levelUp();
  }

  damage(points) {
    super.damage(points);
  }
}

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = type || 'Swordsman';
    this.attack = attack || 40;
    this.defence = defence || 10;
  }
}

export class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = type || 'Magician';
    this.attack = attack || 10;
    this.defence = defence || 40;
  }
}

export class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = type || 'Daemon';
    this.attack = attack || 10;
    this.defence = defence || 40;
  }
}

export class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = type || 'Undead';
    this.attack = attack || 25;
    this.defence = defence || 25;
  }
}

export class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = type || 'Zombie';
    this.attack = attack || 40;
    this.defence = defence || 10;
  }
}
