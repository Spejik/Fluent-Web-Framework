import { CDN_URL } from "../../fluent";
import { FluentElement, FluentRegister } from "../fluent-element";

export class Expander extends HTMLElement implements FluentElement {
	connectedCallback() {
		// TODO: ???
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const Header = this.attributes.Header != null ? this.attributes.Header.value : "";

		setTimeout(() => {
			if (this.hasAttribute("expanded")) {
				this.outerHTML = /*html*/`<div style="${this.style.cssText}" class="fluent-expander"><div class="fluent-expander-header" style="border-radius: 4px 4px 0px 0px;"><p>${Header}</p><div><img class="fluent-expander-arrow" style="transform: rotate(180deg)" src="${CDN_URL}/img/arrow_down.svg"></div></div><div class="fluent-expander-body-container"><div class="fluent-expander-body expanded">${this.innerHTML}</div></div></div>`;
			}
			else {
				this.outerHTML = /*html*/`<div style="${this.style.cssText}" class="fluent-expander"><div class="fluent-expander-header"><p>${Header}</p><div><img class="fluent-expander-arrow" src="${CDN_URL}/img/arrow_down.svg"></div></div><div class="fluent-expander-body-container"><div class="fluent-expander-body">${this.innerHTML}</div></div></div>`;
			}
		});
	}
}

FluentRegister(Expander, "fluent-expander");
