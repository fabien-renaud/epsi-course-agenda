import {CourseModel, SessionModel} from '../models';

const findCourses = () => {
    return CourseModel.findAll({include: {model: SessionModel, as: 'sessions'}});
};

const findCourseById = (id) => {
    return CourseModel.findByPk(id);
};

const createCourse = (course) => {
    return CourseModel.create(course);
};

const updateCourse = (id, course) => {
    return CourseModel.update(course, {where: id});
};

const deleteCourse = (id) => {
    return CourseModel.destroy({where: id});
};

export const CourseService = {
    findCourses,
    findCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
