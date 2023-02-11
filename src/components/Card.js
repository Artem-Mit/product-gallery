export default class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._link = data.link;
    this._title = data.title;
    this._normalPrice = data.price;
    this._stockPrice = data.stockPrice;
    this._stock = Boolean(data.stock);
    this._newItem = Boolean(data.newItem);
    this._counter = 1;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".product")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._addBtn = this._element.querySelector(".product__counter-add-btn");
    this._deleteBtn = this._element.querySelector(".product__counter-delete-btn");
    this._addBtn.addEventListener("click", () => {
      this._counter += 1
      this._counterText.textContent = this._counter;
    })
    this._deleteBtn.addEventListener("click", () => {
      if (this._counter > 0) {
        this._counter -= 1
        this._counterText.textContent = this._counter;
      }
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._additionalImg = this._element.querySelector(".product__additional-img")
    this._link.forEach(element => {
      const i = document.createElement("img")
      i.classList.add("product__image")
      i.src = element;
      i.alt = this._title;
      this._element.querySelector('.owl-carousel').append(i)
    });
    this._titleName = this._element.querySelector(".product__title");
    this._titleName.textContent = this._title;
    this._normalPriceText = this._element.querySelector(".product__price_normal");
    this._normalPriceText.textContent = this._normalPrice;
    this._stockPriceText = this._element.querySelector(".product__price_stock");
    if (this._stockPrice) {
      this._stockPriceText.textContent = this._stockPrice;
    } else {
      this._normalPriceText.setAttribute("style", "margin: 0")
      this._stockPriceText.setAttribute("style", "display: none")
    }
    if (this._stock) {
      this._additionalImg.classList.add("product__additional-img_hit")
    }
    if (this._newItem) {
      this._additionalImg.classList.add("product__additional-img_new")
    }

    this._counterText = this._element.querySelector(".product__counter-text");
    this._counterText.textContent = this._counter;
    this._setEventListeners();
    return this._element;
  }
}