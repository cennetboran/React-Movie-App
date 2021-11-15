import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Movie/SearchMovie";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Footer />
    </div>
  );
};
export default App;
