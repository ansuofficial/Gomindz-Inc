import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details fcc">
        <h6>{title}</h6>

        <div className="fc">
          <div>
            <span className=" d-flex align-items-center gap-2">
              <i class="ri-user-line"></i> {students}k
            </span>
          </div>
          <div>
            <span className=" d-flex align-items-center gap-2">
              <i class="ri-star-fill"></i> {rating}k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
