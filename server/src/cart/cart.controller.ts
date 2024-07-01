import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddPatternToCart } from './dto/add-pattern-to-cart.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @ApiOperation({ summary: 'Получение корзины' })
  @Get('/:id')
  getCartById(@Param('id') id: string) {
    return this.cartService.getCartById(id);
  }

  @ApiOperation({ summary: 'Добавление паттерна в корзину' })
  @Post('/addPattern')
  addPatternToCart(@Body() dto: AddPatternToCart) {
    return this.cartService.addPatternToCart(dto);
  }

  @ApiOperation({ summary: 'Удаление паттерна из корзины' })
  @Delete('/deletePattern/:id')
  deletePatternFromCart(@Param('id') id: string) {
    return this.cartService.deletePatternFromCart(id);
  }
}
