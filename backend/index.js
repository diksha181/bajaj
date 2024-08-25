const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        const user_id = "john_doe_17091999";
        const email = "john@xyz.com";
        const roll_number = "ABCD123";

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
        const lowercase_alphabets = alphabets.filter(ch => ch === ch.toLowerCase());
        const highest_lowercase_alphabet = lowercase_alphabets.length > 0 ? [Math.max(...lowercase_alphabets)] : [];

        const response = {
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highest_lowercase_alphabet
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ is_success: false, error: error.message });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});
