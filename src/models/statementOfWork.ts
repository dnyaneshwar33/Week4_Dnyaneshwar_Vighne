import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import Customer from './customerModel';

interface SOWAttributes {
  id: string;
  customerId: string;
  invoiceEmailAddresses: string[];
  customerPONumber: string;
  title: string;
  customerSONumber: string;
  validityPeriod: { validFrom: Date; validUpto: Date };
  totalValue: number;
  currency: string;
}

class SOW extends Model<SOWAttributes> implements SOWAttributes {
  public id!: string;
  public customerId!: string;
  public invoiceEmailAddresses!: string[];
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validityPeriod!: { validFrom: Date; validUpto: Date };
  public totalValue!: number;
  public currency!: string;
}

SOW.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Customer,
        key: 'id',
      },
    },
    invoiceEmailAddresses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    customerPONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerSONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validityPeriod: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    totalValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOW',
    tableName: 'SOWs',
  }
);

SOW.belongsTo(Customer, { foreignKey: 'customerId' });

export default SOW;
