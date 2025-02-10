import { createSlice } from "@reduxjs/toolkit";

const Bookslice = createSlice({
  name: "Book",
  initialState: {
    tabData: [
      {
        category: "Recommended",
        label: "6 Books",
        span: "Banking Exams",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        exams: [
          {
            title: "SBI Bank",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
          {
            title: "HDFC Bank",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
          {
            title: "RBI Bank",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
          {
            title: "BOB PO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
          {
            title: "IDBI Bank",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
          {
            title: "Axis Bank",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
          {
            title: "PNB SO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Recommended",
          },
        ],
      },
      {
        category: "SSC",
        label: "30 Books",
        span: "SSC Exams",
        image:
          "https://careeravenues.info/wp-content/uploads/2023/05/SSC-CGL.jpg",
        exams: [
          {
            title: "SSC CGL",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
          {
            title: "SSC CHSL",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
          {
            title: "SSC MTS",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
          {
            title: "SSC JE",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
          {
            title: "SSC LDC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
          {
            title: "SSC Stenographer",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
          {
            title: "SSC GD",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "SSC",
          },
        ],
      },
      {
        category: "Teaching",
        label: "20 Books",
        span: "Teaching Exams",
        image:
          "https://images.shiksha.com/mediadata/images/articles/1653393633phphF03nQ.jpeg",
        exams: [
          {
            title: "CTET",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
          {
            title: "TET",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
          {
            title: "UPTET Paper 1",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
          {
            title: "UPTET Paper 2",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
          {
            title: "UPTET Primary Level",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
          {
            title: "UPTET Upper Primary Level",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
          {
            title: "UPTET Special Education",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Teaching",
          },
        ],
      },
      {
        category: "More",
        label: "30 Books",
        span: "SSC Exams",
        image:
          "https://formnotice.com/wp-content/uploads/2023/09/Screenshot-2023-09-07-4.05.53-PM.png.webp",
        exams: [
          {
            title: "RBI Assistant",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
          {
            title: "IBPS PO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
          {
            title: "SBI Clerk",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
          {
            title: "SBI PO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
          {
            title: "NABARD Grade A",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
          {
            title: "LIC AAO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
          {
            title: "GIC Assistant Manager",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "More",
          },
        ],
      },

      {
        category: "Defence",
        label: "30 Books",
        span: "Defence Exams",
        image:
          "https://formnotice.com/wp-content/uploads/2023/09/Screenshot-2023-09-07-4.05.53-PM.png.webp",
        exams: [
          {
            title: "Indian Army",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "Indian Navy",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "Indian Air Force",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "CDS",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "NDA",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "MNS",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "TA",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
        ],
      },
      {
        category: "Railway",
        label: "30 Books",
        span: "Railway Exams",
        image:
          "https://formnotice.com/wp-content/uploads/2023/09/Screenshot-2023-09-07-4.05.53-PM.png.webp",
        exams: [
          {
            title: "RRB Group D",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "RRB JE",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "RRB NTPC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "RRB ALP",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "RRB Stenographer",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "RRB SSE",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
          {
            title: "RRB Ministerial",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Defence",
          },
        ],
      },
      {
        category: "StateExams",
        label: "40 Books",
        span: "State-Level Competitive Exams",
        image: "https://example.com/state-exams-image.png",
        exams: [
          {
            title: "UPPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
          {
            title: "MPPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
          {
            title: "BPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
          {
            title: "APPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
          {
            title: "TNPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
          {
            title: "KPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
          {
            title: "PPSC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "StateExams",
          },
        ],
      },
      {
        category: "GovernmentExams",
        label: "50 Books",
        span: "General Government Exams",
        image: "https://example.com/government-exams-image.png",
        exams: [
          {
            title: "UPSC IAS",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
          {
            title: "UPSC IPS",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
          {
            title: "SSC CGL",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
          {
            title: "SSC CHSL",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
          {
            title: "Bank PO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
          {
            title: "Railway NTPC",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
          {
            title: "LIC AAO",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "GovernmentExams",
          },
        ],
      },
    ],
    tabExam: [
      {
        category: "Recommended",
        label: "6 Test",
        span: "Banking Tests",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        exams: [
          {
            title: "SBI Bank Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "HDFC Bank Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RBI Bank Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "BOB PO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "IDBI Bank Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "Axis Bank Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "PNB SO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "SSC",
        label: "30 Test",
        span: "SSC Tests",
        image:
          "https://careeravenues.info/wp-content/uploads/2023/05/SSC-CGL.jpg",
        exams: [
          {
            title: "SSC CGL Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC CHSL Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC MTS Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC JE Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC LDC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC Stenographer Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC GD Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "Teaching",
        label: "20 Test",
        span: "Teaching Tests",
        image:
          "https://images.shiksha.com/mediadata/images/articles/1653393633phphF03nQ.jpeg",
        exams: [
          {
            title: "CTET Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "TET Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "UPTET Paper 1 Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "UPTET Paper 2 Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "UPTET Primary Level Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "UPTET Upper Primary Level Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "UPTET Special Education Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "More",
        label: "30 Test",
        span: "More Tests",
        image:
          "https://formnotice.com/wp-content/uploads/2023/09/Screenshot-2023-09-07-4.05.53-PM.png.webp",
        exams: [
          {
            title: "RBI Assistant Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "IBPS PO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SBI Clerk Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SBI PO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "NABARD Grade A Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "LIC AAO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "GIC Assistant Manager Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "Defence",
        label: "30 Test",
        span: "Defence Tests",
        image:
          "https://formnotice.com/wp-content/uploads/2023/09/Screenshot-2023-09-07-4.05.53-PM.png.webp",
        exams: [
          {
            title: "Indian Army Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "Indian Navy Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "Indian Air Force Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "CDS Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "NDA Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "MNS Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "TA Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "Railway",
        label: "30 Test",
        span: "Railway Tests",
        image:
          "https://formnotice.com/wp-content/uploads/2023/09/Screenshot-2023-09-07-4.05.53-PM.png.webp",
        exams: [
          {
            title: "RRB Group D Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RRB JE Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RRB NTPC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RRB ALP Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RRB Stenographer Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RRB SSE Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "RRB Ministerial Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "StateExams",
        label: "40 Test",
        span: "State-Level Tests",
        image: "https://example.com/state-exams-image.png",
        exams: [
          {
            title: "UPPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "MPPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "BPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "APPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "TNPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "KPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "PPSC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
      {
        category: "GovernmentExams",
        label: "50 Test",
        span: "General Government Tests",
        image: "https://example.com/government-exams-image.png",
        exams: [
          {
            title: "UPSC IAS Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "UPSC IPS Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC CGL Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "SSC CHSL Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "Bank PO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "Railway NTPC Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
          {
            title: "LIC AAO Test",
            logo: "https://i.ibb.co/kgRjs3g/image-18.png",
            link: "Test",
          },
        ],
      },
    ],
  },
  reducers: {
    ManageBoks: (state, action) => {
      return {};
    },
    ManageTest: (state, action) => {
      return {};
    },
  },
});

export default Bookslice.reducer;
