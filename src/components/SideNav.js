import React, { useState } from 'react';
import { UserContext } from '../utils/UserProvider';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../components/css/SideNav.css';

function SideNav() {
  const [show, setShow] = useState(false);
  const [state, dispatch] = React.useContext(UserContext);

  const close = () => {
    setShow(!show);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="hamburger">
            <FaIcons.FaBars onClick={close} />
          </div>
          <nav className={show ? 'nav-menu active' : 'nav-menu'}>
            <div className="nav-menu-items" onClick={close}>
              <div className="navbar-toggle">
                <AiIcons.AiOutlineClose />
              </div>
              <div className="navPropertiesWrapper">
                <div className="navProperties">
                  <h2 className="headerProperty">
                    Properties for the flex container
                  </h2>

                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Flex-Direction' });
                    }}
                  >
                    Flex-Direction
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Flex-Wrap' });
                    }}
                  >
                    Flex-Wrap
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Align-Items' });
                    }}
                  >
                    Align-Items
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Justify-Content' });
                    }}
                  >
                    Justify-Content
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Align-Content' });
                    }}
                  >
                    Align-Content
                  </h6>
                </div>

                <div className="navProperties" id="navPropertiesFlexItem">
                  <h2 className="headerProperty">
                    Properties for the flex items
                  </h2>

                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Align-Self' });
                    }}
                  >
                    Align-Self
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Flex-Grow' });
                    }}
                  >
                    Flex-Grow
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Flex' });
                    }}
                  >
                    Flex
                  </h6>
                  <h6
                    className="individualProperties"
                    onClick={() => {
                      dispatch({ type: 'Order' });
                    }}
                  >
                    Order
                  </h6>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default SideNav;
