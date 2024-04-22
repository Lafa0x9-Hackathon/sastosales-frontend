import React, { useState } from "react";
import "./payment.css";
import esewa from "../../assets/Images/esewa-logo-DA36F8FD2F-seeklogo 1.png";
import IME from "../../assets/Images/imepay.png";
import khalti from "../../assets/Images/khalti.png";
import connectIps from "../../assets/Images/connectIps.png";
import shopping from "../../assets/Images/Shopping.png";
import creditCard from "../../assets/Images/CreditCard.png";
import CheckCircle from "../../assets/Images/CheckCircle.png";
import vector from "../../assets/Images/Vector.png";

const initialValue = {
  receipientName: "",
  receipientEmail: "",
  message: "",
  walletName: "",
  mobileNumber: "",
  date: "",
  cvc: "",
  remember: "",
  selectedPaymentMethod: null,
};
const Payment = () => {
  const [payment, setPayment] = useState(initialValue);
  const [error, setError] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const onChange = (e) => {
    if (e.target.name === "remember") {
      setPayment({ ...payment, [e.target.name]: [e.target.checked] });
    } else {
      setPayment({ ...payment, [e.target.name]: [e.target.value] });
    }
  };

  const handleSubmit = (e) => {
    setPayment({ ...payment, selectedPaymentMethod });
    e.preventDefault();
    if (!validateForm(payment)) {
      return;
    }
    console.log(payment);
    setPayment(initialValue);
    setError("");
  };
  // form validation using regx
  const validateForm = (value) => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const msgRegex = /^[a-zA-Z\s]{10,}$/;
    const mobileRegex = /^\d{10}$/;
    const dateRegex =
      /^(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12][0-9]|3[01])(\/|-)(19|20)\d{2}$/;
    const cvcRegex = /^[0-9]{3,4}$/;

    if (
      !value.receipientName ||
      !value.receipientEmail ||
      !value.message ||
      !value.walletName ||
      !value.mobileNumber ||
      !value.date ||
      !value.cvc
    ) {
      setError("All fields are required");
      return false;
    } else if (!nameRegex.test(value.receipientName)) {
      setError("Register's Name should contain atleast three character");
      return false;
    } else if (!emailRegex.test(value.receipientEmail)) {
      setError("Invalid email");
      return false;
    } else if (!msgRegex.test(value.message)) {
      setError("Message must contain atleast 10 character");
      return false;
    } else if (!nameRegex.test(value.walletName)) {
      setError("Wallet's Name should contain atleast three character");
      return false;
    } else if (!mobileRegex.test(value.mobileNumber)) {
      setError("Mobile Number must contain 10 digits");
      return false;
    } else if (!dateRegex.test(value.date)) {
      setError("Invalid date format");
      return false;
    } else if (!cvcRegex.test(value.cvc)) {
      setError("Invalid CVC format");
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="recipient">
          <div className="input-box">
            <label htmlFor="receipientName" className="Label">
              Receipient's Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              id="receipientName"
              name="receipientName"
              className="content"
              value={payment.receipientName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="receipientEmail" className="Label">
              Receipient's Email
            </label>
            <input
              type="Email"
              placeholder="Email"
              id="receipientEmail"
              name="receipientEmail"
              className="content"
              value={payment.receipientEmail}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="input-box">
            <textarea
              name="message"
              id="message"
              cols="80"
              rows="10"
              placeholder="Add your message here.."
              className="content"
              value={payment.message}
              onChange={(e) => onChange(e)}
              required
            ></textarea>
          </div>
        </div>
        <div className="pMethod">
          <div className="heading">Payment Method</div>
          <div
            className={`method ${
              selectedPaymentMethod === "esewa" ? "selected-method" : ""
            }`}
            onClick={() => setSelectedPaymentMethod("esewa")}
          >
            <img className="paymentIcon" src={esewa} alt="esewa logo" />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div
            className={`method ${
              selectedPaymentMethod === "ime" ? "selected-method" : ""
            }`}
            onClick={() => setSelectedPaymentMethod("ime")}
          >
            <img className="paymentIcon" src={IME} alt="esewa logo" />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div
            className={`method ${
              selectedPaymentMethod === "khalti" ? "selected-method" : ""
            }`}
            onClick={() => setSelectedPaymentMethod("khalti")}
          >
            <img className="paymentIcon" src={khalti} alt="khalti logo" />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div
            className={`method ${
              selectedPaymentMethod === "connect IPS" ? "selected-method" : ""
            }`}
            onClick={() => setSelectedPaymentMethod("connect IPS")}
          >
            <img
              className="paymentIcon"
              src={connectIps}
              alt="connect ips logo"
            />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div
            className={`method ${
              selectedPaymentMethod === "address" ? "selected-method" : ""
            }`}
            onClick={() => setSelectedPaymentMethod("address")}
          >
            <img className="paymentIcon" src={shopping} alt="shopping logo" />
            <div className="ph">9845902342, 9728658910</div>
            <div className="address">Kathmandu-3,Bagmati</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div
            className={`method ${
              selectedPaymentMethod === "credit card" ? "selected-method" : ""
            }`}
            onClick={() => setSelectedPaymentMethod("credit card")}
          >
            <img
              className="paymentIcon"
              src={creditCard}
              alt="credit card logo"
            />
            <p className="newCard">New Payment Cards</p>
            <img src={CheckCircle} alt=" check circle" className="circle" />
          </div>
        </div>
        <div className="personalInfo">
          <div className="input-box">
            <label htmlFor="walletName" className="Label">
              Name
            </label>
            <input
              type="text"
              name="walletName"
              id="walletName"
              placeholder="Name of wallet"
              className="content"
              value={payment.walletName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="mobileNumber" className="Label">
              Mobile Number
            </label>
            <div className="mobile">
              <img src={creditCard} alt="mobile-icon" className="icon" />
              <img src={vector} alt="vertical line" className="line" />

              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Mobile Number"
                className="content"
                value={payment.mobileNumber}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className="Numbered">
            <div className="input-box">
              <label htmlFor="date" className="Label">
                MM/YY
              </label>
              <input
                type="text"
                name="date"
                id="date"
                placeholder="MM/YY"
                className="dateBox"
                value={payment.date}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="cvc" className="Label">
                CVC
              </label>
              <input
                type="text"
                name="cvc"
                id="cvc"
                placeholder="Security code"
                className="cvcBox"
                value={payment.cvc}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
        </div>
        <div className="checkMe">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="rememberIcon"
            checked={payment.remember}
            onChange={(e) => onChange(e)}
          />
          <span className="rememberText">
            Remember this card,save it on my card list
          </span>
        </div>
        <input type="submit" value="Pay" className="payBtn" />
        {error && (
          <span
            style={{
              color: "#c93737",
              fontSize: "14px",
              marginTop: "5px",
              lineHeight: "0",
              fontWeight: "600",
            }}
          >
            {error}
          </span>
        )}
      </form>
    </div>
  );
};

export default Payment;
