import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartService } from 'src/cart/cart.service';
import { CreateTempUserDto } from './dto/create-temp-user.dto';
import { TempUser } from './temp-user.model';

@Injectable()
export class TempUserService {
  constructor(
    @InjectModel(TempUser) private tempUserRepository: typeof TempUser,
    private cartService: CartService,
  ) {}

  async createTeporaryUser(dto: CreateTempUserDto) {
    try {
      const userCheck = await this.tempUserRepository.findOne({
        where: { uuidTempUser: dto.uuid },
      });

      if (userCheck) {
        const cartUser = await this.cartService.getCartById(
          userCheck.id.toString(),
        );
        return { userData: { user: userCheck, cart: cartUser } };
      }

      const user = await this.tempUserRepository.create({
        uuidTempUser: dto.uuid,
      });
      if (user) {
        // создание корзины
        const cart = await this.cartService.createCart({
          idTempUser: user.id,
          totalPriceEng: 0,
          totalPriceRu: 0,
        });

        return { userData: { user: user, cart: cart } };
      }
    } catch (e) {
      console.log(e);
    }
  }
}
