import express from 'express';
import * as EmployeeService from '../services/EmployeeService';

const router = express.Router();

router.post('/', EmployeeService.createEmployee);
router.get('/', EmployeeService.getAllEmployees);
router.get('/:id', EmployeeService.getEmployeeById);
router.put('/:id', EmployeeService.updateEmployeeById);
router.delete('/:id', EmployeeService.deleteEmployeeById);

export default router;
