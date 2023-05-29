// @ts-nocheck
import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import Main from "./views/pages/Main";
import Info from "./views/pages/Info";

export default function App() {
  const infoComp = { path: "/", element: <Info /> };

  let element = useRoutes([infoComp, { path: "/main", element: <Main /> }]);

  console.log("test");

  return <Container>{element}</Container>;
}

const Container = styled.div`
  background: url("https://source.unsplash.com/daily") no-repeat center center
    fixed;
  background-size: cover;
`;
