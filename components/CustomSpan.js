class CustomSpan extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["spancontent"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }

 static get styles() {
   return /* css */ `
     :host{
        --font-color: #edf8f8c8;
    }
    div {
      background: #5b189e10;
      border-radius: 20px;
      padding: 36px 60px;
      box-shadow: 0px 0px 55px rgba(0, 0, 0, 0.19);
      max-width: 750px;
    }

    span {
      color: var(--font-color);
      font-size: 1.6rem;
      line-height: 25px;
    }
    @media screen and (min-width: 340px) {
      div { 
          margin: 0 1rem;
          padding: 26px 38px;
      }
  }

  @media screen and (min-width: 640px){
      div { 
          margin: 0;
          padding: 36px 48px;
      }
  }
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${CustomSpan.styles}</style>
    <div>
        <span>${this.spancontent}</span>
    </div>`;
 }
}

customElements.define("custom-span", CustomSpan);