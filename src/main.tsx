import React from "react";
import ReactDOM from "react-dom/client";
import TalentView from "./TalentView.tsx";

class TalentViewElement extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			const mountPoint = document.createElement("div");
			this.appendChild(mountPoint);
			const root = ReactDOM.createRoot(mountPoint);
			root.render(
				<React.StrictMode>
					<TalentView />
				</React.StrictMode>,
			);
		}
	}
}

// Registriere die Web Component
if (customElements.get("talent-view")) {
	console.warn(
		"'talent-view' ist bereits registriert. Registrierung wird übersprungen.",
	);
} else {
	customElements.define("talent-view", TalentViewElement);
}
