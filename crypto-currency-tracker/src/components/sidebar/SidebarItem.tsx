import React from 'react'
import { NavLink } from 'react-router-dom' // Импортируем NavLink
import type { SidebarItems } from '../../data/data'

type Props = {
  item: SidebarItems
}

const SidebarItem: React.FC<Props> = ({ item }: Props) => {
  const Icon = item.icon;


  const baseStyles = `
    flex gap-3 items-center text-sm p-4 w-full 
    transition-all duration-300 cursor-pointer
    border-l-4
    rounded-xs
  `;

  return (
    <NavLink
      to={item.path || '/'} 
      className={({ isActive }) =>
        `${baseStyles} ${
          isActive 
            ? 'text-[#FCD535] bg-[#1E2329]  border-l-[#FCD535]' 
            : 'text-[#848E9C] border-transparent hover:text-[#FCD535] hover:bg-[#1E2329]'
        }`
      }
    >
      <Icon size={20} />
      <span>{item.label}</span>
    </NavLink>
  );
}

export default SidebarItem