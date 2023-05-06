const validators = {
	required: (value: unknown) => value ? undefined : 'Required',
	pizzaRequired: (value: unknown, values: {type: string}) => value || values.type !== "pizza" ? undefined : 'Required',
	soupRequired: (value: unknown, values: {type: string}) => value || values.type !== "soup" ? undefined : 'Required',
	sandwichRequired: (value: unknown, values: {type: string}) => value || values.type !== "sandwich" ? undefined : 'Required',
	number: (value: unknown) => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
	int: (value: unknown) => value && !Number.isInteger(Number(value)) ? 'Must be an integer' : undefined,
	minValue: (value: number, min: number) => value && value < min ? `Must be at least ${min}` : undefined,
	maxValue: (value: number, max: number) => value && value > max ? `Must be max ${max}` : undefined
}

export default validators;