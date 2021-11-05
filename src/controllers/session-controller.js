import {SessionService} from '../services';

const findSessions = () => {
    return SessionService.findSessions();
};

const findSessionById = (id) => {
    return SessionService.findSessionById(id);
};

const createSession = (session) => {
    return SessionService.createSession(session);
};

const updateSession = (id, session) => {
    return SessionService.updateSession(id, session);
};

const deleteSession = (id) => {
    return SessionService.deleteSession(id);
};

export const SessionController = {
    findSessions,
    findSessionById,
    createSession,
    updateSession,
    deleteSession
};
