import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledDivider = styled.div`
  border-top: 2px ${({ $dashed }) => ($dashed ? "dashed" : "solid")}
    ${({ theme }) =>
      theme?.divider?.stroke?.color || inube.divider.stroke.color};
  width: 100%;
`;

export { StyledDivider };
