interface DishesBaseData {
	name: string;
	preparation_time: string;
	type: "pizza" | "soup" | "sandwich";	
}

interface PizzaDishesData extends DishesBaseData {
	no_of_slices: number;
	diameter: number;
}

interface SoupDishesData extends DishesBaseData {
	spiciness_scale: number;
}

interface SandwichDishesData extends DishesBaseData {
	slices_of_bread: number;
}

export type DishesData = PizzaDishesData | SoupDishesData | SandwichDishesData;

export interface DishesFormProps {
  type: 'pizza' | 'soup' | 'sandwich';
}