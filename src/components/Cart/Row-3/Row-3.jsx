import "../Row-3/Row-3.scss";
import { Field, ErrorMessage } from "formik";

const RowThree = () => {
  return (
    <div className="row-3">
      <div>
        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Field type="tel" id="phoneNumber" name="phoneNumber" />
        <ErrorMessage name="phoneNumber" component="div" />
      </div>
    </div>
  );
};

export default RowThree;