import { Request, Response } from 'express';
import MonthlyWorkingHoursModel from '../models/MonthlyWorkingHoursModel';
import EmployeeModel from '../models/EmployeeModel';

// Create a MonthlyWorkingHours
export const createMonthlyWorkingHours = async (req: Request, res: Response) => {
  try {
    const monthlyWorkingHours = await MonthlyWorkingHoursModel.create(req.body);
    res.status(201).json(monthlyWorkingHours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all MonthlyWorkingHourss
export const getAllMonthlyWorkingHourss = async (req: Request, res: Response) => {
  try {
    const monthlyWorkingHourss = await MonthlyWorkingHoursModel.find();
    res.json(monthlyWorkingHourss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read MonthlyWorkingHours by ID
export const getMonthlyWorkingHoursById = async (req: Request, res: Response) => {
  try {
    const monthlyWorkingHours = await MonthlyWorkingHoursModel.findById(req.params.id);
    if (!monthlyWorkingHours) {
      return res.status(404).json({ message: 'MonthlyWorkingHours not found' });
    }
    res.json(monthlyWorkingHours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update MonthlyWorkingHours by ID
export const updateMonthlyWorkingHoursById = async (req: Request, res: Response) => {
  try {
    const monthlyWorkingHours = await MonthlyWorkingHoursModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!monthlyWorkingHours) {
      return res.status(404).json({ message: 'MonthlyWorkingHours not found' });
    }
    res.json(monthlyWorkingHours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete MonthlyWorkingHours by ID
export const deleteMonthlyWorkingHoursById = async (req: Request, res: Response) => {
  try {
    const monthlyWorkingHours = await MonthlyWorkingHoursModel.findByIdAndDelete(req.params.id);
    if (!monthlyWorkingHours) {
      return res.status(404).json({ message: 'MonthlyWorkingHours not found' });
    }
    res.json({ message: 'MonthlyWorkingHours deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const calcFinalSalary = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    const monthlyWorkingHours = await MonthlyWorkingHoursModel.findOne({'employee._id': employee._id});
    
    if (!monthlyWorkingHours) {
      return res.status(404).json({ message: 'Monthly working hours not found' });
    }
    
    const finalSalary = monthlyWorkingHours.hoursPerMonth * employee.salary;
    res.json({ finalSalary, message: 'Final salary calculated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



