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
      "profileimg",
      "githublink",
      "linkedinlink",
      "twitterlink"
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
    a > img:hover {
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

    @media screen and (min-width: 340px){
      div.card-container {
        grid-template-columns: 1fr;
        margin: 0 1rem;
      }
      div.card-info h1 {
        font-size: 4.2rem;
      }
      div.card-info h2 {
        font-size: 3.2rem;
      }
      img.profile-img {
        display: none;
      }
      div.button-container {
        display: grid;
        row-gap: 15px;
    }
  }

    @media screen and (min-width: 640px){
      div.card-container {
        grid-template-columns: 1fr .5fr;
        justify-items: flex-end;
        margin: 0;
      }
      div.card-info h1 {
        font-size: 6.2rem;
      }
      div.card-info h2 {
        font-size: 5.2rem;
      }
      img.profile-img {
        display: block;
      }
      div.button-container {
        display: flex;
        flex-direction: initial;
    }
      div.button {
        margin-right: 15px;
    }
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
                <a href="${this.githublink}" target="_blank"><img src="${this.srcimgf}"></a>
                <a href="${this.twitterlink}" target="_blank"><img src="${this.srcimgt}"></a>
                <a href="${this.linkedinlink}" target="_blank"><img src="${this.srcimgs}"></a>
            </div>
            <p class="short-description">Frontend dev on the making. Tech lover. I’m passionate about art and personal growth. <mark>Do you want to create to improve Latin America?</mark> Let's do it together!</p>
            <div class="button-container">
              <div class="button">
                <slot name="mystack"></slot>
              </div>
                <slot name="aboutme"></slot>
            </div>
        </div>
        <img class="profile-img" src="${this.profileimg}">
    </div>`;
  }
}

customElements.define("presentation-card", PresentationCard);
