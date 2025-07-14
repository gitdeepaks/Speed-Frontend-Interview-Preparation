import { AddressForm } from './address-form';
import { OrderSuccess } from './order-success';
import { PaymentForm } from './payment-form';

export const Checkout = ({
  orderComplete,
  onPlaceorder,
  onContinueShopping,
}) => (
  <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
    <h1 style={{ marginBottom: '30px', fontSize: '24px' }}>Checkout</h1>
    {orderComplete ? (
      <OrderSuccess onContinueShopping={onContinueShopping} />
    ) : (
      <div>
        <AddressForm />
        <PaymentForm />
        <button
          onClick={onPlaceorder}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#28a745',
            color: 'white',
            boder: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Place Order
        </button>
      </div>
    )}
  </div>
);
