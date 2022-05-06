// Higher Order Component (HOC) - A component (HOC) that renders another component
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);

const requareAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login first.</p>
      )}
    </div>
  );
};
const AuthInfo = requareAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="some info props" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuth={true} info="Some private info" />,
  document.getElementById("app")
);
