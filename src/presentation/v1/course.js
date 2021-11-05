import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.sendStatus(200);
});

router.get('/:id', (request, response) => {
    response.sendStatus(200);
});

router.post('/', (request, response) => {
    response.sendStatus(201);
});

router.patch('/:id', (request, response) => {
    response.sendStatus(201);
});

router.delete('/:id', (request, response) => {
    response.sendStatus(204);
});

export default router;
