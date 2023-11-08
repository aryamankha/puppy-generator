import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import axios from "axios";

export async function getStaticProps() {
  // Fetch data using Axios
  const SHEETDB_URL = "https://sheetdb.io/api/v1/wix9608oycsl9";

  const puppyData = (await axios.get(SHEETDB_URL)).data

  return {
    props: {
      puppyData: puppyData,
    },
  };
}


const Home = ({puppyData}) => {

  return (
    <div className="flex flex-col overflow-y-scroll overflow-x-hidden text-gray-800 dark:text-gray-100">
      <main>
        <div className = "h-screen">
          <NavBar />
          <Hero puppyData = {puppyData}/>
        </div>

      </main>
    </div>
  );
};

export default Home;
