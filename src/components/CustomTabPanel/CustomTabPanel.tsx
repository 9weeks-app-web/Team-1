import React, { useState } from "react";
import "./style.css";
import Selector from "components/Selector/Selector";
import usePortfolio from "hooks/usePortfolio";
import { IPortfolioSummary } from "types/portfolio";
import CardGrid from "components/CardGrid/CardGrid";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";

interface ICustomTabPanelProps {
  value: number;
  index: number;
}

export default function CustomTabPanel(props: ICustomTabPanelProps) {
  const { value, index, ...other } = props;
  const categoryOptions = ["전체", "기획", "디자인"];
  const jobOptions = ["기획", "디자인"];
  const stackOptions = ["React", "Figma", "Front-end", "Back-end"];

  const [category, setCategory] = useState("");
  const [job, setJob] = useState("");
  const [stack, setStack] = useState("");

  const { data } = usePortfolio();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <div className="flex-column gap-20">
        <div className="flex-row gap-8">
          <Selector
            options={categoryOptions}
            value={category}
            setValue={setCategory}
            placeholder="분야"
          />
          <Selector
            options={jobOptions}
            value={job}
            setValue={setJob}
            placeholder="직무"
          />
          <Selector
            options={stackOptions}
            value={stack}
            setValue={setStack}
            placeholder="기술스택"
          />
        </div>
        <CardGrid rowGap="rg-32" columnGap="cg-16">
          {data?.data.map((el: IPortfolioSummary) => (
            <PortfolioCard key={el.id} portfolio={el} />
          ))}
        </CardGrid>
      </div>
    </div>
  );
}