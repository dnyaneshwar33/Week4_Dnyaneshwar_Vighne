import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface PaymentAttributes {
  id: any;
  invoiceId: string;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  forExAmount: number | null;
  currency: string | null;
  indianAmount: number | null;
  isFullPayment: boolean;
  bankPaymentDetails: string | null;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
  public id!: any;
  public invoiceId!: string;
  public amount!: number;
  public paymentDate!: Date;
  public paymentMethod!: string;
  public forExAmount!: number | null;
  public currency!: string | null;
  public indianAmount!: number | null;
  public isFullPayment!: boolean;
  public bankPaymentDetails!: string | null;
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    forExAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    indianAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    isFullPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bankPaymentDetails: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName:'Payment',
  }
);

export default Payment;
