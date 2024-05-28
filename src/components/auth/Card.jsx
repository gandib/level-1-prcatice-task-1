/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../hooks/useAuth";

const Card = ({ pageName, handleLogin, handleRegistration }) => {
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const { googleLogin, setLoading, user } = auth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleRegistration) {
      const data = {
        // name,
        email,
        password,
      };
      handleRegistration(data);
    }

    if (handleLogin) {
      const data = {
        email,
        password,
      };
      handleLogin(data);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin().catch(() => setLoading(false));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="flex justify-center my-12 min-h-screen">
      <div className="card card-compact w-3/4 h-1/2 bg-base-100 shadow-xl">
        <h1 className="flex justify-center  text-3xl font-bold my-4">
          {pageName}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* {pageName === "Registration" && (
            <div className="flex justify-center">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={name || "Name"}
                className="input input-bordered input-md w-4/5 mx-2 "
              />
            </div>
          )} */}
          <div className="flex justify-center my-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={email || "Email"}
              className="input input-bordered input-md w-4/5 mx-2 "
            />
          </div>
          <div className="flex justify-center mb-2">
            <input
              onChange={(e) => setPassWord(e.target.value)}
              type="password"
              placeholder={password || "Password"}
              className="input input-bordered input-md w-4/5 mx-2 "
            />
          </div>
          {pageName === "Login" ? (
            <p className="flex justify-center my-6">
              Have not any account? Please
              <Link
                to={"/Registration"}
                className="text-green-500 font-bold underline pl-2"
              >
                Registration
              </Link>
            </p>
          ) : (
            <p className="flex justify-center my-6">
              Already have an account? Please
              <Link
                to={"/login"}
                className="text-green-500 font-bold underline pl-2"
              >
                Signin
              </Link>
            </p>
          )}
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="btn w-1/2 bg-purple-500 text-white font-bold text-1xl"
            >
              Submit
            </button>
          </div>
        </form>
        {pageName === "Login" && (
          <div className="flex justify-center mb-12">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-secondary w-1/2 font-bold"
            >
              Continue With Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
