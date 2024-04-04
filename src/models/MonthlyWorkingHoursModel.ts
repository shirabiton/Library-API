import mongoose, { Schema, Document } from 'mongoose';
import { Employee } from './EmployeeModel';

export interface MonthlyWorkingHours extends Document {
    id: number;
    employee: Employee;
    month: number;
    year: number;
    requiredHoursPerMonth: number;
    hoursPerMonth: number;
}

const MonthlyWorkingHoursSchema: Schema = new Schema({
    id: { type: Number, required: true },
    employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    requiredHoursPerMonth: { type: Number, required: true },
    hoursPerMonth: { type: Number, required: true }
});

export default mongoose.model<MonthlyWorkingHours>('MonthlyWorkingHours', MonthlyWorkingHoursSchema);
