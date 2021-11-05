import express from 'express';
import health from './health';
import courses from './courses';

const router = express.Router();

router.use('/courses', courses);
router.use('/health', health);

export default router;
