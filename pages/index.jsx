import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col overflow-hidden text-gray-800 dark:text-gray-100">
      <main>
        <div className = "h-screen">
          <NavBar />
          <Hero />
        </div>

      </main>
    </div>
  );
};

export default Home;
