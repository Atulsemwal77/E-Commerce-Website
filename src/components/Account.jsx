import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Access user details

  return (<>
    <div className="container mt-2">
      <h1>Welcome, {user?.name || "User"}</h1>
      <p>Email: {user?.email}</p>
      <p>Password: {user?.password}</p>
    </div>
    <center>
      <Link to =  "/"><div class="btn btn-outline-danger"> Back to Home </div>   </Link>
    </center>

    
    </>
  );
};

export default Account;
