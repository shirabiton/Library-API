import mongoose, { Schema, Document } from 'mongoose';
import { City } from './EmployeeModel';

export interface Subscriber extends Document {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    city: City;
    debt: number;
}

const SubscriberSchema: Schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    city: { type: Number, enum: Object.values(City), required: true },
    debt: { type: Number, required: true },
});

export default mongoose.model<Subscriber>('Subscriber', SubscriberSchema);
