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

export default [
  {
    path: "/",
    exact: true,
    name: "Clean button",
    example: CleanButton,
    docs: cleanButtonDocs,
  },
  {
    path: "/cards/simple-card",
    name: "Simple card",
    example: SimpleCard,
    docs: simpleCardDocs,
  },
  {
    path: "/cards/stat-icon-card",
    name: "Stat icon card",
    example: StatIconCard,
    docs: statIconCardDocs,
  },
  {
    path: "/cards/pie-chart-card",
    name: "Pie chart card",
    example: PieChartCard,
    docs: pieChartCardDocs,
  },
  {
    path: "/cards/area-chart-card",
    name: "Area chart card",
    example: AreaChartCard,
    docs: areaChartCardDocs,
  },
  {
    path: "/cards/bar-chart-card",
    name: "Bar chart card",
    example: BarChartCard,
    docs: barChartCardDocs,
  },
];
