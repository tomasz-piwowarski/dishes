const validators = {
	required: (value: any) => value || typeof value === 'number' ? undefined : 'Required',
	pizzaRequired: (value: any, values: any) => value || values.type !== "pizza" ? undefined : 'Required',
	soupRequired: (value: any, values: any) => value || values.type !== "soup" ? undefined : 'Required',
	sandwichRequired: (value: any, values: any) => value || values.type !== "sandwich" ? undefined : 'Required',
	number: (value: any) => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
	int: (value: any) => value && !Number.isInteger(Number(value)) ? 'Must be an integer' : undefined,
	minValue1: (value: number) =>value && value < 1 ? `Must be at least ${1}` : undefined,
	maxValue10: (value: number) =>value && value > 10 ? `Must be max ${1}` : undefined
}

export default validators;