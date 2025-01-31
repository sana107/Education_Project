// import React, { useState, useEffect } from "react";
// import { Shield, Send } from "lucide-react";
// import Swal from "sweetalert2"; // SweetAlert2 for success/error messages
// import axios from "axios"; // To handle API requests
// import { baseUrl } from "../../Config"; // Make sure your API URL is correct
// import { useLocation, useNavigate } from "react-router-dom";

// const OTPVerification = () => {
//   const [otp, setOtp] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   const location = useLocation();
//   const { userId, otps } = location.state || {};
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Get the phone number from localStorage (or pass as prop)
//     const storedPhoneNumber = localStorage.getItem("userPhoneNumber");
//     if (storedPhoneNumber) {
//       setPhoneNumber(storedPhoneNumber);
//       sendOtp(storedPhoneNumber); // Send OTP when component loads
//     } else {
//       // Redirect if phone number is not found
//       // window.location.href = '/signup';
//     }
//   });

//   const handleNumberClick = (number) => {
//     if (otp.length < 6) {
//       setOtp((prev) => prev + number);
//     }
//   };

//   const handleDelete = () => {
//     setOtp((prev) => prev.slice(0, -1));
//   };

//   const handleVerify = async () => {
//     if (otp.length === 6) {
//       try {
//         // Make API request to verify OTP
//         const response = await axios.post(`${baseUrl}/user/verify-otp`, {
//           number: phoneNumber,
//           otp,
//         });

//         if (response.data.status) {
//           // Show success SweetAlert popup when OTP is valid
//           Swal.fire({
//             icon: "success",
//             title: "Your Account is Ready to Use",
//             text: "You will be redirected to the Home Page in a Few Seconds.",
//             timer: 3000, // Redirect after 3 seconds
//             showConfirmButton: false,
//           }).then(() => {
//             window.location.href = "/"; // Redirect to Home Page
//           });
//         } else {
//           // Show error SweetAlert when OTP is invalid
//           Swal.fire({
//             icon: "error",
//             title: "Invalid OTP",
//             text: "Please try again.",
//           });
//         }
//       } catch (error) {
//         console.error("Error during OTP verification:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Something went wrong",
//           text: "Please try again later.",
//         });
//       }
//     }
//   };

//   const sendOtp = async (phoneNumber) => {
//     try {
//       // Call the backend API to send OTP
//       const response = await axios.post(`${baseUrl}/user/send-otp`, {
//         number: phoneNumber,
//       });

//       if (response.data.status) {
//         setOtpSent(true);
//         Swal.fire({
//           icon: "info",
//           title: "OTP Sent!",
//           text: `We sent an OTP to ${phoneNumber}`,
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Failed to Send OTP",
//           text: response.data.message,
//         });
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Error Sending OTP",
//         text: "Please try again later.",
//       });
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-light">
//       <div
//         className="card shadow-lg"
//         style={{ maxWidth: "400px", width: "100%" }}
//       >
//         <div className="card-body text-center">
//           {/* Header Illustration */}
//           <div
//             className="d-flex justify-content-center align-items-center mb-4"
//             style={{
//               width: "80px",
//               height: "80px",
//               backgroundColor: "#fdecea",
//               borderRadius: "50%",
//               margin: "0 auto",
//             }}
//           >
//             <Shield
//               className="text-danger"
//               style={{ width: "40px", height: "40px" }}
//             />
//           </div>
//           <h2 className="card-title h5 text-dark">Verification Code</h2>
//           <p className="text-muted">
//             We sent a verification code to your number
//           </p>
//           <p className="text-dark fw-bold">{phoneNumber}</p>

//           {/* OTP Display */}
//           <div className="mb-4 border">
//             <div className="p-3 bg-light rounded">
//               <p className="h4 text-center fw-monospace">
//                 {otp.padEnd(6, "•")}
//               </p>
//             </div>
//           </div>

