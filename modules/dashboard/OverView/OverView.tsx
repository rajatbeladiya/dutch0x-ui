import ListCardContainer from "@/shared/ListCard/ListCardContainer";
import { nftsItems, walletDetails, savedSearches, recentActivity } from "./overviewDetails";

const Overview = () => (
  <div className="overview-container">
    <div className="title">Overview</div>
    <ListCardContainer
      listCardItems={walletDetails}
    />
    <ListCardContainer
      title="NFTs"
      listCardItems={nftsItems}
    />
    <ListCardContainer
      title="Saved Searches"
      listCardItems={savedSearches}
    />
    <ListCardContainer
      title="Recent Activity"
      listCardItems={recentActivity}
    />
  </div>
);

export default Overview;
