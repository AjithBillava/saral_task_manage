import taskIcon from '../../assets/task-icon.png'
import notificationIcon from '../../assets/notification-icon.png'
import analaysisIcon from '../../assets/analysis-icon.png'
import teamIcon from '../../assets/teams-icon.png'

import settingsIcon from '../../assets/settings-icon.png'
import ToggleThemeButton from '../toggleThemeButton'

const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-80 px-4 py-8  text-[#667085] dark:bg-gray-800 dark:text-gray-100">
      <nav className="flex flex-col gap-4">
        {/* <div>Company</div> */}
        <div className='flex w-full justify-center'>
        <ToggleThemeButton/>

        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center rounded-lg bg-[#F2F4F7] text-[#1D2939] text-base py-3 px-2 dark:bg-slate-600 dark:text-gray-50" role="button"><img className="w-5 h-5" src={taskIcon} alt="task icon"  />Tasks</div>
          <div className="flex gap-4 items-center text-base py-3 px-2" role="button"><img className="w-5 h-5" src={notificationIcon} alt="notification icon" />Notifications</div>
          <div className="flex gap-4 items-center text-base py-3 px-2" role="button"><img className="w-5 h-5" src={analaysisIcon} alt="analysis icon" />Analysis</div>
          <div className="flex gap-4 items-center text-base py-3 px-2" role="button"><img className="w-4 h-5" src={teamIcon} alt="team icon" />Team</div>
          {/* <ToggleThemeButton/> */}
        </div>
      </nav>
      <div className="flex gap-4 items-center text-base py-3 px-2" role="button"><img className="w-5 h-5" src={settingsIcon} alt="settings icon" /> Settings</div>
    </aside>
  );
};

export default SideBar;
