import React from "react";
// import LandingPage from "@/pages/LandingPage";
import LandingPage from "../components/LandingPage";

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Rashin WebDev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Front-end Developer', 'Back-end Developer', 'django', 'Senior Fullstack Developer'],
  authors: [{ name: 'Rashin Latify' }, { name: 'Rashin Latify', url: 'https://www.rashin-web-dev.com/' }],
  creator: 'Rashin Latify',
  publisher: 'Rashin Latify',
  robots: {
    index: true,
    follow: true,
  },
  title: "Rashin WebDev",
  description: "Experienced Fullstack Developer with a proven track record of delivering complex web projects.  Proficient in React.js, Next.js, Python, and Django REST Framework.  Let's build something amazing together! ",
};


// const Home = () => {
 
//   return (
//     <>
//         <LandingPage />
//     </>


//   );
// };

// export default React.memo(Home);


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const page = () => {
  return <LandingPage />;
};

export default page;

