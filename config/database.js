const mongoose = require('mongoose')
mongoose.connect(
    process.env.MONGO_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(() => console.log('Conneted to database successfully'))
    .catch(error => console.log(error))