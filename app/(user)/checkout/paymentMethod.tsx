// ✅ /components/PaymentMethodSelector.tsx
import { useState, useEffect } from 'react';

type PaymentMethodSelectorProps = {
  onChange: (payment: { metode: string; detail?: string }) => void;
};

export default function PaymentMethodSelector({ onChange }: PaymentMethodSelectorProps) {
  const [metodePembayaran, setMetodePembayaran] = useState('');
  const [onlinePaymentOption, setOnlinePaymentOption] = useState('');

  useEffect(() => {
    if (metodePembayaran === 'cod') {
      onChange({ metode: 'cod' });
    } else if (metodePembayaran === 'online') {
      onChange({ metode: 'online', detail: onlinePaymentOption });
    }
  }, [metodePembayaran, onlinePaymentOption]);

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="metode"
          value="cod"
          checked={metodePembayaran === 'cod'}
          onChange={() => setMetodePembayaran('cod')}
        />
        <span>Cash on Delivery (COD)</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="metode"
          value="online"
          checked={metodePembayaran === 'online'}
          onChange={() => setMetodePembayaran('online')}
        />
        <span>Online Payment</span>
      </label>

      {metodePembayaran === 'online' && (
        <div className="border-t pt-4 space-y-2">
          <h3 className="font-medium text-sm text-gray-700">Pilih Jenis Pembayaran Online:</h3>

          {['credit_card', 'bca_va', 'shopeepay', 'qris'].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="radio"
                name="onlinePayment"
                value={method}
                checked={onlinePaymentOption === method}
                onChange={() => setOnlinePaymentOption(method)}
              />
              <span>{method.replace('_', ' ').toUpperCase()}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
