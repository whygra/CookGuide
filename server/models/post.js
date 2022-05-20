import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title: String,
    timeStart: {
        type: Number,
        min: 0,
        default: 0
    },
    timeEnd: {
        type: Number,
        min: 1,
        default: 5
    }
})
const componentSchema = mongoose.Schema({
    title: String,
    quantity: {
        type: Number,
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
    comps: [componentSchema],
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