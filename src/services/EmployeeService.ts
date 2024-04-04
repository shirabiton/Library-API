import { Request, Response } from 'express';
import EmployeeModel, { Employee } from '../models/EmployeeModel';

// Create an employee
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all employees
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read employees by name
export const getEmployeesByName = async (req: Request, res: Response) => {
  try {
    const employeeName = req.params.employeeName;
    const employees: Employee[] = await EmployeeModel.find({ 'employee._name': employeeName });
    if (!employees.length) {
      return res.status(404).json({ message: 'No employees were found with this name' });
    }
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read employees by rank
export const getEmployeesByRank = async (req: Request, res: Response) => {
  try {
    const rankValue = req.params.rank;
    const employees: Employee[] = await EmployeeModel.find({ rank: rankValue });
    if (!employees.length) {
      return res.status(404).json({ message: 'No employees were found in this rank' });
    }
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read employees by city
export const getEmployeesByCity = async (req: Request, res: Response) => {
  try {
    const cityValue = req.params.city;
    const employees: Employee[] = await EmployeeModel.find({ city: cityValue });
    if (!employees.length) {
      return res.status(404).json({ message: 'No employees were found in this city' });
    }
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update employee by ID
export const updateEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete employee by ID
export const deleteEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



