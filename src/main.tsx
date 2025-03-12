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
customElements.define("talent-view", TalentViewElement);
