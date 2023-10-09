class Product {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.price = obj.price;
    this.quantity = obj.quantity;
    this.imageUrl = obj.imageUrl;
    this.createdAt = obj.createdAt;
    this.updatedAt = obj.updatedAt;
  }

  static getId() {
    return this;
  }
}

export const productlist = [
  {
    id: 11,
    title: "ReactJs",
    price: "99 $",
    quantity: 0,
    imageUrl: "img/1.jpg",
  },
  {
    id: 12,
    title: "NodeJs",
    price: "199 $",
    quantity: 0,
    imageUrl: "img/2.jpg",
  },
  { id: 13, title: "Java", price: "299 $", quantity: 0, imageUrl: "img/3.jpg" },
  { id: 14, title: "C#", price: "99 $", quantity: 0, imageUrl: "img/4.jpg" },
  {
    id: 15,
    title: "NextJs",
    price: "59 $",
    quantity: 0,
    imageUrl: "img/5.jpg",
  },
  {
    id: 16,
    title: "NuxtJs",
    price: "899 $",
    quantity: 0,
    imageUrl: "img/6.jpg",
  },
  {
    id: 17,
    title: "LeedJs",
    price: "29 $",
    quantity: 0,
    imageUrl: "img/2.jpg",
  },
  {
    id: 18,
    title: "JAVAScript",
    price: "9 $",
    quantity: 0,
    imageUrl: "img/3.jpg",
  },
  {
    id: 19,
    title: "Postgres",
    price: "999 $",
    quantity: 0,
    imageUrl: "img/5.jpg",
  },
  {
    id: 21,
    title: "Laravel",
    price: "199 $",
    quantity: 0,
    imageUrl: "img/4.jpg",
  },
  {
    id: 22,
    title: "Asp.Net",
    price: "990 $",
    quantity: 0,
    imageUrl: "img/6.jpg",
  },
  {
    id: 23,
    title: "NextJs",
    price: "59 $",
    quantity: 0,
    imageUrl: "img/5.jpg",
  },
  {
    id: 24,
    title: "NuxtJs",
    price: "899 $",
    quantity: 0,
    imageUrl: "img/6.jpg",
  },
  {
    id: 25,
    title: "LeedJs",
    price: "29 $",
    quantity: 0,
    imageUrl: "img/2.jpg",
  },
  {
    id: 26,
    title: "JAVAScript",
    price: "9 $",
    quantity: 0,
    imageUrl: "img/3.jpg",
  },
  {
    id: 27,
    title: "Postgres",
    price: "999 $",
    quantity: 0,
    imageUrl: "img/5.jpg",
  },
  {
    id: 28,
    title: "Laravel",
    price: "199 $",
    quantity: 0,
    imageUrl: "img/4.jpg",
  },
  {
    id: 29,
    title: "Asp.Net",
    price: "990 $",
    quantity: 0,
    imageUrl: "img/6.jpg",
  },
];
