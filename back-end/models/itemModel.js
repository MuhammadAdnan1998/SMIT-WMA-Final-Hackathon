import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, default: 0 },
    category: { type: String, default: "General" }
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);
