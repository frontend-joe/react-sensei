import React from "react";
import styled, { css } from "styled-components";

const primary = css`
  background: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorPrimaryText};
`;

const accent = css`
  background: ${(p) => p.theme.colorAccent};
  color: ${(p) => p.theme.colorAccentText};
`;

const Card = styled.div`
  padding: ${(p) => (p.hasTitle ? 0 : p.theme.lenMd1)};
  margin-bottom: ${(p) => !p.noBottomMargin && p.theme.lenMd1};
  border-radius: ${(p) => p.theme.borderRadius};
  background: ${(p) => p.theme.colorCardBackground};
  color: ${(p) => p.theme.colorText};

  ${(p) => p.isPrimary && primary};
  ${(p) => p.isAccent && accent};
`;

const CardContent = styled.div`
  padding: 0 ${(p) => p.theme.lenMd3} ${(p) => p.theme.lenMd3};
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => p.theme.lenXl2};
  padding: 0 ${(p) => p.theme.lenMd1};
  color: ${(p) => p.theme.colorLabel};
  font-size: ${(p) => p.theme.lenMd2};
`;

export default ({
  children,
  cardTitle,
  isPrimary,
  isAccent,
  noBottomMargin,
  ...rest
}) => {
  return (
    <Card
      hasTitle={cardTitle}
      isPrimary={isPrimary}
      isAccent={isAccent}
      noBottomMargin={noBottomMargin}
      {...rest}
    >
      {cardTitle && (
        <>
          <CardTitle>{cardTitle}</CardTitle>
          <CardContent>{children}</CardContent>
        </>
      )}
      {!cardTitle && children}
    </Card>
  );
};
