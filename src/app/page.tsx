import LandingPage from "@/components/LandingPage";
import TitlePage from "@/components/TitlePage";
import Users from "@/components/Users";
import styles from "../styles/LandingPage.module.css"
import Advice from "@/components/Advice";

const Home: React.FC = () =>{
  return (
    <div className ={`${styles.main}`}>
    <LandingPage />
    <TitlePage />
    <Users />
    <Advice />
    </div>
  );
}
export default Home