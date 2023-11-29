import React from "react";
import "./newsletter.css";
const Newsletter = () => {


  return (
    <section>
      <form>
        <div className="wrapper">
          <div>
            <h1>Get in touch</h1>
          </div>
          <div>
            <input type="text" placeholder="Full name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea
              placeholder="Message"
            ></textarea>
          </div>
          <div className="sub">
            <button type="button">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
  }

export default Newsletter;

// import { Container, Row, Col } from "reactstrap";

// const Newsletter = () => {
//   return (
//     <section className="">
//       <Container className="newsletter">
//         <Row>
//           <Col lg="12" className="text-center">
//             <h2 className="mb-4">Subscribe Our Newsletter</h2>
//             <div className="subscribe">
//               <form>
//                 <div>
//                   <div className="biaf">
//                     <div>
//                       <label>First name</label>
//                       <input type="text" placeholder="Enter first name" />
//                     </div>
//                     <div>
//                       <label>Last name</label>
//                       <input type="text" placeholder="Enter last name" />
//                     </div>
//                     <div>
//                       <label>Email</label>
//                       <input type="text" placeholder="Enter email" />
//                     </div>
//                   </div>
//                   <div className="ta">
//                     <div>
//                       <textarea placeholder="Enter message"></textarea>
//                     </div>
//                     <div>
//                       <select>
//                         <option>Select course</option>
//                         <option value="Web design">Web design</option>
//                         <option value="">UI/UX design</option>
//                         <option value="Graphics design">Graphics design</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               {/* <input type="text" placeholder="Enter your email" />
//               <button className="btn">Subscribe</button> */}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Newsletter;
