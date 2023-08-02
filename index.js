import express from 'express';
import {addGreeting, getGreetings} from './db.js';

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4011;

//https://localhost:3008/api/greetings
// GET ALL THE GREETINGS

// get all the greetings

app.get('/api/greetings', async(req, res) =>
{
    const greetings = await getGreetings();
    console.log(greetings);
    res.json({
        greetings
    })
})


//Create a route to add a greeting
app.post('/api/greetings', async function(req, res) {
    const greeting = req.body.greeting;
    const language = req.body.language;
    await addGreeting(language, greeting)
    res.json({
        status : "success",
        message: `Added a greeting for ${language}`
    });
})
app.listen(PORT, () => console.log(`started on port: ${PORT}`));










