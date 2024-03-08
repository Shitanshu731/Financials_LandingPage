import LandingPage from "@/components/LandingPage";
import TitlePage from "@/components/TitlePage";
import Users from "@/components/Users";
import styles from "../styles/LandingPage.module.css"
import Advice from "@/components/Advice";
import MobileBar from "@/components/MobileBar";
import Sip from "@/components/Sip";

const Home: React.FC = () =>{
  return (
    <div className ={`${styles.main}`}>  
    <LandingPage />
    <TitlePage />
    <Advice />
    <Users />
    <Sip />
    <MobileBar />
    </div>
  );
}
export default Home