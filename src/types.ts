export type DishType = "pizza" | "soup" | "sandwich"

interface DishesBaseData {
	name: string;
	type: DishType;
	preparation_time: string;
}

export interface PizzaDishesData extends DishesBaseData {
	no_of_slices: number;
	diameter: number;
}

export interface SoupDishesData extends DishesBaseData {
	spiciness_scale: number;
}

export interface SandwichDishesData extends DishesBaseData {
	slices_of_bread: number;
}

export type DishesData = PizzaDishesData | SoupDishesData | SandwichDishesData;