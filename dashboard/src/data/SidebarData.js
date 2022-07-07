import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'


export const SidebarData = [
   {
    icon:<MdIcons.MdDashboard/>,
    title:'dashboard',
    path:'/'
   },
   {
    icon:<AiIcons.AiOutlineAreaChart/>,
    title:'analytics',
    path:'/analytics'
   },
   {
    icon:<FaIcons.FaChartPie/>,
    title:'charts',
    path:'/charts'
   },
   {
    icon:<AiIcons.AiFillSetting/>,
    title:'settings',
    path:'/settings'
   },
   {
    icon:<FaIcons.FaSignOutAlt/>,
    title:'Sign Out',
    path:'/sign-out'
   }
]