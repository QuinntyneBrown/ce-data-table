import { render, html, TemplateResult } from "lit-html";

export class CellComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    connectedCallback() {    
        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'cell');

        this._bind();
        this._setEventListeners();
    }

    public get templateResult() {
        return html`

        `;
    }

    private _render() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });

        render(this.templateResult, this.shadowRoot);
    }

    private async _bind() {

    }

    private _setEventListeners() {

    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

customElements.define(`ce-cell`,CellComponent);
