import mongoose, { Schema, Document } from 'mongoose';

enum Rank {
    Director = 'Director',
    Librarian = 'Librarian',
    Secretary = 'Secretary',
    Cleaner = 'Cleaner'
}

export enum City {
    TelAviv = 'Tel Aviv',
    Jerusalem = 'Jerusalem',
    BneiBrak = 'Bnei Brak',
    Netanya = 'Netanya',
    Elad = 'Elad',
    Herzliya = 'Herzliya',
    RamatGan = 'Ramat Gan',
    PetahTikva = 'Petah Tikva',
    Lod = 'Lod'
}


export interface Employee extends Document {
    id: number;
    name: string;
    rank: Rank;
    phone: string;
    email: string;
    address: string;
    city: City;
    isMonthlySalary: boolean;
    salary: number, // per hour or month
    jobStartDate: Date;
    jobTerminationDate: Date;
}

const EmployeeSchema: Schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    rank: { type: Number, enum: Object.values(Rank), required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    city: { type: Number, enum: Object.values(City), required: true },
    isMonthlySalary: { type: Boolean, required: true },
    salary: { type: Number, required: true },
    jobStartDate: { type: Date, required: true },
    jobTerminationDate: { type: Number },
});

export default mongoose.model<Employee>('Employee', EmployeeSchema);
