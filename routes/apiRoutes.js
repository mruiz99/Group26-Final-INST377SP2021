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
  .delete(async (req, res) => {
    try {
      await db.games.destroy({
        where: {
          game_name: req.params.game_name
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

/// /////////////////////////////////
/// ////Genres Endpoints////////
/// /////////////////////////////////
router.route('/genres')
  .get(async (req, res) =>  {
    try {
      const genre = await db.genres.findAll();
      const reply = genre.length > 0 ? { data: genre } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  /// /////////////////////////////////
/// ////Genre ID Endpoint////////
/// /////////////////////////////////
router.route('/genres/:genre_id')
  .get(async (req, res) =>  {
    try {
      const genres = await db.genres.findAll({
        where: {
          genre_id: req.params.genre_id  // to test, add = 1
        }
      });
      res.json(genres);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

/// /////////////////////////////////
/// ////Platform Endpoints////////
/// /////////////////////////////////
router.route('/platform')
  .get(async (req, res) =>  {
    try {
      const platform = await db.platform.findAll();
      const reply = platform.length > 0 ? { data: platform } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  }) 
  .post(async (req, res) => {
    const platform = await db.platform.findAll();
    const currentId = (await platform.length)+1;
    try {
      const newPlatform = await db.platform.create({
        platform_id: currentId,
        platform_name: req.body.platform_name
      });
      res.json(newPlatform);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
});

/// /////////////////////////////////
/// ////Developer Endpoints////////
/// /////////////////////////////////
router.route('/developers')
  .get(async (req, res) =>  {
    try {
      const developer = await db.developers.findAll();
      const reply = developer.length > 0 ? { data: developer } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  }) 
  .put(async (req,res) => {
    try {
      await db.developers.update(
        {
          developer_name: req.body.developer_name
        },
        {
          where: {
            developer_team_id: req.body.developer_team_id
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
/// ////Publisher Endpoints////////
/// /////////////////////////////////
router.route('/publishers')
  .get(async (req, res) =>  {
    try {
      const publisher = await db.publishers.findAll();
      const reply = publisher.length > 0 ? { data: publisher } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

export default router;