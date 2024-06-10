import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import Invoice from './invoiceModel';

interface InvoiceLineItemAttributes {
  id: string;
  invoiceId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes> implements InvoiceLineItemAttributes {
  public id!: string;
  public invoiceId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Invoice,
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
    modelName: 'InvoiceLineItem',
    tableName: 'InvoiceLineItems',
  }
);

InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'invoiceId' });

export default InvoiceLineItem;
