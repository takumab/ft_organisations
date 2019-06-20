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

router.get('/organisations', async (req, res) => {
  try {
    const organisations = await Organisation.find({});

    res.status(200).json(organisations);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/organisations/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const organisation = await Organisation.findById(_id);

    if (!organisation) {
      return res.status(404).json({ error: 'Organisation does not exist' });
    }

    res.status(200).json(organisation);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch('/organisations/:id', async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'year', 'revenue'];

  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates!' });
  }

  try {
    const organisation = await Organisation.findById(_id);

    updates.forEach(update => (organisation[update] = req.body[update]));

    await organisation.save();

    if (!organisation) {
      return res.status(404).json({ error: 'Organisation does not exist' });
    }

    res.status(204).json(organisation);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/organisations/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const organisation = await Organisation.findByIdAndDelete(_id);

    if (!organisation) {
      return res.status(404).json({ error: 'Unable to delete organisation' });
    }

    res.json(organisation);
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;
