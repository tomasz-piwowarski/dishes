import { type WrappedFieldProps, type WrappedFieldMetaProps, type WrappedFieldInputProps } from 'redux-form';

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

export interface FieldMeta {
	touched: boolean;
	invalid: boolean;
	error: string;
}

export interface SelectWrappedFieldProps extends WrappedFieldProps {
	type: string; props: string; key:string;
}

export interface FieldInterface {
  label: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  custom: {
    [x: string]: any;
  };
}

export interface SelectFieldInterface extends FieldInterface {
	children: JSX.Element;
	name: string;
}
