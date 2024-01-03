import React, { useState } from "react";
import CardGrid from "components/CardGrid/CardGrid";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import SinglePickChip from "components/Chips/SinglePickChip/SinglePickChip";
import "./style.css";
import usePortfolio from "hooks/usePortfolio";
import { IPortfolioSummary } from "types/portfolio";

function HomePortfolioList() {
  const [category, setCategory] = useState("");
  const { results } = usePortfolio();

  return (
    <>
      <div className="portfolio-list-category-selector">
        {/* TODO : 상수 배열로 분리하기 */}
        <SinglePickChip
          title="디자인"
          onClick={() => setCategory("디자인")}
          isActive={category === "디자인"}
        />
        <SinglePickChip
          title="기획"
          onClick={() => setCategory("기획")}
          isActive={category === "기획"}
        />
      </div>

      <CardGrid columnGap="cg-16" rowGap="rg-32">
        {results[0]?.data?.data.map((el: IPortfolioSummary) => (
          <PortfolioCard key={el.id} portfolio={el} />
        ))}
      </CardGrid>
    </>
  );
}

export default HomePortfolioList;
