import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'; 
import Navbar from './Home/Navbar';
import Profilecard from './Home/Profilecard';
import UploadPost from './Home/UploadPost';
import Posts from './Home/Posts';
 import PostData from './Home/DataPost';
 import FollowBar from './Home/FollowBar';
 import FollowPage from './Home/FollowPage';
import Postinputform from './Home/Postinputform';
 import ProfilePage from './Home/ProfilePage';
import AddReport from './Home/AddReport';
import AdminReport from './Home/AdminReport';
import TestUploadPost from './Home/TestUploadPost';
import EditProfilePage from './Home/EditProfilePage';

import Authentication from './Registration/Authentication'
/* import ResetPasswordEmail from './Registration/ResetEmailForm'; */// email otp sended 
import ResetPasswordForm from './Registration/Forgetform';
import OtpForm from './Registration/OtpForm';
import Newpassword from './Registration/Resetpasswordconfirm';
import CardContainer from './Admin/CardContainer';
import AddPolice from './Admin/AddPolice';
import AddOrphanage from './Admin/AddOrphanage';
import ProfileUserPost from './Home/ProfileUserPost';
/*import WelcomeNavbar from './WelcomeHome/WelcomeNavbar';
import Hero from './WelcomeHome/Hero';
import AiSection from './WelcomeHome/AiSection';
import Feature from './WelcomeHome/Features';
import Misson from './WelcomeHome/Misson';
import Slider from './WelcomeHome/Slider';
import Cards from './WelcomeHome/Cards';
import teamMembers from './WelcomeHome/TeamMembers-Card';
 import Footer from './WelcomeHome/Footer';
 */import Searching from './Matching/Searching';
import SearchUser from './Searching/SearchUser';
import MyPosts from './Home/MyPosts';
import UserPostsPolice from './Police/UserPostsPolice';
import TestTheme from './Theme/TestTheme'; 
import TestPage2 from './Theme/testPage2'; 
import YourPosts from './Home/YourPosts';
import AdminUserPost from './Admin/AdminUserPost';
import { ThemeProvider } from './Theme/ThemeContext'; 
import EditLocationPost from './Police/EditLocationPost';
import DarProfile from './Orphanage Dar/DarProfile';
import PostOfDar from './Orphanage Dar/PostOfDar';
import DarNavbar from './Orphanage Dar/DarNavbar';
import DarProfileCard from './Orphanage Dar/DarProfileCard';
import PoliceNavbar from './Police/PoliceNavbar';
import AdminNav from './Admin/AdminNav';
import IntroMatcing from './Matching/IntroMatcing';
import ResultAi from './Matching/ResultAi';
import EditDar from './Orphanage Dar/EditDar';
import PredictionForm from './Gans/PredictionForm';
import Darallpost from './Orphanage Dar/Darallpost';

/* import MatchingBtn from './Matching/MatchingBtn';
 *//* 
 const notifications = [
  {
    name: 'Abdalrhman Ahmed',
    message: 'sent you a friend request.',
    time: 'Just now',
    profilePic: {me}, 
  },
];  */ 
function App() {

  return (
    <ThemeProvider> 
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<>
        <Authentication/>
        </>} />

      <Route path="/home" element={<>
          <Navbar />
          <UploadPost />
          <FollowBar />
          <Profilecard />
          <Posts />
{/*           <MatchingBtn/>
 */}
         
        </>} />

      <Route path="/ProfilePage" element={<>
          <Navbar />
          <ProfilePage />
        </>} />
        
       {/*  <Route path='UploadImgPostForm' element={<UploadImgPostForm/>}/> */}
       <Route path="/FollowPage" element={<>
          <Navbar />
          <FollowPage/>
        </>} />

        <Route path="/AddOrphanage" element={<>
          <Navbar />
          <AddOrphanage/>
        </>} />
        <Route path="/AddPolice" element={<>
          <Navbar />
          <AddPolice/>
        </>} />
        <Route path="/HomeAdmin" element={<>
          <AdminNav/>
          <CardContainer/>
        </>} /> 
     
        
        <Route path="/AllUserPosts" element={<>
          <Navbar />
          <AdminUserPost/>
          </>
        } /> 
        <Route path="/SearchUser" element={<>
          <Navbar />
          <SearchUser/>
        </>} /> 
        <Route path="/Police" element={<>
          <PoliceNavbar/>
          <UserPostsPolice/>
        </>} /> 

        <Route path="/PoliceSearch" element={<>
          <PoliceNavbar/>
          <SearchUser/>
        </>} /> 

        <Route path="/DarProfile" element={<>
          <DarNavbar/>
          <DarProfile />
          <PostOfDar/>
        </>} />
        <Route path="/DarHome" element={<>
          <DarNavbar/>
          < DarProfileCard/>
          <Darallpost/>
        </>} />
        <Route path="/DarSearch" element={<>
          <DarNavbar/>
          <SearchUser/>
        </>} />

        <Route path='/add-report/:postId' element={<AddReport/>}/>
        <Route path='AdminReport' element={<AdminReport/>}/>
        <Route path='Posts' element={<Posts/>}/>
        <Route path='TestUploadPost' element={<TestUploadPost/>}/>
        <Route path='EditProfilePage' element={<EditProfilePage/>}/>        
        <Route path='login' element={<Authentication/>}/>
        <Route path='EmailForm' element={<ResetPasswordForm/>}/>
        <Route path='OtpForm' element={<OtpForm/>}/>
        <Route path='Newpassword' element={<Newpassword/>}/>
        <Route path='Postinputform' element={<Postinputform/>}/>        
        <Route path='HomeAdmin' element={<CardContainer/>}/>     
        <Route path='AddPolice' element={<AddPolice/>}/>    
        <Route path='AddOrphanage' element={<AddOrphanage/>}/>   
        <Route path="/searching/:postId" element={<Searching />} />
        <Route path='UserPostsPolice' element={<UserPostsPolice/>}/> 
        <Route path='DarProfile' element={<DarProfile/>}/> 
        <Route path='PostOfDar' element={<PostOfDar/>}/>
        <Route path='IntroMatcing/:postId' element={<IntroMatcing/>}/>
        <Route path='ResultAi' element={<ResultAi/>}/>
        <Route path='EditDar' element={<EditDar/>}/>
        <Route path='PredictionForm' element={<PredictionForm/>}/>
          

        

       
       {/*  <Route path='SearchUser' element={<SearchUser/>}/>  */}


{/*         <Route path='ProfileUserPost' element={<ProfileUserPost/>}/>
 */}                {/* <Route path="/ProfileUserPost/:userid" element={<ProfileUserPost />} /> */}
  

    <Route path="/ProfileUserPost/:userid" element={<>
          <Navbar/>
          <ProfileUserPost />
        </>} /> 
    
     
        {/* <Route path='EmailForm' element={<ResetPasswordEmail/>}/> */}
        <Route path="/TestTheme" element={<TestTheme />} /> {/* Route for TestTheme component */}

          <Route path="/TestPage2" element={<TestPage2 />} /> {/* Route for TestPage2 component */}


      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
