import Header from "./Components/Header";
import HomePage from "./Components/Home";
import Listing from "./Components/Listing";
import Slide from "./Components/SlideCard";
import Top from "./Components/TopHead";

export default function Layout() {
  return (
    <div>
      <div className="topContent">
        <div className="container">
          <Top />
        </div>
      </div>
      <div className="container">
        <Header />
        <HomePage />
        <Slide />
        <Listing />
      </div>
    </div>
  );
}
