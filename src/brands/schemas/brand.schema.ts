import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BrandDocument = Brand & Document;

@Schema({ collection: 'brands' })
export class Brand {
    @Prop()
    brand_name: string;
    @Prop()
    transaction_type: string;
    @Prop()
    total_orders: number;
    @Prop()
    total_order_value: number;
    @Prop()
    gross_margin_percentage: number;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);