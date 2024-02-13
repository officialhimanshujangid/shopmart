import Logo from "../Logo/Logo";
import Row from "../Row";
import AccountSection from "./AccountSection";
import SearchBar from "./Searchbar/SearchBar";

function UpperLayer() {
  return (
    <Row>
      <Logo size="2rem" padding="5px 20px" />
      <SearchBar />
      <AccountSection />
    </Row>
  );
}

export default UpperLayer;
