import ProtoTypes from "prop-types";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import tempIcon from "../../assets/img/icon/temp.png";
import SearchModal from "../SearchModal";
import SidebarMenu from "../SidebarMenu";
import FontAwesome from "../uiStyle/FontAwesome";
import { menus, menusDark } from "./menu.data";

const MainMenu = ({ className, dark }) => {
  const [searchShow, setSearchShow] = useState(false);
  const [sideShow, setSideShow] = useState(false);

  const arr = dark ? menusDark : menus;
  return (
    <>
      <div className={`main-menu ${className ? className : ""}`} id="header">
        <Link to="#top" className="up_btn up_btn1">
          <FontAwesome name="chevron-double-up" />
        </Link>
        <div className="main-nav clearfix is-ts-sticky">
          <div className="container">
            <div className="row justify-content-between">
              <nav className="navbar navbar-expand-lg col-lg-8 align-self-center">
                <div className="site-nav-inner">
                  <button
                    className="navbar-toggler"
                    onClick={() => setSideShow(true)}
                  >
                    <FontAwesome name="bars" />
                  </button>
                  <div
                    id="navbarSupportedContent"
                    className="collapse navbar-collapse navbar-responsive-collapse"
                  >
                    <ul className="nav navbar-nav" id="scroll">
                      {arr.length > 0
                        ? arr.map((item, i) => (
                            <li
                              key={i}
                              className={`
                                                ${item.child ? "dropdown" : ""}
                                                nav-item`}
                            >
                              {item.child ? (
                                <NavLink
                                  onClick={(e) => e.preventDefault()}
                                  to="/"
                                  className="menu-dropdown"
                                  data-toggle="dropdown"
                                >
                                  {item.linkText}
                                  <FontAwesome name={item.icon} />
                                </NavLink>
                              ) : (
                                <NavLink
                                  to={item.link}
                                  className="menu-dropdown"
                                  data-toggle="dropdown"
                                >
                                  {item.linkText}{" "}
                                  <FontAwesome name={item.icon} />
                                </NavLink>
                              )}

                              {item.child ? (
                                <ul className="dropdown-menu" role="menu">
                                  {item.submenu.map((sub_item, i) => (
                                    <li
                                      key={i}
                                      className={`${
                                        sub_item.child
                                          ? "dropdown-submenu"
                                          : null
                                      }
                                                        `}
                                    >
                                      {sub_item.child ? (
                                        <NavLink
                                          onClick={(e) => e.preventDefault()}
                                          to="/"
                                        >
                                          {sub_item.linkText}
                                        </NavLink>
                                      ) : (
                                        <NavLink to={sub_item.link}>
                                          {sub_item.linkText}
                                        </NavLink>
                                      )}
                                      {sub_item.third_menu ? (
                                        <ul className="dropdown-menu">
                                          {sub_item.third_menu.map(
                                            (third_item, i) => (
                                              <li key={i}>
                                                <NavLink to={third_item.link}>
                                                  {third_item.linkText}
                                                </NavLink>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      ) : null}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <SidebarMenu
                    sideShow={sideShow}
                    setSideShow={setSideShow}
                    menus={arr}
                  />
                </div>
              </nav>
              <div className="col-lg-4 align-self-center">
                <div className="menu_right">
                  <div className="users_area">
                    <ul className="inline">
                      <li
                        className="search_btn"
                        onClick={() => setSearchShow(!searchShow)}
                      >
                        <FontAwesome name="search" />
                      </li>
                    </ul>
                  </div>
                  <div className="lang d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to="/">
                          <FontAwesome name="user-circle" />
                        </Link>
                        <ul>
                          <li>
                            <Link to="/">Login</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="temp d-none d-lg-block">
                    <div className="temp_wap">
                      <div className="temp_icon">
                        <img src={tempIcon} alt="temp icon" />
                      </div>
                      <h3 className="temp_count">13</h3>
                      <p>Brazlândia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchShow ? (
        <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
      ) : null}
    </>
  );
};

export default MainMenu;

MainMenu.propTypes = {
  className: ProtoTypes.string,
  dark: ProtoTypes.bool,
};
