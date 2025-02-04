import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
        host: 'dpg-cucrcbl2ng1s73b7ou30-a.oregon-postgres.render.com',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true
        },
        ssl: true
    });
const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);
User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser' });
export { sequelize, User, Ticket };
