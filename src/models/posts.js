import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    vehicle: {
      type: String,
      enum: ['car', 'motorbike', 'van'],
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    plateNumber: {
      type: String,
      require: true,
    },
    km: {
      type: Number,
      require: true,
    },
    carSeats: {
      type: Number,
      require: true,
    },
    fuel: {
      type: String,
      enum: ['electric', 'gas'],
    },
    gearBox: {
      type: String,
      enum: ['manual', 'automatic'],
    },
    doors: {
      type: String,
      enum: ['3', '5'],
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    createdAt: {
      type: Date,
      require: true,
      default: Date.now,
    },
    availableTimes: [
      {
        type: String,
        enum: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
      },
    ],
  },
  { collection: 'posts' }
)

const Post = mongoose.model('Post', PostSchema)

export default Post
