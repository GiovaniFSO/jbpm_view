import mermaid from "mermaid";

require("mermaid");

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        this.mermaidStart();
    }

    mermaidStart() {
        mermaid.initialize({startOnLoad: true});
    }
}
