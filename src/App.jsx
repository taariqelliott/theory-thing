
import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/" element={< Desktop />} />
                    <Route path="/mobile" element={< Mobile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
