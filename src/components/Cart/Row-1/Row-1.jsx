import "../Row-1/Row-1.scss";

import { Field, ErrorMessage } from "formik";

const RowOne = () => {
  return(
    <div className="row-1">
      <div>
        <label htmlFor="firstName">First Name</label> <br />
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName" component="div" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label> <br />
        <Field type="text" id="lastName" name="lastName" />
        <ErrorMessage name="lastName" component="div" />
      </div>
    </div>
  );
};

export default RowOne;
