import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { UpdateBrandDto } from './dto/updateBrandDto';
import { Brand } from './schemas/brand.schema';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) { }

    @Get(':brandId')
    getBrand(@Param('brandId') brandId: string): Promise<Brand> {
        return this.brandService.getBrandById(brandId);
    }

    @Get()
    getBrands(@Param('brandId') brandId: string): Promise<Brand[]> {
        return this.brandService.getBrands();
    }

    @Post()
    createBrand(@Body() body: Brand): Promise<Brand> {
        const { brand_name, transaction_type, total_orders, total_order_value, gross_margin_percentage } = body;
        console.log(body, '!!!');
        
        return this.brandService.createBrand({ brand_name, transaction_type, total_orders, total_order_value, gross_margin_percentage });
    }

    @Patch(':brandId')
    updateBrand(@Param('brandId') brandId: string, @Body() updateBrandDto: UpdateBrandDto): Promise<Brand> {
        return this.brandService.updateBrand(brandId, updateBrandDto);
    }

    @Delete(':brandId')
    removeByBrandId(@Param('brandId') brandId: string): Promise<Brand> {
        return this.brandService.removeByBrandId(brandId);
    }
}
