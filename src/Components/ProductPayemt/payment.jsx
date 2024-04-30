import React from "react";
import "./payment.css";
import esewa from "../../assets/Images/esewa-logo-DA36F8FD2F-seeklogo 1.png";
import IME from "../../assets/Images/imepay.png";
import khalti from "../../assets/Images/khalti.png";
import connectIps from "../../assets/Images/connectIps.png";
import shopping from "../../assets/Images/Shopping.png";
import creditCard from "../../assets/Images/CreditCard.png";
import CheckCircle from "../../assets/Images/CheckCircle.png";
import vector from "../../assets/Images/Vector.png";
const Payment = () => {
  return (
    <div className="form-container">
      <form action="">
        <div className="recipient">
          <div className="input-box">
            <label htmlFor="receipientName" className="Label">
              Receipient's Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              id="receipientName"
              className="content"
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
              className="content"
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
            ></textarea>
          </div>
        </div>
        <div className="pMethod">
          <div className="heading">Payment Method</div>
          <div className="method">
            <img className="paymentIcon" src={esewa} alt="esewa logo" />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div className="method">
            <img className="paymentIcon" src={IME} alt="esewa logo" />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div className="method">
            <img className="paymentIcon" src={khalti} alt="khalti logo" />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div className="method">
            <img
              className="paymentIcon"
              src={connectIps}
              alt="connect ips logo"
            />
            <div className="ph">9845***</div>
            <div className="date">04/24</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div className="method">
            <img className="paymentIcon" src={shopping} alt="shopping logo" />
            <div className="ph">9845902342, 9728658910</div>
            <div className="address">Kathmandu-3,Bagmati</div>
            <div className="pName">Shiva Panda</div>
          </div>
          <div className="method">
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
            />
          </div>
          <div className="input-box">
            <label htmlFor="mobileNumber" className="Label">
              Mobile Number
            </label>
            <div className="mobileIcon">
              <span>
                <img src={creditCard} alt="" className="icon" />
                <img src={vector} alt="" className="line" />
              </span>

              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Mobile Number"
                className="content"
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
          />
          <span className="rememberText">
            Remember this card,save it on my card list
          </span>
        </div>
        <input type="button" value="Pay" className="payBtn" />
      </form>
    </div>
  );
};

export default Payment;
