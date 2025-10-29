import express from 'express';
import { getAllHospitals, searchHospitals } from '../controllers/hospitalController.js';

const router = express.Router();

router.get('/', getAllHospitals);
router.get('/search', searchHospitals);

export default router;

