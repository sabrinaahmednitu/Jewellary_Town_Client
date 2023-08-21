
import './About.css';
import left from '../../video/heading_left.png'
import right from '../../video/heading_right.png';
import building from '../../video/building.jpg'
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
                <h1 className='text-2xl text-black'>Who We are</h1>
                <img className="w-[100px]" src={right} alt="" />
              </div>
              <p>
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                            ultricies nisi vel augue.
                            <br />
                <br />
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                            vitae, eleifend ac, enim.
                            <br />
                <br />
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim.
              </p>
            </div>
          </div>
        </section>
      </>
    );
};

export default About;