import Image from "next/image";
import logo from "./logo.png";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  userOut,
  superAdminOut,
  hideBlog,
  hideLead,
  hideJob,
  hideSettings,
  hideTeam,
} from "../../redux/actions";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";
export default function sideBar({career,settings,team, leadState,blog} ) {
  const router = useRouter();
  const dispatch = useDispatch();
  const superAdmin = useSelector((state) => state.superAdminControll);
 
  const [state, setState] = useState(false);

  

  const logout = async () => {
    dispatch(userOut());
    dispatch(superAdminOut());
    await Cookies.set('Admin',false)
    await Cookies.set('career',false)
    await Cookies.set('leads',false)
    await  Cookies.set('settings',false)
    await  Cookies.set('blog',false)
    await  Cookies.set('team',false)
    router.push({
      pathname: "/admin@ck",
    });
  
  };
  return (
    <div className="collapse__bar">
    
      <div className="sidebar__collapse__content">
        { leadState == 'true' ? (
          <Link href="/admin/leads">
            <div
              className={
                router.pathname == "/admin/leads"
                  ? "sidebar__collapse__item__active"
                  : "sidebar__collapse__item"
              }
            >
              <SupervisedUserCircleIcon id="sidebar__item__icon" />
              <h3>Leads</h3>
            </div>
          </Link>
        ) : (
          ""
        )}

{blog == 'true' ? <div
          className={
            router.pathname == "/admin/blogs"
              ? "sidebar__collapse__item__active"
              : "sidebar__collapse__item"
          }
        >
          <MenuBookIcon id="sidebar__item__icon" />
          <h3>Blogs</h3>
        </div> :  ''}
        
        {team == 'true' ?  <Link href="/admin/team">
          <div
            className={
              router.pathname == "/admin/team"
                ? "sidebar__collapse__item__active"
                : "sidebar__collapse__item"
            }
          >
            <PeopleIcon id="sidebar__item__icon" />
            <h3>Team</h3>
          </div>
        </Link> : ''}
       
       {career == 'true' ? <Link href="job">
          <div
            className={
              router.pathname == "/admin/job"
                ? "sidebar__collapse__item__active"
                : "sidebar__collapse__item"
            }
          >
            <FileCopyIcon id="sidebar__item__icon" />
            <h3>Job Applicants</h3>
          </div>
        </Link> : ''}
        {career == 'true' ? <Link href="openings">
          <div
            className={
              router.pathname == "/admin/openings"
                ? "sidebar__collapse__item__active"
                : "sidebar__collapse__item"
            }
          >
            <FileCopyIcon id="sidebar__item__icon" />
            <h3>Job Openings</h3>
          </div>
        </Link> : ''}
        
        {settings == 'true' ? (
          <Link href="settings">
            <div
              className={
                router.pathname == "/admin/settings"
                  ? "sidebar__collapse__item__active"
                  : "sidebar__collapse__item"
              }
            >
              <SettingsIcon id="sidebar__item__icon" />

              <h3>Site Settings</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="admin__logout pl-3">
        <p style={{ fontSize: "13px" }}>
          {" "}
          {superAdmin ? "Super Admin" : "Admin"}{" "}
        </p>

        <div onClick={logout} className="flex pt-1">
          <DoNotDisturbOnRoundedIcon />

          <p className="ml-1">Logout</p>
        </div>
      </div>
    </div>
  );
}
