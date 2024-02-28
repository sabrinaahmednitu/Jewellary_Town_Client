import './About.css';
import left from '../../video/heading_left.png';
import right from '../../video/heading_right.png';
import building from '../../video/building.jpg';
import stuff3 from '../../video/staff-03-1-250x250_t.jpg' 
import stuff1 from '../../video/staff-01-1-250x250_t.jpg' 
import stuff2 from '../../video/staff-02-1-250x250_t.jpg' 
import stuff4 from '../../video/staff-04-1-250x250_t.jpg' 
const About = () => {
  return (
    <>
      <section>
        <div className="weAre-main pt-12 pb-12">
          <div className="weImg ">
            <img className="w-[100%]" src={building} alt="" />
          </div>
          <div className="weText mt-12 mb-5 ">
            <div className="we-head mb-5">
              <img className="w-[100px]" src={left} alt="" />
              <h1 className="text-2xl text-black">Who We are</h1>
              <img className="w-[100px]" src={right} alt="" />
            </div>
            <p>
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
              feugiat a, tellus. Phasellus viverra nulla ut metus varius
              laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
              vel augue.
              <br />
              <br />
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
              <br />
              <br />
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="ourTeams container">
          <div className="Teams-head mb-5 ">
            <img className="w-[100px]" src={left} alt="" />
            <h1 className="text-2xl text-black">Our Team</h1>
            <img className="w-[100px]" src={right} alt="" />
          </div>
          <div className="teamCards">
            <div className="teamCard">
              <img src={stuff1} alt="" />
              <div className="teamText ">
                <h1>Nemo Enimson</h1>
                <p>Manager</p>
                <div className="teamSocial">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                  <i className="fa-brands fa-google-plus"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
            <div className="teamCard">
              <img src={stuff2} alt="" />
              <div className="teamText">
                <h1>Monelo Patel</h1>
                <p>CEO</p>
                
                <div className="teamSocial">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                  <i className="fa-brands fa-google-plus"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
            <div className="teamCard">
              <img src={stuff3} alt="" />
              <div className="teamText">
                <h1>Vilorano jeo</h1>
                <p>Designer</p>
   
                <div className="teamSocial">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                  <i className="fa-brands fa-google-plus"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
            <div className="teamCard">
              <img src={stuff4} alt="" />
              <div className="teamText">
                <h1>Mark Marley</h1>
                <p>Co-CEO</p>
               
                <div className="teamSocial">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                  <i className="fa-brands fa-google-plus"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
