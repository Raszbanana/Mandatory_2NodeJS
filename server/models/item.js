import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    }
})

let item = mongoose.model('Item', itemSchema)

export default item;