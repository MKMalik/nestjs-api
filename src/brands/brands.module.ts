import { Module } from "@nestjs/common/decorators";
import { MongooseModule } from "@nestjs/mongoose";
import { BrandRepository } from "./brand.repository";
import { Brand, BrandSchema } from "./schemas/brand.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }])],
    providers: [BrandRepository],
    exports: [BrandRepository]
})

export class BrandsModule {}