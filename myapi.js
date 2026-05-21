
const e1 = require('express');

const app = e1();

app.get('/view', (req, res) => {
    res.send('INSIDE VIEWS API...');
});

app.post('/add', (req, res) => {
    res.send('INSIDE ADD API...');
});

app.put('/update', (req, res) => {
    res.send('INSIDE UPDATE API...');
});

app.delete('/delete', (req, res) => {
    res.send('INSIDE DELETE API...');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});