/* eslint-disable jsx-a11y/img-redundant-alt */

import "../css/Testimonials.css";

function Testimonials(props) {
  return (
    <div className="container-testimony">
      <img
        className="testimonial-image"
        src={require(`../images/testimonio-${props.image}.png`)}
        alt="Emma's photo"
      />
      <div className="testimonial-text-container">
        <p className="testimonial-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="charge-testimony">
          {props.charge} at<strong> {props.company}</strong>{" "}
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimonials;
