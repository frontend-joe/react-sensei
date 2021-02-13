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
  padding: ${(p) => p.theme.customPadding || 0};
  margin-bottom: ${(p) => !p.noBottomMargin && p.theme.lengthMd};
  border-radius: ${(p) => p.theme.borderRadius};
  background: ${(p) => p.theme.colorCardBackground};
  color: ${(p) => p.theme.colorText};

  ${(p) => p.isPrimary && primary};
  ${(p) => p.isAccent && accent};
`;

const flexStyles = css`
  align-items: ${(p) => p.alignItems || "flex-start"};
  justify-content: ${(p) => p.justifyContent || "flex-start"};
`;

const CardContent = styled.div`
  display: ${(p) => (p.isFlex ? "flex" : "block")};
  padding: ${(p) =>
    p.hasTitle
      ? `0 ${p.theme.lengthMd}  ${p.theme.lengthMd}`
      : p.theme.lengthMd};
`;

const CardTitle = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${(p) => p.theme.colorBorder};
  padding: 0 ${(p) => p.theme.lengthMd};
  color: ${(p) => p.theme.colorLabel};
  margin-bottom: ${(p) => p.theme.lengthMd};
`;

export default ({
  children,
  cardTitle,
  isPrimary,
  isAccent,
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  customPadding,
  noBottomMargin,
  ...rest
}) => {
  return (
    <Card
      {...rest}
      isPrimary={isPrimary}
      isAccent={isAccent}
      customPadding={customPadding}
      noBottomMargin={noBottomMargin}
    >
      {cardTitle && <CardTitle>{cardTitle}</CardTitle>}
      <CardContent
        isFlex={isFlex}
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        hasTitle={cardTitle}
      >
        {children}
      </CardContent>
    </Card>
  );
};
