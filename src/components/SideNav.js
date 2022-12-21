import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../components/css/SideNav.css';
import Property from '../pages/body';
// import '../components/css/Navbar.css';

function SideNav() {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(!show);
  };

  const flexed = {
    flexDirection: ['fd-Row', 'fd-RowReverse', 'fd-column', 'fd-ColumnReverse'],
    flexWrap: ['fw-NoWrap', 'fw-Wrap', 'fw-WrapReverse'],
    alignItems: [
      'ai-FlexStart',
      'ai-FlexEnd',
      'ai-Center',
      'ai-Baseline',
      'ai-stretch',
    ],
    justifyContent: [
      'jc-FlexStart',
      'jc-FlexEnd',
      'jc-SpaceBetween',
      'jc-Center',
      'jc-SpaceAround',
    ],
    alignContent: [
      'ac-FlexStart',
      'ac-FlexEnd',
      'ac-Center',
      'ac-SpaceBetween',
      'ac-SpaceAround',
      'ac-Stretch',
    ],
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
              <div className="navProperties">
                <h2 className="headerProperty">
                  Properties for the flex container
                </h2>

                <h6
                  className="individualProperties"
                  onClick={() => {
                    Property(flexed.flexDirection);
                  }}
                >
                  Flex-Direction
                </h6>
                <h6 className="individualProperties">Flex-Wrap</h6>
                <h6 className="individualProperties">Align-Items</h6>
                <h6 className="individualProperties">Justify-Content</h6>
                <h6 className="individualProperties">Align-Content</h6>
              </div>

              <div className="navProperties">
                <h2 className="headerProperty">
                  Properties for the flex items
                </h2>

                <h6 className="individualProperties">Align-Self</h6>
                <h6 className="individualProperties">Flex-Grow</h6>
                <h6 className="individualProperties">Flex</h6>
                <h6 className="individualProperties">Order</h6>
              </div>
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default SideNav;
