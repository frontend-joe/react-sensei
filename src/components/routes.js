import SalesDashboard from "components/demo/dashboards/SalesDashboard";

import CleanButton from "components/library/buttons/cleanButton/Example";
import cleanButtonDocs from "components/library/buttons/cleanButton/docs";

import SimpleCard from "components/library/cards/simpleCard/Example";
import simpleCardDocs from "components/library/cards/simpleCard/docs";

import StatIconCard from "components/library/cards/statIconCard/Example";
import statIconCardDocs from "components/library/cards/statIconCard/docs";

import PieChartCard from "components/library/cards/pieChartCard/Example";
import pieChartCardDocs from "components/library/cards/pieChartCard/docs";

import AreaChartCard from "components/library/cards/areaChartCard/Example";
import areaChartCardDocs from "components/library/cards/areaChartCard/docs";

import BarChartCard from "components/library/cards/barChartCard/Example";
import barChartCardDocs from "components/library/cards/barChartCard/docs";

// import CodeRevealCard from "components/library/cards/codeRevealCard/Example";
// import codeRevealCardDocs from "components/library/cards/codeRevealCard/docs";

export default [
  {
    path: "/buttons/clean",
    exact: true,
    name: "Clean",
    example: CleanButton,
    docs: cleanButtonDocs,
    isButton: true,
  },
  {
    path: "/dashboards/sales",
    exact: true,
    name: "Sales",
    example: SalesDashboard,
    docs: {},
    isDashboard: true,
  },
  // {
  //   path: "/cards/code-reveal-card",
  //   name: "Code Reveal",
  //   example: CodeRevealCard,
  //   docs: codeRevealCardDocs,
  //   isCard: true,
  // },
  {
    path: "/cards/simple-card",
    name: "Simple",
    example: SimpleCard,
    docs: simpleCardDocs,
    isCard: true,
  },
  {
    path: "/cards/stat-icon-card",
    name: "Stat icon",
    example: StatIconCard,
    docs: statIconCardDocs,
    isCard: true,
  },
  {
    path: "/cards/pie-chart-card",
    name: "Pie chart",
    example: PieChartCard,
    docs: pieChartCardDocs,
    isCard: true,
  },
  {
    path: "/cards/area-chart-card",
    name: "Area chart",
    example: AreaChartCard,
    docs: areaChartCardDocs,
    isCard: true,
  },
  {
    path: "/cards/bar-chart-card",
    name: "Bar chart",
    example: BarChartCard,
    docs: barChartCardDocs,
    isCard: true,
  },
];
