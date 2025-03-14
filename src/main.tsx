import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TalentView from "./TalentView";
import webComponents from "react-to-webcomponent";

const Webcomponent = webComponents(TalentView, React, ReactDOM);
if(!customElements.get("talent-view")){
    customElements.define("talent-view", Webcomponent);
}
else{
    console.log("Talent View already defined");
}
