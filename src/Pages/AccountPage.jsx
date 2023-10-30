import React from "react";
import AccNav from "../Components/Account/AccNav";
import { Outlet } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="container-fluid w-75 py-2">
      <div className="row">
        <div className="col-3">
          <AccNav />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
