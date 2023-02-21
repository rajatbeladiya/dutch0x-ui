import Layout from "@/shared/layout/LayoutContainer";
import Events from "./Events/EventsContainer";
import Overview from "./OverView/OverViewContainer";

const Dashboard = () => (
  <Layout>
    <div className="dashboard-container">
      <Events />
      <Overview />
    </div>
  </Layout>
);

export default Dashboard;
