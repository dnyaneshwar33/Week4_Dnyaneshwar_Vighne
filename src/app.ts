
import express from 'express';
import bodyParser from 'body-parser';
import organizationRoutes from './routes/organization';
import customerRoutes from './routes/customerRoutes';
import sowRoutes from './routes/sowRoutes';
import invoiceRoutes from './routes/invoiceRoutes';
import sowPaymentPlanRoutes from './routes/sowPaymentPlanRoutes';
import paymentRoutes from './routes/paymentRoutes';
import sowPayLineItems from './routes/sowPayLineItemRoutes';
import invoiceLineItemRoutes from './routes/invoiceLineItemRoutes';


const app = express();

app.use(bodyParser.json());

app.use('/organizations', organizationRoutes);
app.use('/customers', customerRoutes);
app.use('/sows', sowRoutes);
app.use('/sowpaymentplans', sowPaymentPlanRoutes);
app.use('/sowpaylineitems',sowPayLineItems);
app.use('/invoices', invoiceRoutes);
app.use('/invoicelineitems', invoiceLineItemRoutes);
app.use('/payment',paymentRoutes);
export default app;


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

