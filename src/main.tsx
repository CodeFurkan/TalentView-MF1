import React from "react";
import ReactDOM from "react-dom/client";
import TalentView from "./TalentView.tsx";
import LuigiClient from "@luigi-project/client";

export class TalentViewElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		LuigiClient.uxManager().showAlert({
			text: "TalentView wurde geladen!",
			type: "info",
		});
	}

	connectedCallback() {
		if (!this.shadowRoot) return;
		const mountPoint = document.createElement("div");
		this.shadowRoot.appendChild(mountPoint);
		const root = ReactDOM.createRoot(mountPoint);
		root.render(
			<React.StrictMode>
				<TalentView />
			</React.StrictMode>,
		);
	}
}
// Registriere die Web Component
// customElements.define("talent-view", TalentViewElement);
