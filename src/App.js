import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/dashboard/Dashboard";
import StudentInformation from "./Pages/student_information/StudentInformation";
import Testing from "./Pages/student_information/testing/Testing";
import Academics from "./Pages/student_information/academic/Academics";
import Activity from "./Pages/student_information/activities/Activity";
import Major_Career from "./Pages/student_information/major_and_career/Major_Career";
import PersonalInfo from "./Pages/student_information/personalinformation/PersonalInformation";
import EditInformation from "./Pages/student_information/personalinformation/EditInformation";
import PlanBilling from "./Pages/plan_and_billing/PlanBilling";
import PlanBillingUpgrade from "./Pages/plan_and_billing/PlanBillingUpgrade";
import PurchaseCard from "./Pages/plan_and_billing/PurchaseCard";
import Payment from "./Pages/payments/Payment";
import BookingDashboard from "./Pages/booking/BookingDashboard";
import Booking from "./Pages/booking/Booking";
import Enquiry from "./Pages/booking/Enquiry";
import Services from "./Pages/booking/Services";
import ResourceCenter from "./Pages/resourcecenter/ResourceCenter";
import Chat from "./Pages/messages/Chat";
import Community from "./Pages/community/Community";
import ListView from "./Pages/calender/ListView";
import ScheduleCalender from "./Pages/calender/ScheduleCalender";
import Cardd from "./Pages/calender/Cardd";
import StudentDashboard from "./Pages/student_information/StudentDashboard";
import Inquiry from "./Pages/inquiries/Inquiry";
import AddInquiry from "./Pages/inquiries/AddInquiry";
import Table from "./Table";
import Myplans from "./Pages/myplans/Myplans";
import Support from "./Pages/support/Support";
import Roles from "./Pages/roles/Roles";
import EditProfile from "./Pages/profile/EditProfile";
import Layout from "./UI/Layout/Layout";
import TicketDetails from "./Pages/support/TicketDetails";
import Profile from "./Pages/profile/Profile";
import CardComponent from "./components/CardComponent/CardComponent";
import VideoSlider from "./components/videos/VideoComponent";

function App() {
  const [active, setactive] = useState(false);

  const toggleHb = () => {
    console.log("clicked");
    setactive(!active);
  };
  return (
    <>
      {/* <EventCalendar /> */}
      {/* <MyCard /> */}
      {/* <DateContainer /> */}
      {/* <Cardd /> */}
      {/* <Table /> */}
      {/* <CardComponent /> */}
      {/* <VideoSlider /> */}

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/studentinfo" element={<StudentDashboard />} />
            <Route path="/studentinfo/academics" element={<Academics />} />
            <Route path="/studentinfo/testing" element={<Testing />} />
            <Route path="/studentinfo/activities" element={<Activity />} />
            <Route
              path="/studentinfo/personalinfo"
              element={<PersonalInfo />}
            />
            <Route path="/studentinfo/majorcareer" element={<Major_Career />} />
            <Route path="/editinformation" element={<EditInformation />} />
            <Route path="/planbilling" element={<PlanBilling />} />
            <Route path="/planbillupgrad" element={<PlanBillingUpgrade />} />
            <Route path="/purchasecard/:cardIndex" element={<PurchaseCard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/bookingdash" element={<BookingDashboard />} />
            <Route path="/bookingdash/booking" element={<Booking />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/myplans" element={<Myplans />} />
            <Route path="/addinquiry" element={<AddInquiry />} />
            <Route path="/bookingdash/services" element={<Services />} />
            <Route path="/resourcecenter" element={<ResourceCenter />} />
            <Route path="/messages" element={<Chat />} />
            <Route path="/community" element={<Community />} />
            <Route path="/counselor" element={<ListView />} />
            <Route path="/schedule" element={<ScheduleCalender />} />
            <Route path="/dailycaleneder" element={<Cardd />} />
            <Route path="/support" element={<Support />} />
            <Route path="/ticketdetails" element={<TicketDetails />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