//           {/* Numpad */}
//           <div className="row g-2">
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
//               <div className="col-4" key={num}>
//                 <button
//                   onClick={() => handleNumberClick(num)}
//                   className="btn btn-light w-100 py-3 fw-bold border"
//                 >
//                   {num}
//                 </button>
//               </div>
//             ))}
//             <div className="col-4">
//               <button
//                 onClick={() => handleNumberClick(0)}
//                 className="btn btn-light w-100 py-3 fw-bold border"
//               >
//                 0
//               </button>
//             </div>
//             <div className="col-4">
//               <button
//                 onClick={handleDelete}
//                 className="btn btn-light text-danger w-100 py-3 fw-bold border"
//               >
//                 &larr;
//               </button>
//             </div>
//           </div>

//           {/* Verify Button */}
//           <button
//             onClick={handleVerify}
//             className="btn btn-danger w-100 mt-4 py-3 fw-bold text-white"
//             disabled={otp.length !== 6} // Disable the button if OTP is not 6 digits
//           >
//             Verify
//           </button>

//           {/* Resend Option */}
//           <div className="mt-3 text-center">
//             <button
//               onClick={() => sendOtp(phoneNumber)} // Resend OTP when clicked
//               className="btn btn-link text-muted d-flex align-items-center justify-content-center"
//             >
//               <Send
//                 className="me-2"
//                 style={{ width: "16px", height: "16px" }}
//               />{" "}
//               Resend Code
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTPVerification;

import React, { useState, useEffect } from "react";
import { Shield, Send } from "lucide-react";
import Swal from "sweetalert2"; // SweetAlert2 for success/error messages
import axios from "axios"; // To handle API requests
import { baseUrl } from "../../Config"; // Make sure your API URL is correct
import { Email } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const location = useLocation();
  const { userId, otps } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("userPhoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
      sendOtp(storedPhoneNumber); // Send OTP when component loads
    } else {
      // Redirect if phone number is not found
      // window.location.href = '/signup';
    }
  });

  const handleChange = (e) => {
    // Only allow numbers
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      // Match only numbers and limit to 6 digits
      setOtp(value);
    }
  };

  const handleVerify = async () => {
    if (otp.length === 6) {
      try {
        // Make API request to verify OTP
        const response = await axios.post(`${baseUrl}/user/verify-otp`, {
          userId,
          otp: otp,
        });
        console.log(otp);

        if (response.data.status) {
          alert(response.data.message);
          navigate("/");
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error during OTP verification:", error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later.",
        });
      }
    }
  };

  const sendOtp = async (phoneNumber) => {
    try {
      // Call the backend API to send OTP
      const response = await axios.post(`${baseUrl}/user/send-otp`, {
        number: phoneNumber,
      });

      if (response.data.status) {
        setOtpSent(true);
        Swal.fire({
          icon: "info",
          title: "OTP Sent!",
          text: `We sent an OTP to ${phoneNumber}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Send OTP",
          text: response.data.message,
        });
      }
    } catch (error) {
      // console.error("Error sending OTP:", error);
      // Swal.fire({
      //   icon: "error",
      //   title: "Error Sending OTP",
      //   text: "Please try again later.",
      // });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body text-center">
          {/* Header Illustration */}
          <div
            className="d-flex justify-content-center align-items-center mb-4"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#fdecea",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          >
            <Shield
              className="text-danger"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <h2 className="card-title h5 text-dark">Verification Code</h2>
          <p className="text-muted">
            We sent a verification code to your number
          </p>

          <p className="text-dark fw-bold">{phoneNumber}</p>

          {/* {/ OTP Input Field /} */}
          <div className="mb-4">
            <input
              type="text" // Changed to text to prevent number input restrictions
              value={otp}
              onChange={handleChange}
              maxLength={6}
              className="form-control form-control-lg text-center"
              style={{ color: "gray" }}
              placeholder="Enter OTP"
            />
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="btn btn-danger w-100 mt-4 py-3 fw-bold text-white"
            disabled={otp.length !== 6} // Disable the button if OTP is not 6 digits
          >
            Verify
          </button>

          {/* Resend Option */}
          <div className="mt-3 text-center">
            <button
              onClick={() => sendOtp(phoneNumber)} // Resend OTP when clicked
              className="btn btn-link text-muted d-flex align-items-center justify-content-center"
            >
              <Send
                className="me-2"
                style={{ width: "16px", height: "16px" }}
              />{" "}
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
