use.biblioteca

// cria a collection com 10 livros
db.biblioteca.insertMany([
  {name: 'O Pequeno Principe', Autor: 'Antoine de Saint-Exupéry', ano: 1943, emprestado: true},
  {name: 'Voo Noturno', Autor: 'Antoine de Saint-Exupéry', ano: 1931, emprestado: false},
  {name: 'Terre des Hommes', Autor: 'Antoine de Saint-Exupéry', ano: 1939, emprestado: true},
  {name: 'O Codigo da Vinci', Autor: 'Dan Brown', ano: 2003, emprestado: false},
  {name: 'Anjos e Demonios', Autor: 'Dan Brown', ano: 2000, emprestado: false},
  {name: 'Moby Dick', Autor: 'Herman Melville', ano: 1851, emprestado: true},
  {name: 'Viagem ao Centro da Terra', Autor: 'Julio Verne', ano: 1864, emprestado: true},
  {name: 'Robin Hood', Autor: 'Howard Pyle', ano: 1883, emprestado: false},
  {name: 'Olhai os Lirios do Campo', Autor: 'Erico Verissimo', ano: 1938, emprestado: true},
]);
//1. Localiza todos livros
//db.biblioteca.find();

//2. Encontra os livros do Autor Julio Verne
//db.biblioteca.find({Autor: 'Julio Verne'});

//3. Encontra o mais velho 
//db.biblioteca.aggregate([{$sort: {ano: 1}}, {$limit:1}]);

//4. Deleta o mais velho
//db.biblioteca.findOneAndDelete({}, {sort: {ano: 1}})

//5. Deleta todos livros de um unico autor
db.biblioteca.deleteMany({Autor: 'Antoine de Saint-Exupéry'});
db.biblioteca.find();