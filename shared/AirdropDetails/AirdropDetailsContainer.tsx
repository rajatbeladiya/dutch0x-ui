import AirdropDetails from './AirdropDetails';

import { airdropDetails } from './airdropDetailsContent';

const AirdropDetailsContainer = () => (
  <>
    {
      airdropDetails.map(airdropDetail => (
        <AirdropDetails
          key={airdropDetail.key}
          airdropLabelBackgroundColor={airdropDetail.airdropLabelBackgroundColor}
          airdropStatus={airdropDetail.airdropStatus}
          airdropSubTitle={airdropDetail.airdropSubTitle}
          airdropName={airdropDetail.airdropName}
          successCount={airdropDetail.successCount}
          processingCount={airdropDetail.processingCount}
          failedCount={airdropDetail.failedCount}
          isCancel={airdropDetail.isCancel}
          isRecieveEmail={airdropDetail.isRecieveEmail}
          airdropImage={airdropDetail.airdropImage}
          progressStatusIcon={airdropDetail.progressStatusIcon}
          progressPercentage={airdropDetail.progressPercentage}
        />
      ))
    }
  </>
);

export default AirdropDetailsContainer;
