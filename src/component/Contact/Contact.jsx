import './Contact.css';
const Contact = () => {
  return (
    <>
      <section className="contact-main pt-12 pb-12">
        <div className="contact-form bg-white mt-5 mb-5">
          <h1 className="text-2xl">Contact Form</h1>
          <input
            className="w-full bg-white border"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full bg-white border"
            type="text"
            placeholder="Your Email"
          />

          <input
            className="w-full bg-white border"
            type="text"
            placeholder="Subject"
          />

          <textarea
            className="w-full bg-white border"
            type="text"
            placeholder="Your Message"
          />
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

      <section className=" mb-12">
        <h1 className="text-center text-2xl text-black mb-5">Our Shop Map</h1>
        <div className="shop-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117658.79381594!2d89.44986423860242!3d22.845507951758506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9071cb47152f%3A0xf04b212290718952!2sKhulna!5e0!3m2!1sen!2sbd!4v1692719541383!5m2!1sen!2sbd"
            style={{
              allowfullscreen: '',
              loading: 'lazy',
              referrerPolicy: 'no-referrer-when-downgrade',
            }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
