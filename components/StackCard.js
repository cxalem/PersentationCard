class StackCard extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["stacktitle", "stackdescription", "stackimg"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }

 static get styles() {
   return /* css */ `
     :host{
         --font-color: #EDF8F8;
    }
    div.card-container {
        display: flex;
        padding: 36px 48px;
        background: #5b189e10;
        box-shadow: 0px 0px 55px rgba(0, 0, 0, 0.19);
        border-radius: 20px;
        align-items: center;
        justify-items: flex-end;
        max-width: 600px;
    }

    div.card-container:hover {
        background: #189e7210;
        transition: 0.1s ease-in-out;
    }

    img {
        height: 55px;
        margin-right: 30px;
    }

    div.info-container p {
        color: #edf8f8c8;
        font-size: 1.6rem;
        margin: 5px 0 0 0;
    }

    div.info-container h4 {
        color: var(--font-color);
        font-size: 1.7rem;
        margin: 0;
    }

  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${StackCard.styles}</style>
    <div class="card-container">
    <img src="${this.stackimg}">
        <div class="info-container">
            <h4>${this.stacktitle}</h4>
            <p>${this.stackdescription}</p>
        </div>
    </div>`;
 }
}

customElements.define("stack-card", StackCard);