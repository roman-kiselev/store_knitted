import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { MasterClass } from 'src/master-class/master-class.model';
import { PatternParams } from 'src/pattern-params/pattern-params.model';
import { TempUser } from 'src/temp-user/temp-user.model';
import { Toys } from 'src/toys/toys.model';
import { DatabaseService } from './../database/database.service';
import { CartPattern } from './cart-pattern.model';
import { Cart } from './cart.model';
import { AddPatternToCart } from './dto/add-pattern-to-cart.dto';
import { CreateCart } from './dto/create-cart.dto';
import { ICart } from './interfaces/ICart';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private databaseService: DatabaseService,
    @InjectModel(MasterClass) private masterClassRepository: typeof MasterClass,
    @InjectModel(Toys) private toysRepository: typeof Toys,
    @InjectModel(TempUser) private tempUserRepository: typeof TempUser,
    @InjectModel(CartPattern) private cartPatternRepository: typeof CartPattern,
  ) {}

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
      const cart = await this.cartRepository.findByPk(id, {
        include: {
          model: MasterClass,
        },
      });
      const copyCart: ICart = JSON.parse(JSON.stringify(cart));
      const { patterns } = copyCart;
      const newPatterns = [];
      for (const item of patterns) {
        const pattern = await this.masterClassRepository.findByPk(item.id, {
          include: [
            {
              model: PatternParams,
            },
            {
              model: FilesMasterClass,
            },
          ],
        });
        const jsonPattern = JSON.parse(JSON.stringify(pattern));
        newPatterns.push({
          ...jsonPattern,
          quantity: item.CartPattern.quantity,
          idCartPattern: item.CartPattern.id,
        });
      }

      copyCart.patterns = newPatterns;
      return copyCart;
    } catch (e) {
      console.log(e);
    }
  }

  async addPatternToCart(dto: AddPatternToCart) {
    try {
      const { idCart, idPattern, idTempUser } = dto;
      const cart = await this.cartRepository.findByPk(idCart);
      const pattern = await this.masterClassRepository.findByPk(idPattern);
      const tempUser = await this.tempUserRepository.findByPk(idTempUser);
      if (!cart) {
        throw new HttpException('Корзина не найдена', HttpStatus.BAD_REQUEST);
      }
      if (!pattern) {
        throw new HttpException(
          'Мастер класс не найден',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!tempUser) {
        throw new HttpException(
          'Пользователь не найден',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (cart && pattern && tempUser) {
        const cartPattern = await this.cartPatternRepository.findOne({
          where: { cartId: idCart, patternId: idPattern },
        });
        if (!cartPattern) {
          const newCartPattern = await this.cartPatternRepository.create({
            cartId: cart.id,
            patternId: pattern.id,
            quantity: 1,
          });
          await cart.update({
            totalPriceEng: cart.totalPriceEng + pattern.priceEng,
          });
          await cart.update({
            totalPriceRu: cart.totalPriceRu + pattern.priceRu,
          });
        }
      }

      const updatedCart = await this.getCartById(cart.id.toString());
      return updatedCart;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(
        'Ошибка сервера',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Удаление корзины
  async deletePatternFromCart(id: string) {
    try {
      const cartPattern = await this.cartPatternRepository.findByPk(id);
      const cart = await this.cartRepository.findByPk(cartPattern.cartId);
      const pattern = await this.masterClassRepository.findByPk(
        cartPattern.patternId,
      );
      if (!cartPattern) {
        throw new HttpException('Не найден', HttpStatus.BAD_REQUEST);
      }
      await cartPattern.destroy();

      if (!cart) {
        throw new HttpException('Не найден', HttpStatus.BAD_REQUEST);
      }
      await cart.update({
        totalPriceEng: cart.totalPriceEng - pattern.priceEng,
      });
      await cart.update({
        totalPriceRu: cart.totalPriceRu - pattern.priceRu,
      });

      const updatedCart = await this.getCartById(cart.id.toString());
      return updatedCart;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(
        'Ошибка сервера',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  // Обновление корзины
  // Проверка создания
}
