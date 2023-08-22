import './Contact.css';
const Contact = () => {
  return (
    <>
      <section></section>
      <section className="contact-main pt-12 pb-12">
        <div className="contact-form bg-white mt-5 mb-5">
          <h1 className="text-2xl">Contact Form</h1>
          <input className="w-full bg-white border" type="text" />
          <input className="w-full bg-white border" type="text" />

          <input className="w-full bg-white border" type="text" />

          <textarea className="w-full bg-white border" type="text" />
          <button className="btn bg-yellow-500 text-white" type="submit">
            Send
          </button>
        </div>
        <div className="contact-text">
          <h1 className="text-2xl text-black mb-12">Get in Touch With Us</h1>
          <h1 className=" mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
          </h1>
          <p>
            <div>
              <i className="fa-solid fa-house-chimney-window"></i>
            </div>
            <div>
              {' '}
              60, 29th Street #343, San Francisco, CA 94110, <br /> United
              States of America
            </div>
          </p>
          <p>
            <div>
              {' '}
              <i className="fa-solid fa-phone"></i>
            </div>{' '}
            <div>+01 2222 365 / +91 1256 789</div>
          </p>
          <p>
            <div>
              {' '}
              <i className="fa-solid fa-envelope"></i>
            </div>{' '}
            <div>contactus@martfury.com</div>
          </p>
          <p>
            <div>
              <i className="fa-solid fa-info"></i>
            </div>{' '}
            <div>Monday – Friday 10 AM – 8 PM</div>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
