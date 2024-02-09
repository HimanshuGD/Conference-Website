import React from "react";

const Payment = () => {
  return (
    <div>
      <div class="w-[83%] mx-auto bg-white p-8 border rounded-md shadow-md">
        <h2 class="text-3xl font-bold mb-6 text-center">
          Online Payment Details
        </h2>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-lg font-semibold">Beneficiary Name</p>
            <p>NITK SURATHKAL</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Account No</p>
            <p>37772503911</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Bank Name</p>
            <p>State Bank of India</p>
          </div>
          <div>
            <p class="text-lg font-semibold">IFSC Code</p>
            <p>SBIN0002273 (For transfers from within India)</p>
          </div>
          <div>
            <p class="text-lg font-semibold">MICR</p>
            <p>575002013</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Address</p>
            <p>N.I.T.K CAMPUS, SRINIVASNAGAR POST MANGALURU-575025</p>
          </div>
        </div>

        <h3 class="mt-6 text-lg font-semibold">NOTE:</h3>
        <ul>
          <li>
            During transactions, kindly enter "ASSETS 2024" in the purpose field.
          </li>
          <li>
            Registration fee is non-refundable. Fee once paid shall not be
            refunded under any circumstances.
          </li>
          <li>
            Kindly send the payment receipt to{" "}
            <strong>assets.nitk@gmail.com</strong>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
