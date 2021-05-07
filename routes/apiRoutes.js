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
const allgames = "SELECT * FROM games ga JOIN genre g on ga.genre_id = g.genre_id;"
router.route('/games')
  .get(async (req, res) =>  {
    try {
      const games = await db.sequelizeDB.query(allgames, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(games);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  }); 
  
const naNinetiesTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 1990 AND date_published < 2000 GROUP BY genre_name ORDER BY na_sales DESC;'
const naTwothouTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2000 AND date_published < 2010 GROUP BY genre_name ORDER BY na_sales DESC;'
const naTwoTenTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(na_sales),2) AS na_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2010 AND date_published < 2020 GROUP BY genre_name ORDER BY na_sales DESC;'

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

const jpNinetiesTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(jp_sales),2) AS jp_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 1990 AND date_published < 2000 GROUP BY genre_name ORDER BY jp_sales DESC;'
const jpTwothouTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(jp_sales),2) AS jp_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2000 AND date_published < 2010 GROUP BY genre_name ORDER BY jp_sales DESC;'
const jpTwoTenTotal = 'SELECT date_published, ga.genre_id, ROUND(AVG(jp_sales),2) AS jp_sales, genre_name FROM games ga JOIN genre g ON ga.genre_id = g.genre_id WHERE date_published >= 2010 AND date_published < 2020 GROUP BY genre_name ORDER BY jp_sales DESC;'

router.route('/JPnineties')
  .get(async (req, res) =>  {
    try {
      const nineties = await db.sequelizeDB.query(jpNinetiesTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(nineties);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.route('/JPtwothou')
  .get(async (req, res) =>  {
    try {
      const twoThou = await db.sequelizeDB.query(jpTwothouTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(twoThou);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.route('/JPtwoten')
  .get(async (req, res) =>  {
    try {
      const twoten = await db.sequelizeDB.query(jpTwoTenTotal, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(twoten);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

/// /////////////////////////////////
/// ////Developer ID Endpoint////////
/// /////////////////////////////////
router.route('/developers/:developers_id')
  .get(async (req, res) =>  {
    try {
      const devID = await db.developers.findAll({
        where: {
          developer_team_id: req.params.developer_team_id  // to test, add = 1
        }
      });
      res.json(devID);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

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
      res.send('Sucessfully updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
})
.post(async (req, res) => {
  const developers = await db.developers.findAll();
  const currentId = (await developers.length)+1;
  try {
    const newDev = await db.developers.create({
      developer_team_id: currentId,
      developer_name: req.body.developer_name,
    });
    res.json(newDev);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
})
.delete(async (req, res) => {
  try {
    await db.developers.destroy({
      where: {
        developer_name: req.body.developer_name
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
})


export default router;