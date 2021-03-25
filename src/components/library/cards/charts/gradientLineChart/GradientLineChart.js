import React, { useState, useEffect } from "react";
import Chartist from "react-chartist";
import chartist from "chartist";
import styled from "styled-components";
import { rgba } from "polished";
import { useStyledTheme } from "../../../hooks";

import { ChartWrapper } from "../shared";

const StyledChartWrapper = styled(ChartWrapper)`
  transform: translateY(${(p) => p.theme.lenMd3});

  & .ct-chart {
    width: 100%;
    height: 170px;
  }

  & .ct-series .ct-line {
    stroke: url(#shadowLineChartGradient);
  }

  & .ct-point {
    display: none;
  }
  & .ct-line-marker {
    fill: ${(p) => p.theme.colorCardBackground};
    stroke: ${(p) => p.theme.colorAccent};
    stroke-width: 4px;
  }
`;

const Wrapper = ({ cardTitle, statList, data }) => {
  const theme = useStyledTheme();

  const eventHandlers = () => {
    return [
      // {
      //   event: "draw",
      //   fn(ctx) {
      //     if (ctx.type === "point") {
      //       if (ctx.index === 5) {
      //         var circle = new Chartist.Svg(
      //           "circle",
      //           {
      //             cx: ctx.x,
      //             cy: ctx.y,
      //             r: 7,
      //           },
      //           "ct-line-marker"
      //         );
      //         ctx.element.replace(circle);
      //       }
      //     }
      //   },
      // },
    ];
  };

  const [options, setOptions] = useState({
    fullWidth: true,
    chartPadding: {
      top: 20,
      right: 0,
      bottom: 0,
      left: -40,
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: function (value, index) {
        return index % 2 === 0 ? value : null;
      },
    },
    axisY: { showLabel: false, showGrid: false },
  });

  const drawPoint = (ctx) => {
    if (ctx.type === "point") {
      if (ctx.index === 6) {
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
    defs
      .elem("linearGradient", {
        id: "shadowLineChartGradient",
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
        "stop-color": theme.colorPrimary,
      })
      .parent()
      .elem("stop", {
        offset: 0.75,
        "stop-color": theme.colorAccent,
      })
      .parent()
      .elem("stop", {
        offset: 1,
        "stop-color": theme.colorCardBackground,
      })
      .parent();
  };

  return (
    <StyledChartWrapper>
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
