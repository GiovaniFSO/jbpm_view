// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import mermaid from "mermaid";

document.onreadystatechange = function (){
    mermaid.initialize({startOnLoad: true});
}
