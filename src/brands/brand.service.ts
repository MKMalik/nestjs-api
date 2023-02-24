import { Injectable } from "@nestjs/common";
import { BrandRepository } from "./brand.repository";
import { Brand } from "./schemas/brand.schema";
import { UpdateBrandDto } from "./dto/updateBrandDto";

@Injectable()
export class BrandService {
    constructor(private readonly brandRepository: BrandRepository) { }

    async getBrandById(brandId: string): Promise<Brand> {
        return this.brandRepository.findOne({ _id: brandId });
    }

    async getBrands(): Promise<Brand[]> {
        return this.brandRepository.find({});
    }

    async createBrand(brand: Brand): Promise<Brand> {
        return this.brandRepository.create(brand);
    }

    async updateBrand(brandId: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
        return this.brandRepository.findOneAndUpdate(brandId, updateBrandDto);
    }

    async removeByBrandId(brandId: string): Promise<Brand> {
        return this.brandRepository.removeByBrandId(brandId);
    }

}