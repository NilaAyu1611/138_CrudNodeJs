const express = require('express');
const router = express.Router();

let todos = [
    {
    id: 1, task: 'Belajar Node.js', completed: false
},

{
    id: 2, task: 'Membuat API', completed: false
},

];

// Endpoint untuk mendapatakan data todos ===> BIKIN ROUTER UNYTUK MENGAMBIL DATA DIATAS
router.get('/', (req, res) => {res.json(todos);});


module.exports = router;