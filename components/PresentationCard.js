class PresentationCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "names",
      "lastnames",
      "srcimgf",
      "srcimgs",
      "srcimgt",
      "shortdescription",
      "profileimg"
    ];
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
        display: grid;
        grid-template-columns: 1fr .5fr;
        max-width: 901px;
        padding: 42px 45px;
        background: #5b189e10;
        box-shadow: 0px 0px 55px rgba(0, 0, 0, 0.19);
        border-radius: 25px;
        align-items: center;
        justify-items: flex-end;
    }

    div.card-info {
        max-width: 459px;
        margin-right: 20px;
    }

    h1.names {
        color: var(--font-color);
        font-size: 6.2rem;
        margin: 5px 0;
    }

    h2.lastnames {
        color: var(--font-color);
        font-size: 5.2rem;
        font-weight: 500;
        margin: 5px 0;
    }

    div.socialmedia-container {
        display: flex;
        align-items: center;
        padding: 0px;
        justify-content: space-between;
        width: 130px;
    }

    div.socialmedia-container > img {
        cursor: pointer;
    }
    div.socialmedia-container > img:hover {
        filter: invert(30%) sepia(50%) saturate(150%) hue-rotate(49deg) brightness(10%) contrast(85%);
        transition: 0.1s ease-in-out;
    }

    p.short-description {
        font-size: 1.6rem;
        color: rgba(237, 248, 248, 0.8);
        font-weight: 500;
        margin-bottom: 30px;
    }

    p.short-description > mark {
        background-color: var(--font-color);
        color: #102929;
        font-weight: 600;
        padding: 0 2px;
    }

    div.button-container {
        display: flex;
    }

    img.profile-img {
        max-height: 319px;
    }

  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${PresentationCard.styles}</style>
    <div class="card-container">
        <div class="card-info">
            <h1 class="names">${this.names}</h1>
            <h2 class="lastnames">${this.lastnames}</h2>
            <div class="socialmedia-container">
                <img src="${this.srcimgf}">
                <img src="${this.srcimgs}">
                <img src="${this.srcimgt}">
            </div>
            <p class="short-description">Frontend dev on the making. Tech lover. I’m passionate about art and personal growth. <mark>Do you want to create to improve LatAm?</mark> Get in touch with me!</p>
            <div class="button-container">
                <slot name="mystack"></slot>
                <slot name="aboutme"></slot>
            </div>
        </div>
        <img class="profile-img" src="${this.profileimg}">
    </div>`;
  }
}

customElements.define("presentation-card", PresentationCard);
