import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import Invoice from './invoiceModel';

interface InvoiceItemAttributes {
  id: string;
  invoiceId: string;
  orderNo: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class InvoiceItem extends Model<InvoiceItemAttributes> implements InvoiceItemAttributes {
  public id!: string;
  public invoiceId!: string;
  public orderNo!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

InvoiceItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Invoice,
        key: 'id',
      },
    },
    orderNo: {
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
    modelName: 'InvoiceItem',
    tableName: 'InvoiceItems',
  }
);

InvoiceItem.belongsTo(Invoice, { foreignKey: 'invoiceId' });

export default InvoiceItem;
