import { Hero } from "../components/Hero";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col overflow-hidden text-gray-800 dark:text-gray-100">
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
