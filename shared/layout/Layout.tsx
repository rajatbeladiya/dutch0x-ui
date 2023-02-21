import { ILayout } from '@/utils/types';
import HeaderContainer from '../header/HeaderContainer';

const Layout = ({ children }: ILayout) => {
  return (
    <div className='layout-container'>
      <HeaderContainer />
      <div className='main-content'>{children}</div>
    </div>
  )
}

export default Layout;
