import mongoose, {Schema, Document} from 'mongoose';
import validator from 'validator';

export interface IUser extends Document {
    email: string;
    fullname: string;
    password: string;
    confirmed: Boolean;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: "Fullname is required",
        validate: {
            validator: validator.isEmail,
            message: "Invalid email"
        },
        unique: true
    },
    avatar: String,
    fullname: {
        type: String,
        required: "Fullname is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirm_hash: String,
    last_seen: Date
}, {
    timestamps: true
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel