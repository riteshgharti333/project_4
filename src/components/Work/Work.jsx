import "./Work.scss";

import work_img from "../../assets/images/work.webp";
import check_icon from "../../assets/images/check.webp";

const Work = () => {
  return (
    <div className="work">
      <div className="work-top">
        <h1>How It Works?</h1>
      </div>

      <div className="work-container">
        <div className="work-left">
          <img src={work_img} alt="" className="work-img" />
          <div className="work-right-bottom">
            <div className="work-right-bottom-item">
              <h3>
                <img src={check_icon} alt="" className="check-img" /> Plave Your
                Order
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam expedita, enim aut recusandae reprehenderit ratione
                placeat vel velit laudantium fugiat.
              </p>
            </div>

            <div className="work-right-bottom-item">
              <h3>
                <img src={check_icon} alt="" className="check-img" /> Plave Your
                Order
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam expedita, enim aut recusandae reprehenderit ratione
                placeat vel velit laudantium fugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="work-right">
          <form>
            <h2>Consult With Our Home Design Experts</h2>
            <div className="form-inputs">
              <div class="input-group">
                <input required="" type="text" name="text" />
                <label>Name</label>
              </div>

              <div class="input-group">
                <input required="" type="text" name="number" />
                <label>Mobile Number</label>
              </div>

              <div class="input-group">
                <input required="" type="text" name="email" />
                <label>Email</label>
              </div>

              <div class="input-group">
                <input required="" type="text" name="text" />
                <label>City</label>
              </div>

              <div class="input-group">
                <input required="" type="text" name="text" />
                <label>Requirements</label>
              </div>

              <button type="submit">Book Online</button>
              <p>By submitting this form, you agree to the</p>
              <p>
                <span>privacy policy</span> & <span>terms and conditions </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Work;
