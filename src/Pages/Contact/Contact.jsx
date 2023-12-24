import Banner from "../../Components/Banner/Banner";

import contactStyle from "./Contact.module.css";
const Contact = () => {
  return (
    <section>
      <div className="container">
        <Banner title={"Contact us"} subHeading={"Have a project?"} />
        <div className={contactStyle.formBox}>
          <form>
            <p>Service</p>
            <div className={contactStyle.serviceBox}>
              <p>Web design</p>
              <p>SEO & SMM</p>
              <p>Video Editing</p>
              <p>Content Writing</p>
            </div>
            <div className={contactStyle.formInputFieldBox}>
              <div className={contactStyle.formInputField}>
                <label>First name</label>
                <input type="text" />
                <label>Last name</label>
                <input type="text" />
              </div>
              <div className={contactStyle.formInputField}>
                <label>Mobile number</label>
                <input type="tel" placeholder="Mobile number" />
                <label>Email adress</label>
                <input type="text" placeholder="Email adress" />
              </div>
              <div className={contactStyle.formInputField}>
                <label>Enter your message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div>
              <input type="submit" value="Send Request" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
