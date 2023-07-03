import { BsEmojiSunglasses } from "react-icons/bs";
import {
  LuActivity,
  LuAlarmCheck,
  LuAlertCircle,
  LuAirplay,
} from "react-icons/lu";

export const SideBar = () => {
  // ⚠️Creating the item of the sidebar.

  return (
    <div className="fixed left-0 top-0 m-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<BsEmojiSunglasses size="20" />} text="Emoji" />
      <SideBarIcon icon={<LuActivity size="20" />} text="Health" />
      <SideBarIcon icon={<LuAlarmCheck size="20" />} text="Alarm" />
      <SideBarIcon icon={<LuAlertCircle size="20" />} text="Alert" />
      <SideBarIcon icon={<LuAirplay size="20" />} text="Display" />
    </div>
  );
};

const SideBarIcon = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  // ⚠️ Using a class defined in index.css.
  return (
    // ⚠️ Using the concept of group : parent-child link
    <div className="sidebar-icon group">
      {icon}
      <div className="sidebar-text group-hover:scale-100">
        <span>{text}</span>
      </div>
    </div>
  );
};
