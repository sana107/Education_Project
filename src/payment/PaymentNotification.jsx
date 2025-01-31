
import { Check } from "lucide-react";
import React, { useEffect } from "react";

const PaymentNotification = () => {
  useEffect(() => {
    // Trigger animation after component mounts
    const stars = document.querySelectorAll(".star-animate");
    stars.forEach((star, index) => {
      setTimeout(() => {
        star.style.opacity = "1";
        star.style.transform = "translateY(0) scale(1)";
      }, index * 200);
    });
  }, []);

  return (
    <div
      className="min-vh-100"
      style={{
        // background: "linear-gradient(135deg, #8B0000 0%, #CD5C5C 100%)",
        background: "linear-gradient(135deg, #DC3545 0%, #FF4757 100%)",
      }}
    >
      {/* Header */}
      <div className="container pt-4">
        <div className="d-flex align-items-center text-white">
          <button className="btn text-white p-0 me-3">
            <i className="bi bi-arrow-left" style={{ fontSize: "1.5rem" }}></i>
          </button>
          <h5 className="mb-0 fw-bold">Payment Successfull !</h5>
        </div>
      </div>


      {/* Course Info */}
      <div className="container mt-4">
        <div className="card bg-white bg-opacity-10 border-0 rounded-4">
          <div className="card-body text-white p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1 fw-bold">UP Police Constable</h6>
                <p className="small mb-0 opacity-75">Exams</p>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">₹399</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Card */}
      <div className="container mt-4">
        <div
          className="card border-0 rounded-4 text-center position-relative p-5"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
          }}
        >
          {/* Decorative Elements with Animation */}
          <div
            className="position-absolute star-animate"
            style={{
              top: "10%",
              left: "20%",
              color: "#FFD700",
              fontSize: "1.5rem",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          >
            ⭐
          </div>
          <div
            className="position-absolute star-animate"
            style={{
              top: "20%",
              right: "25%",
              color: "#FFD700",
              fontSize: "1.5rem",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          >
            ⭐
          </div>
          <div
            className="position-absolute star-animate"
            style={{
              top: "40%",
              left: "30%",
              color: "#FFD700",
              fontSize: "1.5rem",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          >
            ⭐
          </div>
          <div
            className="position-absolute rounded-circle star-animate"
            style={{
              top: "15%",
              right: "30%",
              width: "10px",
              height: "10px",
              backgroundColor: "#FF6B6B",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          ></div>

          {/* Animated dots */}
          <div
            className="position-absolute rounded-circle star-animate"
            style={{
              top: "15%",
              right: "30%",
              width: "10px",
              height: "10px",
              backgroundColor: "#FF6B6B",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle star-animate"
            style={{
              top: "35%",
              left: "25%",
              width: "10px",
              height: "10px",
              backgroundColor: "#4ECDC4",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle star-animate"
            style={{
              top: "25%",
              right: "20%",
              width: "10px",
              height: "10px",
              backgroundColor: "#45B7D1",
              opacity: "0",
              transform: "translateY(20px) scale(0.5)",
              transition: "all 0.5s ease-out",
            }}
          ></div>



          {/* Success Content */}
          <div className="mb-4">
            <div
              className="d-inline-block p-4 rounded-circle mb-3"
              style={{
                background: "linear-gradient(135deg, #D4F8E8 0%, #E8FFF3 100%)",
              }}
            >
              <Check
                className="text-success"
                style={{
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </div>
            <h4 className="mb-3 fw-bold z-10" style={{position:"relative"}}>Congratulations!</h4>
            <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
              Your payment was successful, and you've purchased a new course.
            </p>
            <a
              href="#"
              className="text-success text-decoration-none fw-bold"
              style={{
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Watch the Course
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PaymentNotification;
