import styled from "styled-components";

export const colors = [
  {
    colorCode: "#ef4444",
    name: "red",
    fontColor:'black'
  },
  {
    colorCode: "var(--primary-color)",
    name: "white",
  },
  {
    colorCode: "#15803d",
    name: "green",
    fontColor:'black'
  },
  {
    colorCode: "#6366f1",
    name: "blue",
    fontColor:'black'
  },
];
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Color = styled.button`
  border-radius: 50%;
  padding: 0.7rem;
  margin: 0.1rem;
  border: 1px solid var(--secondary-color);
  @media (max-width: 768px){
    padding: 0.5rem;
    margin: 0.1rem;
  }
`;