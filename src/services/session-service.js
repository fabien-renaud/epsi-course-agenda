import {SessionModel} from '../models';

const findSessions = () => {
    return SessionModel.findAll();
};

const findSessionById = (id) => {
    return SessionModel.findByPk(id);
};

const createSession = (session) => {
    return SessionModel.create(session);
};

const updateSession = (id, session) => {
    return SessionModel.update(session, {where: id});
};

const deleteSession = (id) => {
    return SessionModel.destroy({where: id});
};

export const SessionService = {
    findSessions,
    findSessionById,
    createSession,
    updateSession,
    deleteSession
};
