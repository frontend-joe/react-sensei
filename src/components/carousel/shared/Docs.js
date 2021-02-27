import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

const openStyles = css`
  transform: translateX(0);
`;

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  padding: 1rem 1rem 0;
  width: 65%;
  height: 100%;
  background: ${(p) => p.theme.colorCardBackground};
  color: ${(p) => p.theme.colorText};
  transform: translateX(-100%);

  ${(p) => p.isDocsOpen && openStyles};

  transition: transform 0.5s;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 0 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${(p) => p.theme.colorBorder};
`;

const StyledCloseButton = styled.button`
  color: ${(p) => p.theme.colorText};

  & > span {
    font-size: 2rem;
  }
`;

const StyledSectionHeader = styled.div`
  font-weight: 600;
  padding-bottom: ${(p) => p.theme.lenMd1};
  margin-bottom: ${(p) => p.theme.lenMd1};
  border-bottom: 2px solid ${(p) => p.theme.colorBorder};
`;

const StyledProp = styled.div`
  margin-bottom: ${(p) => p.theme.lenMd2};
`;

const StyledPropHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => p.theme.lenSm2};
`;

const StyledPropName = styled.div`
  color: ${(p) => p.theme.colorText};
`;

const StyledPropType = styled.div`
  margin-left: ${(p) => p.theme.lenSm2};
  font-size: ${(p) => p.theme.lenSm3};
  color: ${(p) => p.theme.colorLabel};
`;

const StyledPropPurpose = styled.div`
  color: ${(p) => p.theme.colorLabel};
  line-height: 1.25;
`;

const Docs = ({ docs, setDocsOpen, isDocsOpen }) => {
  return (
    <StyledWrapper isDocsOpen={isDocsOpen}>
      <StyledTitle>
        {docs?.title}
        <StyledCloseButton onClick={() => setDocsOpen(false)}>
          <span className="material-icons">close</span>
        </StyledCloseButton>
      </StyledTitle>
      <StyledSectionHeader>Props</StyledSectionHeader>

      {docs.options.map((option) => (
        <StyledProp key={option.name}>
          <StyledPropHeader>
            <StyledPropName>{option.name}</StyledPropName>
            <StyledPropType>{option.type}</StyledPropType>
          </StyledPropHeader>
          <StyledPropPurpose>{option.purpose}</StyledPropPurpose>
        </StyledProp>
      ))}
    </StyledWrapper>
  );
};

export default Docs;
