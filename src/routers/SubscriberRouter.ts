import express from 'express';
import * as SubscriberService from '../services/SubscriberService';

const router = express.Router();

router.post('/', SubscriberService.createSubscriber);
router.get('/',  SubscriberService.getAllSubscribers);
router.get('/:id', SubscriberService.getSubscriberById);
router.put('/:id', SubscriberService.updateSubscriberById);
router.delete('/:id', SubscriberService.deleteSubscriberById);

export default router;
