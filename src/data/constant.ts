import AiStartupImage from "../../public/assets/images/ai-startup-landing-page.png";
import DarksassLandingPage from "../../public/assets/images/dark-saas-landing-page.png";
import LightSaasLandingPage from "../../public/assets/images/light-saas-landing-page.png";

export const headerLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "about",
    path: "#",
  },
  {
    label: "Projects",
    path: "#projects",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

export const projects = [
  {
    year: "2023",
    title: "AI Startup Landing Page",
    company: "ACUME",
    results: [
      { title: "Enhanced User experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 33%" },
    ],
    link: "/",
    image: DarksassLandingPage,
  },
  {
    year: "2023",
    title: "AI Startup Landing Page",
    company: "ACUME",

    results: [
      { title: "Enhanced User experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 33%" },
    ],
    link: "/",
    image: LightSaasLandingPage,
  },
  {
    year: "2023",
    title: "AI Startup Landing Page",
    company: "ACUME",

    results: [
      { title: "Enhanced User experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 33%" },
    ],
    link: "/",
    image: AiStartupImage,
  },
];
