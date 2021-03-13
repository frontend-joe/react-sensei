import About from "components/demo/about/About";

import Dashboard1 from "components/demo/dashboards/Dashboard1";
import Dashboard2 from "components/demo/dashboards/Dashboard2";

import CleanButton from "components/library/buttons/cleanButton/Example";
import cleanButtonDocs from "components/library/buttons/cleanButton/docs";

import SimpleCard from "components/library/cards/simpleCard/Example";
import simpleCardDocs from "components/library/cards/simpleCard/docs";

import StatIconCard from "components/library/cards/statIconCard/Example";
import statIconCardDocs from "components/library/cards/statIconCard/docs";

import StatBadgeCard from "components/library/cards/statBadgeCard/Example";
import statBadgeCardDocs from "components/library/cards/statBadgeCard/docs";

import PieChartCard from "components/library/cards/pieChartCard/Example";
import pieChartCardDocs from "components/library/cards/pieChartCard/docs";

import ActivityRingsCard from "components/library/cards/activityRings/Example";
import activityRingsCardDocs from "components/library/cards/activityRings/docs";

import AreaChartCard from "components/library/cards/areaChartCard/Example";
import areaChartCardDocs from "components/library/cards/areaChartCard/docs";

import GradientLineChartCard from "components/library/cards/gradientLineChart/Example";
import gradientLineChartCardDocs from "components/library/cards/gradientLineChart/docs";

import BarChartCard from "components/library/cards/barChartCard/Example";
import barChartCardDocs from "components/library/cards/barChartCard/docs";

import BarGuageChart from "components/library/cards/barGuageChart/Example";
import barGuageChartDocs from "components/library/cards/barGuageChart/docs";

import CodeRevealCard from "components/library/cards/codeRevealCard/Example";
import codeRevealCardDocs from "components/library/cards/codeRevealCard/docs";

export default [
  {
    path: "/",
    exact: true,
    name: "About",
    example: About,
    docs: {},
  },
  {
    path: "/buttons/clean",
    exact: true,
    name: "Clean Button",
    example: CleanButton,
    docs: cleanButtonDocs,
    isButton: true,
  },
  {
    path: "/dashboards/sales",
    exact: true,
    name: "Dashboard 1",
    example: Dashboard1,
    docs: {},
    isDashboard: true,
  },
  {
    path: "/dashboards/covid",
    exact: true,
    name: "Dashboard 2",
    example: Dashboard2,
    docs: {},
    isDashboard: true,
    isDev: false,
  },
  {
    path: "/cards/bar-guage-chart",
    name: "Bar guage",
    example: BarGuageChart,
    docs: barGuageChartDocs,
    isCard: true,
  },
  {
    path: "/cards/code-reveal-card",
    name: "Code Reveal",
    example: CodeRevealCard,
    docs: codeRevealCardDocs,
    isCard: true,
    isDev: true,
  },
  {
    path: "/cards/simple-card",
    name: "Card",
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
    path: "/cards/stat-badge-card",
    name: "Stat badge",
    example: StatBadgeCard,
    docs: statBadgeCardDocs,
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
    path: "/cards/activity-rings-card",
    name: "Activity rings",
    example: ActivityRingsCard,
    docs: activityRingsCardDocs,
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
    path: "/cards/gradient-line-chart-card",
    name: "Line chart",
    example: GradientLineChartCard,
    docs: gradientLineChartCardDocs,
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
