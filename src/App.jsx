import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeViewContainer } from "./containers/views/HomeViewContainer";
import { CharacterViewContainer } from "./containers/views/CharacterViewContainer";
import SignUpViewContainer from "./containers/views/SignUpViewContainer";
import SignInViewContainer from "./containers/views/SignInViewContainer"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeViewContainer />} />
        <Route path="/characters/:id" element={<CharacterViewContainer />} />
        <Route path="/signup" element={<SignUpViewContainer />} />
        <Route path="/signin"  element={<SignInViewContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
