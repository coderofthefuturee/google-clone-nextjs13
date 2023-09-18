import Footer from "./../components/Footer";
import SearchHeader from "../components/SearchHeader";

export default function SearchLayout({ children }) {
    return (
      <div>
        <SearchHeader />
        {children}
        <Footer />
      </div>
    );
  }
  
