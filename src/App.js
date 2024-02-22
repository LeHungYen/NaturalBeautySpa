import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import { publicRoutes } from './routes/index'
import DefaultLayout from './layouts/DefaultLayout'
import {useDispatch, useSelector, useStore} from "react-redux";
import post from "./services/api-call";
import {updatePageData} from "./store/action";
import Loading from "./components/Loading/loading";
import store from "./store/store";
import {useEffect, useState} from "react";
function App() {
    const state = useSelector(state => state)
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
