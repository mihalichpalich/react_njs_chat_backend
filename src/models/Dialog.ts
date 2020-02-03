import mongoose, {Schema, Document} from 'mongoose';

export interface IDialog extends Document {
    email: string;
    fullname: string;
    password: string;
    confirmed: Boolean;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
};

const DialogSchema = new Schema(
    {
        partner: {type: Schema.Types.ObjectId, ref: 'User'},
        author: {type: Schema.Types.ObjectId, ref: 'User'},
        lastMessage: {type: Schema.Types.ObjectId, ref: 'Message'}
    }, {
        timestamps: true
    }
);

new DialogModel({
    partner: partner_id,
    author: author_id,
    lastMessage: message_id
})

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel