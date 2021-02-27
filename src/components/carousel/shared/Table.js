import styled from "styled-components";
import { rgba } from "polished";

const StyledTable = styled.table`
  width: 100%;
  min-width: ${(props) => props.minWidth || "auto"};
  border-collapse: collapse;
  font-size: 1.125rem;

  ${(props) =>
    props.cellVerticalAlign
      ? `
    & td {
      vertical-align: top;
    }
  `
      : ""};
`;

const StyledTbody = styled.tbody`
  & > tr:nth-child(even) {
    background: #f1f1f1;
  }
`;

const StyledThead = styled.thead`
  ${(props) => props.isSortable && `& th { padding: 0 }`};
`;

const StyledTr = styled.tr``;

const StyledTd = styled.td`
  padding: 1rem;
  border: 2px solid ${(p) => p.theme.colorBorder};
  line-height: 1.5;
  color: ${(props) => props.theme.colorText};
`;

const StyledTh = styled.th`
  text-align: left;
  font-weight: 500;
  padding: 1rem;
  border: 2px solid ${(p) => p.theme.colorBorder};
  color: ${(p) => p.theme.colorLabel};
`;

const Table = (props) => <StyledTable {...props}>{props.children}</StyledTable>;
const Tbody = (props) => <StyledTbody>{props.children}</StyledTbody>;
const Thead = (props) => <StyledThead {...props}>{props.children}</StyledThead>;
const Tr = (props) => <StyledTr {...props}>{props.children}</StyledTr>;
const Td = (props) => (
  <StyledTd
    style={{ verticalAlign: props.verticalAlign || "center" }}
    {...props}
  >
    {props.children}
  </StyledTd>
);
const Th = (props) => <StyledTh {...props}>{props.children}</StyledTh>;

export { Table, Tbody, Thead, Tr, Td, Th };
