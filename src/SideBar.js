import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={<InboxIcon />}
        title="Inbox"
        number={45}
        selected={true}
      />
      <SidebarOption Icon={<StarIcon />} title="Starred" number={11} />
      <SidebarOption Icon={<AccessTimeIcon />} title="Snoozed" number={45} />
      <SidebarOption
        Icon={<LabelImportantIcon />}
        title="Important"
        number={17}
      />
      <SidebarOption Icon={<NearMeIcon />} title="Sent" number={45} />
      <SidebarOption Icon={<NoteIcon />} title="Draft" number={45} />
      <SidebarOption Icon={<ExpandMoreIcon />} title="More" number={45} />
    </div>
  );
}

export default SideBar;
