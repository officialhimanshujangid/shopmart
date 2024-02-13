import { HiSearch } from "react-icons/hi";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchresults?search=${search}`);
    setSearch("");
  };

  return (
    <div className={styles.searchBox}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          name=""
          placeholder="Search"
        />
      </form>
      <Link
        to={`/searchresults?search=${search}`}
        className={styles.searchButton}
        href="#"
      >
        <HiSearch className="text-xl" />
      </Link>
    </div>
  );
}

export default SearchBar;
