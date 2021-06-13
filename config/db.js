const mongoose = require('mongoose');

MONGO_URI ='mongodb+srv://Deep9521:@Deependra9521@cluster0.w0a1o.mongodb.net/expense-tracker?retryWrites=true&w=majority';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
        })
        console.log('MongoDB Connected');
    }
    catch(err)
    {
        console.log(`Error:${err.message}`)
    }
}

module.exports=connectDB;