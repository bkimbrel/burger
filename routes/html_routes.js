module.exports = (app, db)=> {
  app.get('/', (req, res)=>{
    db.burger.findAll().then((result)=> {
      res.render('index', {burgers: result});
    });
  });
};
