import { InputText, InputFile } from "components/ui/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment({ data, ItemDetails, checkout, onChange }) {
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-5 border-right py-5 checkout-left">
          <p className="mb-4">Transfer Pembayaran:</p>
          <p>Tax: {tax}</p>
          <p>Sub total: ${subTotal} USD</p>
          <p>Total: ${grandTotal} USD</p>
          <div className="row mt-4">
            <div className="col-3 text-right">
              <img src={logoBca} alt="bank central asia" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>2208 1996</dd>
                <dd>BuidWith Angga</dd>
              </dl>
            </div>
          </div>

          <div className="row">
            <div className="col-3 text-right">
              <img src={logoMandiri} alt="mandiri" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Mandiri</dd>
                <dd>2208 1996</dd>
                <dd>BuidWith Angga</dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 py-5 checkout-right">
          <label htmlFor="proofPayment">Upload Bukti Transfter</label>
          <InputFile
            accept="image/*"
            id="proofPayment"
            name="proofPayment"
            value={data.proofPayment}
            onChange={onChange}
          />

          <label htmlFor="bankName">Asal Bank</label>
          <InputText
            id="bankName"
            type="text"
            name="bankName"
            value={data.bankName}
            onChange={onChange}
          />

          <label htmlFor="bankHolder">Nama Pengirim</label>
          <InputText
            id="bankHolder"
            name="bankHolder"
            type="text"
            value={data.bankHolder}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
