const db = require('./')

// Animals and their speeds in mm/s
const sloSeed = [
  {
    animal: 'Three-Toed Sloth',
    speed: 30.48
  },
  {
    animal: 'Garden Snail',
    speed: 10.00
  },
  {
    animal: 'Starfish',
    speed: 16.67
  },
  {
    animal: 'Giant Tortoise',
    speed: 536.45
  },
  {
    animal: 'Banana Slug',
    speed: 0.02
  }
];

sloSeed.forEach((el) => {
  db.query(`INSERT INTO slonimals (animal, speed_mm_per_s) VALUES ('${el.animal}', ${el.speed})`);
});

db.end();
