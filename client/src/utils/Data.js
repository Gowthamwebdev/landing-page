import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";

export const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
  ];

export const varieties = [
  {
    label:'Unisex Watches',
    img:Img1
  },
  {
    label:'Best fit',
    img:Img2
  },
  {
    label:'Enhanced comfortness',
    img:Img3
  }
]

export 
const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];