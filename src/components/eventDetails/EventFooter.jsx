import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";

const EventFooter = () => {
  return (
    <div className="container py-3">
      <div className=" d-flex justify-content-between align-items-center">
        <div>
          <p className="mb-0">SAT, JUN 29 · 10:00 AM IST</p>
          <p className="fw-bold mb-0">AI Insights & Frontend Explorations</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <BiRupee className="icon-large" />
            <p className="mb-0">3000</p>
          </div>
          <Link
            type="button"
            className="btn border-blue blue-text fw-semibold mx-4 py-3 px-5"
          >
            Share <MdIosShare className="icon-large ms-2" />
          </Link>
          <Link type="button" className="btn btn-peach py-3 px-5">
            Attend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventFooter;
