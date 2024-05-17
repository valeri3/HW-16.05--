import {Injectable} from '@angular/core';

export class Product {
  public id: number;
  public name: string;
  public price: number;
  public image: string;
  public description: string;

  constructor(id: number, name: string, price: number, image: string, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() {
  }

  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      image: '/assets/img/Smartfon-APPLE-iPhone-15-Pro-Max.jpg',
      description: 'Лучший iPhone с титановым корпусом, процессором A17 Pro и камерой Tetraprism.'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 1199,
      image: '/assets/img/Smartfon-SAMSUNG-Galaxy-S24-Ultra.jpg',
      description: 'Флагманский Android телефон с плоским экраном и камерой 50MP.'
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: 999,
      image: '/assets/img/Smartfon-GOOGLE-Pixel-8-Pro.jpg',
      description: 'Телефон от Google с чистым Android и выдающимися возможностями камеры.'
    },
    {
      id: 4,
      name: 'OnePlus 12',
      price: 899,
      image: '/assets/img/Smartfon-ONEPLUS-12.jpg',
      description: 'Флагман от OnePlus с быстрым зарядом и экраном 120Hz.'
    },
    {
      id: 5,
      name: 'Sony Xperia 1 V',
      price: 1299,
      image: '/assets/img/Smartfon-SONY-Xperia-1-V.jpg',
      description: 'Телефон с лучшим дисплеем и аудио технологиями от Sony.'
    },
    {
      id: 6,
      name: 'Xiaomi 13 Pro',
      price: 1099,
      image: '/assets/img/Smartfon-XIAOMI-Redmi-Note-13-Pro.jpg',
      description: 'Китайский флагман с мощным процессором и камерой от Leica.'
    },
    {
      id: 7,
      name: 'Huawei Mate 50 Pro',
      price: 1199,
      image: '/assets/img/Smartfon-HUAWEI-Mate-50-Pro.jpg',
      description: 'Флагман от Huawei с мощной камерой и дисплеем OLED.'
    },
    {
      id: 8,
      name: 'Asus ROG Phone 7',
      price: 999,
      image: '/assets/img/Smartfon-ASUS-ROG-Phone-7.jpg',
      description: 'Лучший игровой телефон с улучшенной системой охлаждения.'
    },
    {
      id: 9,
      name: 'Oppo Find X6 Pro',
      price: 1049,
      image: '/assets/img/Smartfon-REALME-GT-Neo-3.jpg',
      description: 'Телефон с выдающимся дизайном и возможностями камеры.'
    },
    {
      id: 10,
      name: 'Realme GT Neo 3',
      price: 799,
      image: '/assets/img/Smartfon-Oppo-Find-X6-Pro.jpg',
      description: 'Высокая производительность по доступной цене.'
    }
  ];

  getAllProducts() {
    console.log("Получение данных")
    return this.products;
  }

  filterProducts(filter: string): Product[] {
    console.log("Фильтр данных по имени")
    return this.products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  sortByNameAsc(): Product[] {
    console.log("sortByNameAsc")
    return [...this.products].sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByNameDesc(): Product[] {
    console.log("sortByNameDesc")
    return [...this.products].sort((a, b) => b.name.localeCompare(a.name));
  }

  sortByMaxPrice(): Product[] {
    console.log("sortByMaxPrice")
    return [...this.products].sort((a, b) => b.price - a.price);
  }

  sortByMinPrice(): Product[] {
    console.log("sortByMinPrice")
    return [...this.products].sort((a, b) => a.price - b.price);
  }


}
