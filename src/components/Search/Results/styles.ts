import { styled } from "@/css/styled";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
`;

export const StationButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px 0;
  width: 100%;
  text-align: left;
  min-width: 0;
`;

export const Title = styled.h3`
  color: #555;
  font-weight: 500;
`;

export const Subtitle = styled.h4`
  font-weight: 500;
  margin-bottom: 5px;
  color: #444;
`;

export const StationLink = styled.a`
  text-decoration: none;
`;
