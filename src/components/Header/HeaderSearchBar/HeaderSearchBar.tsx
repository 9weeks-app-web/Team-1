import React, { useState } from "react";
import "./style.css";
import Icon from "components/Icon/Icon";
import IconButton from "components/IconButton/IconButton";

function HeaderSearchBar() {
  const [query, setQuery] = useState("");

  const reset = () => {
    setQuery("");
  };

  // TODO : 검색 API 연결
  const search = () => {
    alert(query);
  };

  return (
    <div className="header-searchbar-container">
      <Icon icon="search" />
      <input
        type="text"
        placeholder="원하는 커뮤니티, 작업물, 프로젝트 검색"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && <IconButton icon="close" onClick={reset} />}
      <IconButton icon="search" onClick={search} />
    </div>
  );
}

export default HeaderSearchBar;
