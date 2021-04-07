import express from 'express';
import sequelize from 'sequelize';

import db from './database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to 377_BEST_GROUP!');
});

/// /////////////////////////////////
/// ////Games Endpoints////////
/// /////////////////////////////////
router.route('/games')
  .get(async (req, res) =>  {
    try {
      const games = await db.games.findAll();
      const reply = games.length > 0 ? { data: games } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  }) 
  .post(async (req, res) => {

  })
  .put(async (req,res) => {

});

router.route('/genres')
  .get(async (req, res) =>  {
    try {
      const genres = await db.genres.findAll();
      const reply = genres.length > 0 ? { data: genres } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  }) 
  .post(async (req, res) => {

  })
  .put(async (req,res) => {

})

router.route('/platform')
  .get(async (req, res) =>  {
  
  }) 
  .post(async (req, res) => {

  })
  .put(async (req,res) => {

})

router.route('/developers')
  .get(async (req, res) =>  {
  
  }) 
  .post(async (req, res) => {

  })
  .put(async (req,res) => {

})

router.route('/publishers')
  .get(async (req, res) =>  {
  
  }) 
  .post(async (req, res) => {

  })
  .put(async (req,res) => {

})

router.route('/ratings')
  .get(async (req, res) =>  {
  
  }) 
  .post(async (req, res) => {

  })
  .put(async (req,res) => {

})

router.get('/games', async (req, res) => {
  try {
    const halls = await db.DiningHall.findAll();
    const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/dining/:hall_id', async (req, res) => {
  try {
    const hall = await db.DiningHall.findAll({
      where: {
        hall_id: req.params.hall_id
      }
    });

    res.json(hall);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/dining', async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/dining/:hall_id', async (req, res) => {
  try {
    await db.DiningHall.destroy({
      where: {
        hall_id: req.params.hall_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/dining', async (req, res) => {
  try {
    await db.DiningHall.update(
      {
        hall_name: req.body.hall_name,
        hall_location: req.body.hall_location
      },
      {
        where: {
          hall_id: req.body.hall_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Meals Endpoints//////////
/// /////////////////////////////////
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/meals/:meal_id', async (req, res) => {
  try {
    const meals = await db.Meals.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/meals', async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;