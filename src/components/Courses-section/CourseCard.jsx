import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details cr">
        <h6 className="course__title">{title}</h6>

        <div>
          <div className="lr">
            <div>
              <p className="lesson d-flex align-items-center gap-1">
                <i class="ri-book-open-line"></i> {lesson} Lessons
              </p>
            </div>

            <div>
              <p className="students d-flex align-items-center gap-1">
                <i class="ri-user-line"></i> {students}K
              </p>
            </div>
          </div>

          <div className="re">
            <div>
              <p className="rating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i> {rating}K
              </p>
            </div>

            <div>
              <p className="enroll d-flex align-items-center gap-1">
                <a href="#"> Enroll Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
