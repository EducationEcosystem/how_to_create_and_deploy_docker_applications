const mongoose = require('mongoose')

exports.start = async function() {
  const url = process.env.MONGO_URL ||
    'mongodb://localhost:27017/helloworld'

  await mongoose.connect(url, {
    useNewUrlParser: true
  })

  console.log('Connected')
}
