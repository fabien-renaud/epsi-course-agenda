import {ENUM, STRING, UUID, UUIDV4} from 'sequelize';
import database from '../core/database';

export const CourseModel = database.define(
    'Course',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: STRING,
            allowNull: false
        },
        color: {
            type: ENUM('BLUE', 'GREEN', 'PURPLE', 'RED', 'YELLOW', 'ORANGE', 'TURQUOISE', 'GRAY', 'BOLD BLUE', 'BOLD GREEN', 'BOLD RED'),
            allowNull: true
        },
        promotion: {
            type: ENUM,
            values: ['SN1', 'B2', 'B3', 'I1', 'I2'],
            allowNull: false
        },
        status: {
            type: ENUM,
            values: ['DRAFT', 'VALIDATE', 'CANCELLED'],
            allowNull: false
        }
    },
    {
        tableName: 'course',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);
