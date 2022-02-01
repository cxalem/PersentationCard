class AboutMeButton extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["aboutme"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }

 static get styles() {
   return /* css */ `
     :host{

    }
    button {
        font-size: 1.5rem;
        max-width: 219px;
        padding: 13px 55px;
        border-radius: 100px;
        color: var(--font-color);
        background: none;
        border-style: solid;
        border-width: 1.5px;
        border-color: var(--font-color);
        cursor: pointer;
    }

    button:hover {
        border-color: #edf8f800;
        background: #9e188f;
        box-shadow: 0 0 15px #9e188f;
        transition: 0.1s ease-in-out;
    }

  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${AboutMeButton.styles}</style>
    <div>
        <button class="about-me" type="button">${this.aboutme}</button>
    </div>`;
 }
}

customElements.define("aboutme-button", AboutMeButton);