import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./Hero-pages/Home.jsx";
import Books from "./Books/Books.jsx";
import SBi from "./Books/Exams/Sb/SBi.jsx";
import { Provider } from "react-redux";
import store from "./features/Store.js";
import QuizQues from "./Component/Quiz/QuizQues.jsx";
import Refferal from "./payment/Refferal.jsx";
import Test from "./Test/Test.jsx";
import MyPurchase from "./payment/MyPurchase.jsx";
import OTPVerification from "./Loginorsignup/OTPVerification.jsx";
import LogSign from "./Loginorsignup/LogSign.jsx";
import SubExams from "./Hero-pages/Exam-preparing/SubExams.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}></Route>

      <Route path="/book/:category" element={<SBi />} />
      <Route path="/book" element={<Books />} />

      {/* monday */}
      <Route path="/mcq" element={<Test />}></Route>
      <Route path="/test" element={<QuizQues />}></Route>

      {/* tuesday */}
      <Route path="/refferal" element={<Refferal />} />

      <Route path="/payment" element={<MyPurchase />} />
      <Route path="/authentication" element={<LogSign />} />
      {/* <Route path='/login' element={<LoginSignup/>}/> */}
      <Route path="/otp" element={<OTPVerification />} />

      <Route path="/subexam" element={<SubExams />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
