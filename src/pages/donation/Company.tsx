import { useAccessibility } from "@/contex/AccessibilityContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Company = () => {
  const { pathname } = useRouter();
  const { contrast, oversized } = useAccessibility();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    price: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Donation submitted:", formData);
  };
  return (
    <div className="donation-page company" id="saturation-content">
      <h1 className={` ${oversized ? "HeadlineXL" : "HeadlineL"}`}>
        Донирај !
      </h1>
      <div className="donate-links">
        <Link
          href="/donation"
          className={pathname === "/donation" ? "active-link" : ""}
        >
          {" "}
          <p
            className={` link ${
              oversized ? "s-oversized-title " : "HeadlineS"
            }`}
          >
            Индивидуа
          </p>
        </Link>
        <Link
          href="/donation/Company"
          className={pathname === "/donation/Company" ? "active-link" : ""}
        >
          {" "}
          <p
            className={` link ${
              oversized ? "s-oversized-title " : "HeadlineS"
            }`}
          >
            Организација/Претпријатие
          </p>
        </Link>
      </div>

      <div className="donation-card">
        <div className="card">
          <h5
            className={` link ${
              oversized ? "s-oversized-title " : "HeadlineS"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur.
          </h5>
          <div className="btn-inner-card">
            <button>1000 Ден</button>
            <button>3000 Ден</button>
            <button>6000 Ден</button>
            <select name="" id="">
              <option value=""> Промени валута</option>
            </select>
            <div className="arrow-down">
              <img src="/images/arrowDown.svg" alt="" />
            </div>
          </div>
          <div className="text-card">
            <p className={`desc ${oversized ? "l-oversized-body" : "bodyL"}`}>
              Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a
              cras feugiat mattis velit venenatis. Adipiscing viverra praesent
              tristique non. Nunc blandit turpis tellus natoque mi odio viverra
              fermentum.{" "}
            </p>
          </div>

          <form action="">
            <div className="input">
              <label>Друг износ: </label>
              <input
                type="text"
                name="name"
                placeholder="Input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-inner">
              <button className="donate-btn">Донирај со </button>
              <button className="payPal">PayPal</button>
            </div>
          </form>
        </div>
      </div>
      <div className="donation-inner">
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <div className="inner-left">
              <label
                className={` link ${
                  oversized ? "s-oversized-title " : "HeadlineS"
                }`}
              >
                Име на Донатор*{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Example Namington"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label
                className={` link ${
                  oversized ? "s-oversized-title " : "HeadlineS"
                }`}
              >
                Email*{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label
                className={` link ${
                  oversized ? "s-oversized-title " : "HeadlineS"
                }`}
              >
                Телефонски број*{" "}
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+389000000000"
                value={formData.phoneNumber}
                onChange={handleChange}
              />

              <label
                className={` link ${
                  oversized ? "s-oversized-title " : "HeadlineS"
                }`}
              >
                Сума за донирање*{" "}
              </label>
              <input
                type="number"
                name="price"
                placeholder="a million?"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inner-right">
              <div className="input-wrapper card-container">
                <label
                  className={` link ${
                    oversized ? "s-oversized-title " : "HeadlineS"
                  }`}
                >
                  Број на картичка*
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="card"
                  placeholder="****  ****  ****  ****"
                />
              </div>
              <div className="card-detail">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YYYY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  className="expiry"
                />

                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="cvv"
                />
              </div>

              <div className="input-wrapper">
                <label
                  className={` link ${
                    oversized ? "s-oversized-title " : "HeadlineS"
                  }`}
                >
                  Име на сопственик*
                </label>
                <input
                  type="text"
                  name="cardHolderName"
                  value={formData.cardHolderName}
                  onChange={handleChange}
                  required
                  placeholder="Example Namington"
                />
              </div>

              <button type="submit">Донирај</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Company;
