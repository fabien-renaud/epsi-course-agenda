import {DATE, ENUM, INTEGER, UUID, UUIDV4} from 'sequelize';
import database from '../core/database';
import {CourseModel} from './course';

export const SessionModel = database.define(
    'Session',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        session_number: {
            type: INTEGER,
            allowNull: true
        },
        group: {
            type: ENUM('G1', 'G2'),
            allowNull: true
        },
        start_date: {
            type: DATE,
            allowNull: false
        },
        length: {
            type: INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'session',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

CourseModel.hasMany(SessionModel, {
    as: 'sessions',
    foreignKey: 'session_id'
});

SessionModel.belongsTo(CourseModel);
