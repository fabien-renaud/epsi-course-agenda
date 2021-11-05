import {CourseService} from '../services';

const findCourses = () => {
    return CourseService.findCourses();
};

const findCourseById = (id) => {
    return CourseService.findCourseById(id);
};

const createCourse = (course) => {
    return CourseService.createCourse(course);
};

const updateCourse = (id, course) => {
    return CourseService.updateCourse(id, course);
};

const deleteCourse = (id) => {
    return CourseService.deleteCourse(id);
};

export const CourseController = {
    findCourses,
    findCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
