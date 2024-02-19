import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "home",
    // icon: <MailOutlined />,
    label: <Link to={"/"}>Home</Link>,
  },
  {
    key: "payment",
    // icon: <MailOutlined />,
    label: <Link to={"/payment"}>payment</Link>,
  },
];

export const Navbar = () => {
  return <Menu mode="horizontal" items={items} theme="dark" />;
};
