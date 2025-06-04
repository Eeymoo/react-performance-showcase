import styled from "@emotion/styled";

export const DiffSpan = styled.span`
  color: #333;
  border-radius: 4px;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`;
export const DiffAbridgeSpan = styled.span`
  color: #999;
  background-color: #f0f0f0;
  padding: 0 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`;
export const DiffAddSpan = styled.span`
  color: green;
  background-color: #e6ffed;
  padding: 0 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`;
export const DiffRemoveSpan = styled.span`
  color: red;
  background-color: #fff1f0;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
  text-decoration: line-through;
`;
