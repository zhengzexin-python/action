import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;
  public imgurl: string;
  constructor() {
  }

  ngOnInit() {
    this.imgurl = 'http://via.placeholder.com/320x150';
    this.products = [
      new Product(1, '希捷2T移动硬盘', 645, 3.5, '这是一个2T的移动硬盘，3.0接口', ['电子产品']),
      new Product(2, 'spring in action', 89, 4.5, '这是一本关于spring框架的书籍', ['图书', 'java']),
      new Product(3, '黑暗之魂3', 358, 4.5, '这是一款恋爱养成类游戏', ['游戏', '恋爱养成', '动作']),
      new Product(4, '利用Python进行数据分析', 120, 4.5, '这是一本关于Python数据分析的书籍', ['图书', 'Python', 'pandas'])
    ];
  }

}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public des: string,
              public categories: Array<string>) {
  }
}
