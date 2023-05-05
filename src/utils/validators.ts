const validators = {
	required: (value: any) => value || typeof value === 'number' ? undefined : 'Required',
	pizzaRequired: (value: any, values: any) => value || values.type !== "pizza" ? undefined : 'Required',
	soupRequired: (value: any, values: any) => value || values.type !== "soup" ? undefined : 'Required',
	sandwichRequired: (value: any, values: any) => value || values.type !== "sandwich" ? undefined : 'Required',
	number: (value: any) => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
}

export default validators;