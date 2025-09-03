import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../../pages/Home";
import Counter from "../../pages/Counter";
import Comments from "../../pages/Comments";
import Products from "../../pages/Products";
import Profile from "../../pages/Profile";
import Weather from "../../pages/Weather";
import Todo from "../../pages/Todo";
import Button from "../../pages/Button";

import Navigation from "../Navigation";
function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/button" element={<Button />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
