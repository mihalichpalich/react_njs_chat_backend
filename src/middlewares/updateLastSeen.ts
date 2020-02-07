import express from 'express';
import {UserModel} from "../models";

export default (_: express.Request, __: express.Response, next: express.NextFunction) => {
    UserModel.findOneAndUpdate(
        {_id: "5e35822b12747f25ec48470c"},
        {last_seen: new Date()},
        {new: true},
        () => {}
    );
    next();
}