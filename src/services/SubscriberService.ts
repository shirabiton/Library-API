import { Request, Response } from 'express';
import SubscriberModel, { Subscriber } from '../models/SubscriberModel';

// Create a Subscriber
export const createSubscriber = async (req: Request, res: Response) => {
  try {
    const subscriber = await SubscriberModel.create(req.body);
    res.status(201).json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all Subscribers
export const getAllSubscribers = async (req: Request, res: Response) => {
  try {
    const subscribers = await SubscriberModel.find();
    res.json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read Subscriber by ID
export const getSubscriberById = async (req: Request, res: Response) => {
  try {
    const subscriber = await SubscriberModel.findById(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read Subscribers by name
export const getSubscribersByName = async (req: Request, res: Response) => {
  try {
    const subscriberName = req.params.subscriberName;
    const subscribers: Subscriber[] = await SubscriberModel.find({ name: subscriberName });
    if (!subscribers.length) {
      return res.status(404).json({ message: 'Subscriber not found in this name' });
    }
    res.json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read Subscribers by city
export const getSubscribersByCity = async (req: Request, res: Response) => {
  try {
    const cityValue = req.params.city;
    const subscribers: Subscriber[] = await SubscriberModel.find({ city: cityValue });
    if (!subscribers.length) {
      return res.status(404).json({ message: 'Subscriber not found in this city' });
    }
    res.json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Subscriber by ID
export const updateSubscriberById = async (req: Request, res: Response) => {
  try {
    const subscriber = await SubscriberModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete Subscriber by ID
export const deleteSubscriberById = async (req: Request, res: Response) => {
  try {
    const subscriber = await SubscriberModel.findByIdAndDelete(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read debt by subscriber
export const getDebtBySubscriber = async (req: Request, res: Response) => {
  try {
    const subscriber = await SubscriberModel.findById(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    return subscriber.debt;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Payment of debt
export const paymentOfDebt = async (req: Request, res: Response) => {
  try {
    const subscriber = await SubscriberModel.findById(req.params.id);
    const payment: number = parseFloat(req.params.payment);
    
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    
    if (isNaN(payment) || payment <= 0) {
      return res.status(400).json({ message: 'Invalid payment amount' });
    }
    
    subscriber.debt -= payment;
    await subscriber.save();

    res.status(200).json(subscriber); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

