import mongoose , { Schema, Document } from "mongoose";

//  Interfaces describe the shape of objects.
export interface IUser extends Document {
    name: string;
    email: string;
}

// Schema defines the structure of the document, default values, validators, etc.
const schema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
},{
    timestamps: true
})

export const User = mongoose.model<IUser>("User", schema);