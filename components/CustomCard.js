class CustomCard extends HTMLElement {
 constructor() {
    super();
    this.attachShadow({ mode: "open" });
 }

 static get observedAttributes() {
    return ["cardimg", "cardtitle", "cardcontent"];
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
        flex-direction: column;
        justify-content: center;
        background: #5b189e10;
        height: 260px;
        width: 200px;
        border-radius: 20px;
        box-shadow: 0px 0px 55px rgba(0, 0, 0, 0.19);
        text-align: center;
        padding: 44px 42px;
        align-items: center;
    }

    div.card-container:hover {
      background: #189e7210;
      transition: 0.1s ease-in-out;
  }

    img {
        height: 70px;
    }

    h4 {
        color: var(--font-color);
        font-size: 1.8rem;
        font-weight: 600;
        margin: 16px 0;
    }

    p {
        color: #edf8f8c8;
        font-size: 1.6rem;
        width: 154px;
        margin: 0;
    }
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${CustomCard.styles}</style>
    <div class="card-container">
        <img src="${this.cardimg}">
        <h4 class="card-title">${this.cardtitle}</h4>
        <p class="card-p">${this.cardcontent}</p>
    </div>`;
 }
}

customElements.define("custom-card", CustomCard);