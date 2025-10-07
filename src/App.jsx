import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Dashboard, NotFound, Faqs, ApplyBusPass, ApplicationStatus } from "./pages/pagesExport";
import { Layout, MinimalLayout } from "./components/componentsExports";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/apply" element={<ApplyBusPass />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route path="/status" element={<ApplicationStatus />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
