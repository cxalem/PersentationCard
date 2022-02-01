class CustomButton extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["buttoncontent"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }

 static get styles() {
   return /* css */ `
     :host{

        --font-color: #EDF8F8;

    }

    button {
        font-size: 1.5rem;
        border-width: 0px;
        max-width: 219px;
        padding: 13px 55px;
        border-radius: 100px;
        color: var(--font-color);
        background: #5B189E;
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
    <style>${CustomButton.styles}</style>
    <div>
        <button class="contactme" type="button">${this.buttoncontent}</button>
    </div>`;
 }
}

customElements.define("custom-button", CustomButton);