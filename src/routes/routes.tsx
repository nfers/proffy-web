import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "../pages/Landing/index";
import Posts from "../pages/Posts";
import TeacherForm from "../pages/TeacherForm";
import TeacherList from "../pages/TeacherList";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}

export default Routes;
