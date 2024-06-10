import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import SOW from './statementOfWork';

interface SOWPaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

class SOWPaymentPlan extends Model<SOWPaymentPlanAttributes> implements SOWPaymentPlanAttributes {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOWPaymentPlan',
    tableName: 'SOWPaymentPlans',
  }
);

SOWPaymentPlan.belongsTo(SOW, { foreignKey: 'sowId' });

export default SOWPaymentPlan;
