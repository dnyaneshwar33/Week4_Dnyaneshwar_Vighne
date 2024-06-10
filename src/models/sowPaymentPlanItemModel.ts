import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import SOWPaymentPlan from './sowPaymentPlanModel';
import SOW from './statementOfWork';

interface SOWPaymentPlanItemAttributes {
  id: string;
  sowPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class SOWPaymentPlanItem extends Model<SOWPaymentPlanItemAttributes> implements SOWPaymentPlanItemAttributes {
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

SOWPaymentPlanItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOWPaymentPlanItem',
    tableName: 'SOWPaymentPlanItems',
  }
);

SOWPaymentPlanItem.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });

export default SOWPaymentPlanItem;
