import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";
import { Brand, BrandDocument } from "./schemas/brand.schema";

@Injectable()
export class BrandRepository {
    constructor(@InjectModel(Brand.name) private brandModel: Model<BrandDocument>) { }

    async findOne(brandFilterQuery: FilterQuery<BrandDocument>): Promise<Brand> {
        return this.brandModel.findOne(brandFilterQuery);
    }

    async find(brandFilterQuery: FilterQuery<BrandDocument>): Promise<Brand[]> {
        return this.brandModel.find(brandFilterQuery);
    }

    async create(brand: Brand): Promise<Brand> {
        console.log(brand);

        const newBrand = this.brandModel.create(brand);
        return newBrand;
    }

    async findOneAndUpdate(brandId: string, brand: Partial<Brand>): Promise<Brand> {
        return this.brandModel.findOneAndUpdate({ _id: brandId }, brand);
    }

    async removeByBrandId(brandId: string): Promise<Brand> {
        return this.brandModel.remove({ _id: brandId });
    }
}