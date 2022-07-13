import NavLinks from "./NavLinks";
import Logo from "../components/Logo";

import { useSelector } from "react-redux";

import Wrapper from "../assets/wrappers/BigSidebar";


const BigSidebar = () => {
  
  
  
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <>
      <Wrapper>
        <div
          className={
            isSidebarOpen
              ? "sidebar-container "
              : "sidebar-container show-sidebar"
          }
        >
          <div className="content">
            <header style={{ marginLeft: '-20px'}}>
              <Logo />
            </header>
            <NavLinks />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default BigSidebar;