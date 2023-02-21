import Image from "next/image";
import DateIcon from '../../assets/icons/date.svg';
import ClockIcon from '../../assets/icons/clock.svg';
import { IAirdropDetails } from "@/utils/types";

const AirdropDetails = ({
  airdropLabelBackgroundColor,
  airdropStatus,
  airdropSubTitle,
  airdropName,
  successCount,
  processingCount,
  failedCount,
  isCancel,
  isRecieveEmail,
  airdropImage,
}: IAirdropDetails) => (
  <div className="airdrop-details-container">
    <Image src={airdropImage} alt='' className="bg-blur-image" />
    <div className="airdrop-details-content">
      <div className="airdrop-header">
        <div className="airdrop-label" style={{ backgroundColor: airdropLabelBackgroundColor }}>
          AIRDROP
        </div>
        <div className="airdrop-status">
          <Image src={DateIcon} alt="date-icon" />
          <label className="airdrop-status-label">{airdropStatus}</label>
        </div>
        <div className="airdrop-date">
          <Image src={ClockIcon} alt="clock-icon" />
          <label className="date-status">Started</label>
          <label className="date-value">2022-09-13 08:57:15</label>
        </div>
      </div>
      <div className="airdrop-sub-content">
        <div className="airdrop-sub-title">
          {airdropSubTitle}
        </div>
        <div className="airdop-name-wrapper">
          <div className="airdrop-name">{airdropName}</div>
          <div className="airdrop-count">x 100</div>
        </div>
        <div className="airdrop-transaction-details">
          <div>Wallet Transactions: </div>
          <div className="airdrop-transaction-status"><b>{successCount}</b> Success</div>
          <div className="airdrop-transaction-status"><b>{processingCount}</b> Processing</div>
          <div className="airdrop-transaction-status"><b>{failedCount}</b> Failed</div>
        </div>
        <div className="transaction-progress-bar">

        </div>
        <div className="airdrop-actions">
          <button className="more-details">More Details</button>
          {
            isCancel && (
              <button className="cancel-btn">Cancel</button>
            )
          }
          {
            isRecieveEmail && (
              <>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="checkbox-email"/>
                <label className="receive-report"> Receive report on email</label>
              </>
            )
          }
        </div>
      </div>
    </div>
    <div className="airdrop-image">
      <Image src={airdropImage} alt="img" />
    </div>
  </div>
);

export default AirdropDetails;
