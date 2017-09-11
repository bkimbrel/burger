var path = require('path');

module.exports = (app, db)=> {
  app.get('/burgers', (req, res)=> {
    db.burger.findAll().then((result)=> {
      res.json(result);
    });
  });

  app.post('/burgers', (req, res)=> {
    db.burger.create(req.body).then((result)=> {
      res.json(result);
    });
  });

  app.delete('/burgers/:burgerId', (req, res)=> {
    db.burger.destroy({where: {id: req.params.burgerId}}).then((result)=> {
      res.json(result);
    });
  });

  app.put('/burgers', (req, res)=> {
    db.burger.update(req.body,{where: {id: req.body.id}}).then((result)=> {
      res.json(result);
    });
  });
}
