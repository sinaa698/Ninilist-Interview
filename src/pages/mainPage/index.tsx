import { useState } from "react";
import SearchBox from "../../components/searchBox/index";
import "./mainPage.css";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearchHandle = (value: string) => {
    
  };
  return (
    <div className="main-page">
      <SearchBox onChange={onSearchHandle} value={searchQuery} />
    </div>
  );
};

export default MainPage;
