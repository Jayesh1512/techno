import logo1 from '../assets/icons/hero/logo-1.svg'
import logo2 from '../assets/icons/hero/logo-2.svg'
import logo3 from '../assets/icons/hero/logo-3.svg'


const navLinks = [
  {
    id: 0,
    title: "Home",
    link: "/"
  },
  {
    id: 1,
    title: "Company",
    link: "/"
  },
  {
    id: 2,
    title: "Stories",
    link: "/"
  }
];

const featured = [
  {
    id: 1,
    name: "Founded by Apple, IIM & Engineering Experts",
    logo: logo1,
  },
  {
    id: 1,
    name: "Precision AI Bots for Specific Business Tasks",
    logo: logo2,
  },
  {
    id: 1,
    name: "From Blockchain to SEO - End-to-End Digital Solutions",
    logo: logo3,
  },
];

    const cardFeatures = [
      {
        id: 1,
        name: "Access to All Features",
      },
      {
        id: 2,
        name: "20% discount on backorders",
      },
      {
        id: 3,
        name: "Domain Name Appraisal ",
      },
      {
        id: 4,
        name: "10 Social Profiles",
      },
      {
        id: 5,
        name: "Calendar view",
      },
      {
        id: 6,
        name: "24/7 support",
      },
    ];

export const config = {
    navLinks,
    featured,
    cardFeatures
}