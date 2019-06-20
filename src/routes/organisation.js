import express from 'express';
import Organisation from '../models/organisation';

const router = express.Router();

router.post('/organisations', async (req, res) => {
  const organisation = new Organisation(req.body);
  try {
    await organisation.save();
    res.status(201).json(organisation);
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;
