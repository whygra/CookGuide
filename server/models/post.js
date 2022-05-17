import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title: String,
    startTime: {
        type: Number,
        min: 0,
        default: 0
    },
    endTime: {
        type: Number,
        min: 1,
        default: 5
    }
})
const componentSchema = mongoose.Schema({
    title: String,
    quantity: {
        type: mongoose.Decimal128,
        min: 1,
        default: 1
    },
})
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    img: String,
    components: [componentSchema],
    tasks: [taskSchema],
    likeCount: {
        type: Number,
        min: 0,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    time: {
        type: Number,
        default: 30
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post