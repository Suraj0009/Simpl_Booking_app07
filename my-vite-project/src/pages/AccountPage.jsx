import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link } from "react-router-dom";

export default function AccountPage() {
  const { user } = useContext(UserContext);

  return (
    <nav className=" justify-center w-full flex mt-10 gap-4">
    <Link  className="px-4 py-2 bg-primary rounded-full  " to={''} > My profile</Link>
    <Link  className="px-4 py-2 bg-gray-300 rounded-full  "to={''} > My Bookings</Link>
    <Link className="px-4 py-2 bg-gray-300 rounded-full    " to={''} > My Accomodations</Link>



    </nav>
  );
}


// Function to handle logout
async function logout() {
  // You can implement the logout logic here
}
