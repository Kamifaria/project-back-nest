export class EuProductDto {
    id: string;
    name: string;
    gallery: string[];
    description: string;
    price: number;
    discountValue: number;
    details: {
        adjective: string;
        material: string;
    };
    hasDiscount: boolean;
}