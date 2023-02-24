import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandController } from './brands/brand.controller';
import { BrandService } from './brands/brand.service';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    BrandsModule
  ],
  controllers: [AppController, BrandController],
  providers: [AppService, BrandService],
})
export class AppModule { }
