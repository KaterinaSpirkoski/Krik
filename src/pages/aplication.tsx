import { useAccessibility } from "@/contex/AccessibilityContext";
import { useState } from "react";

const Application = () => {
  const { contrast, oversized } = useAccessibility();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    cardNumber: "",
    selectNumber: "",
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
    <div className="aplication-page" id="saturation-content">
      <h1 className={` ${oversized ? "HeadlineXL" : "xl-oversized "}`}>
        Волонтирај Сега!
      </h1>
      <div className="aplication">
        <div className="donation-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-inner">
              <div className="inner-left">
                <label
                  htmlFor="name"
                  className={`${
                    oversized ? "s-oversized-title " : "HeadlineS "
                  }`}
                >
                  Име на Волонтер*{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Example Namington"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
                <label
                  htmlFor="address"
                  className={`${
                    oversized ? "s-oversized-title " : "HeadlineS "
                  }`}
                >
                  Адреса*{" "}
                </label>
                <input
                  type="text"
                  name="adress"
                  id="address"
                  placeholder="Example Street 24"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  autoComplete="address"
                />
                <label
                  htmlFor="phoneNumber"
                  className={`${
                    oversized ? "s-oversized-title " : "HeadlineS "
                  }`}
                >
                  Телефонски број*{" "}
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+389000000000"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="phone "
                />
                <label
                  htmlFor="email"
                  className={`${
                    oversized ? "s-oversized-title " : "HeadlineS "
                  }`}
                >
                  Email*{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="inner-right">
                <label
                  htmlFor="age"
                  className={`${
                    oversized ? "s-oversized-title " : "HeadlineS "
                  }`}
                >
                  Возраст*
                </label>
                <div className="card-detail">
                  <button className="over-18" id="age">
                    Под 18 години
                  </button>
                  <button className=" under-18" id="age">
                    Над 18 години
                  </button>
                </div>
                <div className="range">
                  <label
                    htmlFor="expirience"
                    className={`${
                      oversized ? "s-oversized-title " : "HeadlineS "
                    }`}
                  >
                    Искуство со волонтирање*
                  </label>
                  <input
                    type="range"
                    id="expirience"
                    name="expirience"
                    min="0"
                    max="10"
                  />
                  <div className="num">
                    {[...Array(10)].map((_, index) => (
                      <span key={index}>{index + 1}</span>
                    ))}
                  </div>
                </div>

                <div className="input-wrapper">
                  <label
                    htmlFor="interests"
                    className={`${
                      oversized ? "s-oversized-title " : "HeadlineS "
                    }`}
                  >
                    Волонтерски интереси*
                  </label>
                  <div className="btn">
                    <button className="btn-interest" id="interests">
                      Lorem ipsum
                    </button>
                    <button className="btn-interest" id="interests">
                      Lorem ipsum
                    </button>
                  </div>

                  <div className="btn">
                    <button className="btn-interest" id="interests">
                      Lorem ipsum
                    </button>
                    <button className="btn-interest" id="interests">
                      Lorem ipsum
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="join">
              <button
                type="submit"
                className={` join-us ${
                  contrast ? "cotrastOrangeBg " : "defaultOrangeBg "
                } ${oversized ? "button-oversized-L" : "buttonL"}`}
              >
                Пријави се
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Application;
