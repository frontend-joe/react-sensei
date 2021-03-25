import React, { useState, useEffect } from "react";
import Chartist from "react-chartist";
import chartist from "chartist";
import styled from "styled-components";
import { rgba } from "polished";
import { useStyledTheme } from "../../../hooks";

import { ChartWrapper } from "../shared";

const StyledChartWrapper = styled(ChartWrapper)`
  width: 100%;
  height: 180px;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    height: 260px;
  }

  & .ct-chart {
    width: 100%;
    height: 160px;

    @media (min-width: ${(p) => p.theme.screenWidthMd}) {
      height: 240px;
    }
  }

  & .ct-grid.ct-horizontal {
    stroke: url(#gridGradient);
    stroke-dasharray: 8;
    stroke-width: 2;
  }

  & .ct-series .ct-line {
    stroke: url(#shadowLineChartGradient${(p) => p.id});
  }

  & .ct-series .ct-area {
    fill: url(#areaGradient);
    fill-opacity: 1;
  }

  & .ct-point {
    display: none;
  }

  & .ct-label.ct-horizontal.ct-end {
    display: flex;
    align-items: flex-end;
    height: 40px;
    color: ${(p) => p.theme.colorLabel};
    transform: translateX(-12px);
  }

  & .ct-line-marker {
    fill: ${(p) => p.theme.colorCardBackground};
    stroke: ${(p) => (p.isAccent ? p.theme.colorAccent : p.theme.colorPrimary)};
    stroke-width: 4px;
  }
`;

const Wrapper = ({ id, markerIndex, isAccent, cardTitle, statList, data }) => {
  const theme = useStyledTheme();

  const [options, setOptions] = useState({
    showArea: true,
    showLabels: true,
    fullWidth: true,
    high: 17,
    low: 0,
    chartPadding: {
      top: 20,
      right: 0,
      bottom: 0,
      left: -40,
    },
    axisX: {
      showGrid: true,
      showLabel: true,
      labelInterpolationFnc: function (value, index) {
        return index !== 0 && index !== data.labels.length - 1 ? value : null;
      },
    },
    axisY: { showLabel: true, showGrid: false },
  });

  const drawPoint = (ctx) => {
    if (ctx.type === "point") {
      if (ctx.index === markerIndex) {
        var circle = new chartist.Svg(
          "circle",
          {
            cx: ctx.x,
            cy: ctx.y,
            r: 7,
          },
          "ct-line-marker"
        );
        ctx.element.replace(circle);
      }
    }
  };

  const createGradient = (ctx) => {
    var defs = ctx.svg.elem("defs");

    // area gradient
    defs
      .elem("linearGradient", {
        id: "areaGradient",
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
      })
      .elem("stop", {
        offset: 0,
        "stop-color": rgba(theme.colorChartShading, 0.3),
      })
      .parent()
      .elem("stop", {
        offset: 1,
        "stop-color": rgba(theme.colorChartShading, 0),
      })
      .parent();

    // grid gradient
    defs
      .elem("linearGradient", {
        id: "gridGradient",
        gradientUnits: "userSpaceOnUse",
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 240,
      })
      .elem("stop", {
        offset: 0,
        "stop-color": rgba(theme.colorChartShading, 0),
      })
      .parent()
      .elem("stop", {
        offset: 1,
        "stop-color": rgba(theme.colorChartShading, 0.1),
      })
      .parent();

    // line gradient
    defs
      .elem("linearGradient", {
        id: `shadowLineChartGradient${id}`,
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0,
      })
      .elem("stop", {
        offset: 0,
        "stop-color": theme.colorCardBackground,
      })
      .parent()
      .elem("stop", {
        offset: 0.25,
        "stop-color": isAccent ? theme.colorAccent : theme.colorPrimary,
      })
      .parent()
      .elem("stop", {
        offset: 0.75,
        "stop-color": isAccent ? theme.colorAccent : theme.colorPrimary,
      })
      .parent()
      .elem("stop", {
        offset: 1,
        "stop-color": theme.colorCardBackground,
      })
      .parent();
  };

  return (
    <StyledChartWrapper isAccent={isAccent} id={id}>
      {options && data && (
        <Chartist
          listener={{
            created: createGradient,
            draw: drawPoint,
          }}
          options={options}
          data={data}
          type="Line"
        />
      )}
    </StyledChartWrapper>
  );
};

export default Wrapper;
