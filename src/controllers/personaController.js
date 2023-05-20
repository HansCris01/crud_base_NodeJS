const controller = {};

//metodos

//metodo listar
controller.list = (req, res) => {
 req.getConnection((err, conn) => {
    conn.query('select * from persona', (err, persona) => {
    if (err) {
        res.json(err);
    }
   
    res.render('persona', {
      data: persona
    });
 });
});
};

//metodo agregar

controller.save = (req, res) => {
  const data = req.body;
 
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO persona set ?', [data], (err, persona) => {
     console.log(persona);
     res.redirect('/');
    });
  })
};

//metodo delete 

controller.delete = (req, res) => {
 const { id } = req.params;

 req.getConnection((err, conn) => {
  conn.query('delete from persona where id = ?', [id], (err, rows) => {
    res.redirect('/');
  });
 })
};

//metodo actualizar

controller.edit = (req, res) =>{
 const { id } = req.params;
 req.getConnection((err, conn) => {
  conn.query('select * from persona where id = ?', [id], (err, persona) => {
    res.render('persona_edit', {
        data: persona[0]
    });
  });
 });
};

//Editar segunda parte

controller.update = (req, res) => {
  const { id } = req.params;
  const newPersona = req.body;
  req.getConnection((err, conn) => {
   conn.query('update persona set ? where id = ?', [newPersona, id], (err, rows) => {
    res.redirect('/');
   });
  });
};


module.exports = controller;