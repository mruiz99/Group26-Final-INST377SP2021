import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

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

  const eightiesTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(global_sales),2) AS global_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 1985 AND date_published < 1990 GROUP BY genre_name ORDER BY genre_name;'
  const ninetiesTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(global_sales),2) AS global_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 1990 AND date_published < 2000 GROUP BY genre_name ORDER BY genre_name;'
  const twothouTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(global_sales),2) AS global_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2000 AND date_published < 2010 GROUP BY genre_name ORDER BY genre_name;'
  const twoTenTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(global_sales),2) AS global_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2010 AND date_published < 2020 GROUP BY genre_name ORDER BY genre_name;'
  
  router.route('/eighties')
  .get(async (req, res) =>  {
    try {
      const eighties = await db.sequelizeDB.query(eightiesTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(eighties);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.route('/nineties')
  .get(async (req, res) =>  {
    try {
      const nineties = await db.sequelizeDB.query(ninetiesTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(nineties);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.route('/twothou')
  .get(async (req, res) =>  {
    try {
      const twoThou = await db.sequelizeDB.query(twothouTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(twoThou);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.route('/twoten')
  .get(async (req, res) =>  {
    try {
      const twoten = await db.sequelizeDB.query(twoTenTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(twoten);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });


  const naEightiesTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 1985 AND date_published < 1990 GROUP BY genre_name ORDER BY na_sales DESC;'
  const naNinetiesTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 1990 AND date_published < 2000 GROUP BY genre_name ORDER BY na_sales DESC;'
  const naTwothouTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2000 AND date_published < 2010 GROUP BY genre_name ORDER BY na_sales DESC;'
  const naTwoTenTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2010 AND date_published < 2020 GROUP BY genre_name ORDER BY na_sales DESC;'
  
  router.route('/NAeighties')
  .get(async (req, res) =>  {
    try {
      const eighties = await db.sequelizeDB.query(naEightiesTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(eighties);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.route('/NAnineties')
  .get(async (req, res) =>  {
    try {
      const nineties = await db.sequelizeDB.query(naNinetiesTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(nineties);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.route('/NAtwothou')
  .get(async (req, res) =>  {
    try {
      const twoThou = await db.sequelizeDB.query(naTwothouTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(twoThou);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.route('/NAtwoten')
  .get(async (req, res) =>  {
    try {
      const twoten = await db.sequelizeDB.query(naTwoTenTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(twoten);
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