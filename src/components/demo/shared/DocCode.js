import React from "react";
import styled from "styled-components";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import PerfectScrollbar from "react-perfect-scrollbar";
import DocCodeSkeleton from "./DocCodeSkeleton";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const StyledOuterWrapper = styled.div`
  background: ${(p) => p.theme.colorCode};
  border-radius: ${(p) => p.theme.lenSm2} !important;
`;

const StyledWrapper = styled(PerfectScrollbar)`
  height: ${(p) => (p.noFixedHeight ? "auto" : "240px")} !important;
  max-height: 400px;
  overflow: auto;
  margin-bottom: ${(p) => p.theme.lenLg1};
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border: 0 !important;
  border-radius: ${(p) => p.theme.lenSm2} !important;
  box-shadow: none !important;
  overflow: visible !important;
  padding: ${(p) => p.theme.lenMd1} !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  background: ${(p) => p.theme.colorCode} !important;

  & > code {
    text-shadow: none !important;
  }
`;

const Wrapper = ({ children, noFixedHeight, isLoading }) => {
  const formattedCode = children.replace("components/library", "react-sensei");

  return !isLoading ? (
    <StyledOuterWrapper>
      <StyledWrapper noFixedHeight={noFixedHeight}>
        <StyledSyntaxHighlighter language="jsx" style={style}>
          {formattedCode}
        </StyledSyntaxHighlighter>
      </StyledWrapper>
    </StyledOuterWrapper>
  ) : (
    <StyledOuterWrapper>
      <DocCodeSkeleton />
    </StyledOuterWrapper>
  );
};

export default Wrapper;
