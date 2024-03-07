import LandingPage from "@/components/LandingPage";
import TitlePage from "@/components/TitlePage";
import Users from "@/components/Users";

const Home: React.FC = () =>{
  return (
    <div id="scroll-container">
    <LandingPage />
    <TitlePage />
    <Users />
    </div>
  );
}
export default Home