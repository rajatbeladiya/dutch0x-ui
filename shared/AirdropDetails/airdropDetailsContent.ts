import ManureImage from '../../assets/icons/Manure.svg';
import WaterImage from '../../assets/icons/water.svg';

export const airdropDetails = [
  {
    key: 'manure',
    airdropLabelBackgroundColor: '#3CAA2A',
    airdropStatus: 'Harvest',
    airdropSubTitle: '🍎🍌🍍The Fruit Salad Game🍆🥦🥕',
    airdropName: 'Manure',
    successCount: 44,
    processingCount: 8,
    failedCount: 2,
    isCancel: true,
    isRecieveEmail: true,
    airdropImage: ManureImage,
  },
  {
    key: 'water',
    airdropLabelBackgroundColor: '#28458F',
    airdropStatus: `It's Raining`,
    airdropSubTitle: '🍎🍌🍍The Fruit Salad Game🍆🥦🥕',
    airdropName: 'Water',
    successCount: 100,
    processingCount: 0,
    failedCount: 0,
    isCancel: false,
    isRecieveEmail: false,
    airdropImage: WaterImage,
  },
];