import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import { publicRoutes } from './routes/index'
import DefaultLayout from './layouts/DefaultLayout'
import {useDispatch, useSelector, useStore} from "react-redux";
function App() {
    const {lang} = useSelector(state => ({
        lang: state.lang,
    }))
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              }
              const Page = route.component;
              return (
                <Route key={index}
                  path={route.path}
                  element={
                    <Layout><Page layout={Layout}/></Layout>
                  }>
                </Route>
              );
            })};
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
