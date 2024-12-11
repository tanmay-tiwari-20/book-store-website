import { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthPage = () => {
  const [showSignup, setShowSignup] = useState(true); // Track which component to show

  return (
    <div>
      {showSignup ? (
        <Signup onSwitch={() => setShowSignup(false)} />
      ) : (
        <Login onSwitch={() => setShowSignup(true)} />
      )}
    </div>
  );
};

export default AuthPage;
