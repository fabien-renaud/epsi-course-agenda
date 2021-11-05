import express from 'express';
import health from './health';
import course from './course';

const router = express.Router();

router.use('/course', course);
router.use('/health', health);

export default router;
