import express from 'express';
import * as MonthlyWorkingHoursService from '../services/MonthlyWorkingHoursService';

const router = express.Router();

router.post('/', MonthlyWorkingHoursService.createMonthlyWorkingHours);
router.get('/',  MonthlyWorkingHoursService.getAllMonthlyWorkingHourss);
router.get('/:id', MonthlyWorkingHoursService.getMonthlyWorkingHoursById);
router.put('/:id', MonthlyWorkingHoursService.updateMonthlyWorkingHoursById);
router.delete('/:id', MonthlyWorkingHoursService.deleteMonthlyWorkingHoursById);

export default router;
