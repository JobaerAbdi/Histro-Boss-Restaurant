import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const navigate = useNavigate();
  const { googleSignUp } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
            name: user.displayName,
            email: user.email
        }

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User added successful to DB",
                showConfirmButton: false,
                timer: 2000,
              });
            }
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center mb-6">
      <button
        onClick={handleGoogleSignUp}
        className="btn btn-circle btn-outline btn-primary"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
