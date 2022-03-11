import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title: String,
    startTime: {
        type: Date,
        default: new Date("1970-01-01T00:00:00")
    },
    endTime: {
        type: Date,
        default: new Date("1970-01-01T00:00:00")
    }
})
const ingredientSchema = mongoose.Schema({
    title: String,
    quantity: {
        type: mongoose.Decimal128,
        default: 0
    },
})
const post = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    ingredients: [ingredientSchema],
    tasks: [taskSchema],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', post)

export default Post