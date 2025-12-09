import mongoose, { Schema } from "mongoose";
import type { UserRole } from "@/types";

export interface UserDocument {
    _id: string;
    name: string;
    email: string;
    hashedPassword: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        hashedPassword: { type: String, required: true },
        role: { type: String, enum: ["client", "agent"], required: true },
    },
    { timestamps: true }
);

export const UserModel =
    mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);

