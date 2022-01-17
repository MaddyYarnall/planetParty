import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    id: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual