import NotificationIcon from '../../assets/icons/notification.svg';
import WalletIcon from '../../assets/icons/wallet.svg';
import UserIcon from '../../assets/icons/user.svg';
import NftManagementIcon from '../../assets/icons/nft-management.svg';
import FindHoldersIcon from '../../assets/icons/find-holders.svg';
import AirdropIcon from '../../assets/icons/airdrop.svg';
import TradeInIcon from '../../assets/icons/trade-in.svg';
import SalesIcon from '../../assets/icons/sales.svg';

export const MenuItems = [
  {
    name: 'Dashboard',
    key: 'dashboard',
    subMenu: [
      {
        name: 'NFT Management',
        key: 'nft-management',
        path: '/nft-management',
        icon: NftManagementIcon,
        backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #2EC62E'
      },
      {
        name: 'Find Holders',
        key: 'find-holders',
        path: '/find-holders',
        icon: FindHoldersIcon,
        backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #c6c02e'
      },
      {
        name: 'Airdrop',
        key: 'airdrop',
        path: '/airdrop',
        icon: AirdropIcon,
        backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #2ea8c6cf'
      },
      {
        name: 'Trade-in',
        key: 'trade-in',
        path: '/trade-in',
        icon: TradeInIcon,
        backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #812ec6a8'
      },
      {
        name: 'Sales',
        key: 'sales',
        path: '/sales',
        icon: SalesIcon,
        backgroundColor: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #f871f1'
      },
    ]
  },
  {
    name: 'Create',
    key: 'create'
  },
  {
    name: 'Marketplace',
    key: 'marketplace',
    comingSoon: true,
  },
  {
    name: 'Learn',
    key: 'learn'
  },
  
];

export const OtherItems = [
  {
    name: 'Notification',
    icon: NotificationIcon,
    key: 'notification'
  },
  {
    name: 'Wallet',
    icon: WalletIcon,
    key: 'wallet'
  },
  {
    name: 'User',
    icon: UserIcon,
    key: 'user'
  },
]