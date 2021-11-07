import express from 'express';
import {CourseController} from '../../controllers';

const router = express.Router();

router.get('/', (request, response, next) => {
    CourseController.findCourses()
        .then((courses) => {
            if (!courses) response.sendStatus(404);
            response.status(200).send(courses);
        })
        .catch((error) => {
            response.status(500).send(error);
        })
        .finally(() => next());
});

router.get('/:id', (request, response, next) => {
    const {id} = request.params;
    CourseController.findCourseById(id)
        .then((course) => {
            if (!course) response.sendStatus(404);
            response.status(200).send(course);
        })
        .catch((error) => {
            response.status(500).send(error);
        })
        .finally(() => next());
});

router.post('/', (request, response, next) => {
    const course = request.body;
    CourseController.createCourse(course)
        .then(() => {
            response.sendStatus(201);
        })
        .catch((error) => {
            response.status(500).send(error);
        })
        .finally(() => next());
});

router.patch('/:id', (request, response, next) => {
    const {id} = request.params;
    const course = request.body;
    CourseController.updateCourse(id, course)
        .then(() => {
            response.sendStatus(204);
        })
        .catch((error) => {
            response.status(500).send(error);
        })
        .finally(() => next());
});

router.delete('/:id', (request, response, next) => {
    const {id} = request.params;
    CourseController.updateCourse(id)
        .then(() => {
            response.sendStatus(204);
        })
        .catch((error) => {
            response.status(500).send(error);
        })
        .finally(() => next());
});

export default router;
