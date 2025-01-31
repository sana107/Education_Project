// import React, { useState } from "react";
// import { Facebook, MessageCircle } from "lucide-react";
// import "./Refferal.css";
// import { FaWhatsapp } from "react-icons/fa";
// import { Send } from "lucide-react";
// import PaymentNotification from "./PaymentNotification";

// const Referral = () => {
//   const [referralCode, setReferralCode] = useState("EDSFIZ");
//   const [upiId, setUpiId] = useState("");
//   const [isComponentVisible, setIsComponentVisible] = useState(false);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(referralCode);
//   };

//   const handleReferClick = () => {
//     setIsComponentVisible(true);
//   };

//   const ReferralSuccess = () => (
//     <div className="alert alert-success mt-3" role="alert">
//       Your referral request has been submitted successfully!
//     </div>
//   );

//   return (
//     <div className="d-flex align-items-center justify-content-center text-white p-4">
//       <div className="card shadow border-0 w-100" style={{ maxWidth: "100%" }}>
//         <div className="card-body text-white">
//           <div id="ref_img" className="text-center mb-4 p-4 ">
//             <h2 className="fs-5 fw-semibold">Get your friends to purchase</h2>
//             <h1 className="fs-4 fw-bold">Mytestlibrary</h1>
//             <p className="mb-0">using your referral code and</p>

//             <div
//               className="bg-white p-1 mt-1 rounded shadow text-dark mx-auto d-flex align-items-center justify-content-center flex-column"
//               style={{ maxWidth: "300px", height: "80px" }}
//             >
//               <p className="fs-5 fw-semibold mb-1 mt-1">
//                 Win up to 10% Cashback
//               </p>
//               <p>directly in your Bank Account</p>
//             </div>
//           </div>

//           {/* Referral Code Section */}
//           <div className="mb-3">
//             <label className="form-label">Your code:</label>
//             <div className="input-group">
//               <input
//                 type="text"
//                 value={referralCode}
//                 readOnly
//                 className="form-control"
//               />
//               <button
//                 className="btn btn-outline-secondary"
//                 onClick={copyToClipboard}
//               >
//                 📋
//               </button>
//             </div>
//           </div>

//           {/* Social Share Buttons */}
//           <div className="d-flex justify-content-center gap-2 mb-3">
//             <button
//               className="btn rounded-circle text-white"
//               style={{ backgroundColor: "#168AFF" }}
//             >
//               <MessageCircle size={24} />
//             </button>
//             <button className="btn btn-dark rounded-circle">
//               <Facebook size={24} />
//             </button>
//             <button
//               className="btn rounded-circle text-white border-0"
//               style={{ backgroundColor: "#25D366" }}
//             >
//               <FaWhatsapp className="fs-4" />
//             </button>
//             <button
//               className="btn rounded-circle text-white border-0"
//               style={{ backgroundColor: "#168AFF" }}
//             >
//               <Send />
//             </button>
//           </div>

//           {/* UPI Section */}
//           <div className="mb-4">
//             <label className="form-label">Your UPI ID</label>
//             <input
//               type="text"
//               value={upiId}
//               onChange={(e) => setUpiId(e.target.value)}
//               placeholder="Enter UPI ID e.g. Q32345456577"
//               className="form-control"
//             />
//           </div>

//           <div className="text-center mb-4 ">
//             <button
//               className="btn  w-sm mb-3 "
//               style={{ backgroundColor: "#25D366" }}
//               onClick={handleReferClick}
//             >
//               Refer & Earn
//             </button>
//           </div>

//           {/* Conditional Component Rendering */}
//           {isComponentVisible && <PaymentNotification />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Referral;

import React, { useState, useEffect } from "react";
import { Facebook, MessageCircle } from "lucide-react";
import "./Refferal.css";
import { FaWhatsapp } from "react-icons/fa";
import { Send } from "lucide-react";
import PaymentNotification from "./PaymentNotification";

const Referral = () => {
  const [referralCode, setReferralCode] = useState(""); // Empty initial state
  const [upiId, setUpiId] = useState("");
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
    // Generate referral code when component mounts
    setReferralCode(generateReferCode());
  }, []);

  // Function to generate a random referral code
  function generateReferCode(length = 6) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
  };

  const handleReferClick = () => {
    setIsComponentVisible(true);
  };

  const ReferralSuccess = () => (
    <div className="alert alert-success mt-3" role="alert">
      Your referral request has been submitted successfully!
    </div>
  );

  return (
    <div className="d-flex align-items-center justify-content-center text-white p-4">
      <div className="card shadow border-0 w-100" style={{ maxWidth: "100%" }}>
        <div className="card-body text-white">
          <div id="ref_img" className="text-center mb-4 p-4">
            <h2 className="fs-5 fw-semibold">Get your friends to purchase</h2>
            <h1 className="fs-4 fw-bold">Mytestlibrary</h1>
            <p className="mb-0">using your referral code and</p>

            <div
              className="bg-white p-1 mt-1 rounded shadow text-dark mx-auto d-flex align-items-center justify-content-center flex-column"
              style={{ maxWidth: "300px", height: "80px" }}
            >
              <p className="fs-5 fw-semibold mb-1 mt-1">
                Win up to 10% Cashback
              </p>
              <p>directly in your Bank Account</p>
            </div>
          </div>

          {/* Referral Code Section */}
          <div className="mb-3">
            <label className="form-label">Your code:</label>
            <div className="input-group">
              <input
                type="text"
                value={referralCode}
                readOnly
                className="form-control"
              />
              <button
                className="btn btn-outline-secondary"
                onClick={copyToClipboard}
              >
                📋
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="d-flex justify-content-center gap-2 mb-3">
            <button
              className="btn rounded-circle text-white"
              style={{ backgroundColor: "#168AFF" }}
            >
              <MessageCircle size={24} />
            </button>
            <button className="btn btn-dark rounded-circle">
              <Facebook size={24} />
            </button>
            <button
              className="btn rounded-circle text-white border-0"
              style={{ backgroundColor: "#25D366" }}
            >
              <FaWhatsapp className="fs-4" />
            </button>
            <button
              className="btn rounded-circle text-white border-0"
              style={{ backgroundColor: "#168AFF" }}
            >
              <Send />
            </button>
          </div>

          {/* UPI Section */}
          <div className="mb-4">
            <label className="form-label">Your UPI ID</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter UPI ID e.g. Q32345456577"
              className="form-control"
            />
          </div>

          <div className="text-center mb-4">
            <button
              className="btn btn-danger w-sm py-2 rounded-4 fw-bold"
              style={{
                background: "linear-gradient(135deg, #DC3545 0%, #FF4757 100%)",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
              onClick={handleReferClick}
            >
              Refer & Earn
            </button>
          </div>

          {/* Conditional Component Rendering */}
          {isComponentVisible && <PaymentNotification />}
        </div>
      </div>
    </div>
  );
};

export default Referral;
