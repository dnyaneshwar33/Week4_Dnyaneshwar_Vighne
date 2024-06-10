import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import SOW from './statementOfWork';
import SOWPaymentPlan from './sowPaymentPlanModel';

export interface InvoiceAttributes {
  id: string;
  sowId: string;
  sowPaymentPlanId: string;
  customerId: string;
  totalInvoiceValue: number;
  status: string;
  invoiceSentOn: Date | null;
  paymentReceivedOn: Date | null;
  invoiceVersionNumber: string | null;
  invoiceAmount: number | null;
  invoiceTaxAmount: number | null;
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: string;
  public sowId!: string;
  public sowPaymentPlanId!: string;
  public customerId!: string;
  public totalInvoiceValue!: number;
  public status!: string;
  public invoiceSentOn!: Date | null;
  public paymentReceivedOn!: Date | null;
  public invoiceVersionNumber!: string | null;
  public invoiceAmount!: number | null;
  public invoiceTaxAmount!: number | null;
}

Invoice.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalInvoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    paymentReceivedOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceVersionNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    invoiceTaxAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Invoice',
    tableName: 'Invoices',
  }
);

Invoice.belongsTo(SOW, { foreignKey: 'sowId' });
Invoice.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });

export default Invoice;
