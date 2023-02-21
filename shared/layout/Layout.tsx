import { ReactElement } from 'react';
import HeaderContainer from '../header/HeaderContainer';

export interface IProps {
  children: ReactElement
}

const Layout: React.FC<IProps> = ({ children }) => {

  return (
    <div className='layout-container'>
      <HeaderContainer />
      <div className='main-content'>{children}</div>
    </div>
  )

}

export default Layout;
