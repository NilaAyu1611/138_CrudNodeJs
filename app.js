const express = require('express');
const todoRoutes = require('./routes/todo.js');
const app = express();
const port = 3030;

app.use(express.json());            // fungsinya untuk mem-parsing request body yang dikirim dalam format JSON.

app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
