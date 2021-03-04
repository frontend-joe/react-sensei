import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { DocCode } from "../shared";
import PerfectScrollbar from "react-perfect-scrollbar";

import Moment from "react-moment";

const openStyles = css`
  transform: translateX(0);
`;

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 6;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  background: ${(p) => p.theme.colorCardBackground};
  color: ${(p) => p.theme.colorText};
  width: 80%;
  height: 100%;
  transition: transform 0.45s;

  ${(p) => p.isDocsOpen && openStyles};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: flex;
    flex-direction: column;
    position: static;
    z-index: 1;
    transform: none;
    flex: 1 1 300px;
    height: 100%;
    width: 400px;
    max-width: 400px;
    min-width: 400px;
  }
`;

const StyledContent = styled(PerfectScrollbar)`
  flex: 0 1 auto;
  overflow: auto;
  padding: 0 ${(p) => p.theme.lenMd3} 0;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(p) => p.theme.lenMd3} ${(p) => p.theme.lenMd3} 0;
  margin-bottom: 2rem;
`;

const StyledCloseButton = styled.button`
  font-size: ${(p) => p.theme.lenLg1};
  color: ${(p) => p.theme.colorLabel};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${(p) => p.theme.lenSm1};
`;

const StyledSubtitle = styled.div`
  color: ${(p) => p.theme.colorLabel};
`;

const StyledSectionHeader = styled.div`
  font-weight: ${(p) => p.theme.fontWeightSemibold};
  margin-bottom: ${(p) => p.theme.lenMd1};
  color: ${(p) => p.theme.colorPrimary};
`;

const StyledProp = styled.div`
  margin-bottom: ${(p) => p.theme.lenMd2};
`;

const StyledPropHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => p.theme.lenSm2};
  font-weight: ${(p) => p.theme.fontWeightSemibold};
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

const StyledPropHyperlink = styled.a`
  padding: 0.5rem 0;
  display: block;
  font-weight: 600;
  color: ${(p) => p.theme.colorPrimary};
`;

const StyledCodeError = styled.div`
  margin-bottom: ${(p) => p.theme.lenMd3};
`;

const Docs = ({ docs, setDocsOpen, isDocsOpen }) => {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/frontend-joe/react-sensei/master/src/components/library/${docs?.githubPath}/Example.js`,
        { crossdomain: true }
      )
      .then((response) => {
        // handle success
        setCode(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        setCodeError("Error connecting to GitHub");
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <StyledWrapper isDocsOpen={isDocsOpen}>
      <StyledHeader>
        <div>
          <StyledTitle>{docs?.title}</StyledTitle>
          <StyledSubtitle>
            <Moment fromNow parse="DD/MM/YYYY">
              {docs?.updated}
            </Moment>
          </StyledSubtitle>
        </div>
        <StyledCloseButton onClick={() => setDocsOpen(false)}>
          <i className="uil uil-multiply"></i>
        </StyledCloseButton>
      </StyledHeader>

      <StyledContent>
        <StyledSectionHeader>Example</StyledSectionHeader>
        {codeError && <StyledCodeError>{codeError}</StyledCodeError>}
        {!codeError && (
          <DocCode isLoading={code === ""} noFixedHeight>
            {code}
          </DocCode>
        )}
        <StyledSectionHeader>Props</StyledSectionHeader>
        {docs?.options?.map((option) => (
          <StyledProp key={option.name}>
            <StyledPropHeader>
              <StyledPropName>{option.name}</StyledPropName>
              <StyledPropType>{option.type}</StyledPropType>
            </StyledPropHeader>
            <StyledPropPurpose>{option.purpose}</StyledPropPurpose>
            {option.hyperlink && (
              <StyledPropHyperlink target="_blank" href={option.hyperlink}>
                {option.hyperlinkText}
              </StyledPropHyperlink>
            )}
          </StyledProp>
        ))}
      </StyledContent>
    </StyledWrapper>
  );
};

export default Docs;
