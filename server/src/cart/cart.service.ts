import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseService } from './../database/database.service';
import { Cart } from './cart.model';
import { CreateCart } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private databaseService: DatabaseService,
  ) {}

  // Создание корзины

  async createCart(dto: CreateCart) {
    try {
      const cart = await this.cartRepository.create({
        idTempUser: dto.idTempUser,
        totalPriceEng: dto.totalPriceEng,
        totalPriceRu: dto.totalPriceRu,
      });

      return cart;
    } catch (e) {
      console.log(e);
    }
  }

  async getCartByTempUserId(tempUserId: number) {
    try {
      const cart = await this.cartRepository.findOne({
        where: { idTempUser: tempUserId },
      });
      return cart;
    } catch (e) {
      console.log(e);
    }
  }

  async getCartById(id: string) {
    try {
      const cart = await this.cartRepository.findByPk(id);
      return cart;
    } catch (e) {
      console.log(e);
    }
  }

  // Удаление корзины
  // Обновление корзины
  // Проверка создания
}
