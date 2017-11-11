import { CollectionViewer } from "./collection-viewer";
import { render, html, TemplateResult } from "lit-html";
import "./cell.component";
import "./column.component";
import "./paginator.component";

export class DataTableComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    async connectedCallback() {
    
        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'datatable');

        this.render();
        this.bind();
        this.setEventListeners();
    }

    public get templateResult(): TemplateResult {
        return html``;
    }

    public render() {
        if (!this.shadowRoot) { this.attachShadow({ mode: "open" }); }

        render(this.templateResult, this.shadowRoot);
    }

    private async bind() {

    }

    private setEventListeners() {

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

customElements.define(`ce-data-table`,DataTableComponent);
