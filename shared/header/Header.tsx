import Image from 'next/image';
import { MenuItems, OtherItems } from './MenuItems';

import AppLogo from '../../assets/icons/app-logo.svg';
import SearchIcon from '../../assets/icons/search.svg';

const selectedMenuItemName = 'dashboard';

const selctedMenuItem = MenuItems.find(item => item.key === selectedMenuItemName);

const Header = () => (
  <div className='header-container-wrapper'>
    <div className="header-container">
      <div className="app-logo">
        <Image src={AppLogo} alt='app-logo' />
      </div>
      <div className="menu-items">
        {
          MenuItems.map(menuItem => (
            <div className='menu-item-wrapper' key={menuItem.key}>
              <div className={`menu-item ${selectedMenuItemName === menuItem.key ? 'selected-menu' : ''}`}>
                {menuItem.name}
              </div>
              {
                selectedMenuItemName === menuItem.key && 
                <div className='selected-circle'></div>
              }
              {
                menuItem.comingSoon && 
                <div className='coming-soon'>Coming Soon</div>
              }
            </div>
          ))
        }
      </div>
      <div className="search-bar-wrapper">
        <div className='serach-bar-content'>
          <Image src={SearchIcon} alt='search' />
          <input placeholder='Find Holders' type='text' />
          <div className='sub-icon'>/</div>
        </div>
      </div>
      <div className="other-menu-items-wrapper">
        <div className='status-wrapper'>
          <div className='status-content'>
            <div className='ellipse'></div>
            <div className='status'>STATUS</div>
          </div>
        </div>
        <div className='other-menu-items'>
          {
            OtherItems.map(items => (
              <div className='other-items' key={items.key}>
                <Image src={items.icon} alt='icon' />
              </div>
            ))
          }
        </div>
      </div>
    </div>
    {
      selctedMenuItem && selctedMenuItem.subMenu && (
        <div className='sub-menu-items'>
          {selctedMenuItem.subMenu.map(item => (
            <div className='sub-menu-items-content' key={item.key}>
              <div className='menu-image' style={{ background: item.backgroundColor }}>
                <Image src={item.icon} alt='icon' />
              </div>
              <div className='menu-name'>{item.name}</div>
            </div>
          ))}
        </div>
      )
    }
  </div>
);

export default Header;
