import LandingPage from "@/components/LandingPage";
import TitlePage from "@/components/TitlePage";
import Users from "@/components/Users";
import styles from "../styles/LandingPage.module.css"
import Advice from "@/components/Advice";
import MobileBar from "@/components/MobileBar";

const Home: React.FC = () =>{
  return (
    <div className ={`${styles.main}`}>  
    <LandingPage />
    <TitlePage />
    <Advice />
    <Users />
    <MobileBar />
    </div>
  );
}
export default Home