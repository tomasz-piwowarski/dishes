export const FORM_NAME = "DishesForm"

export const FIELDS = {
	name: {
		name: "name",
		label: "Name",
	},
	preparation_time: {
		name: "preparation_time",
		label: "Preparation time",
		type: "time",
	},
	type: {
		name: "type",
		label: "Type",
		options: [
			{ label: "Pizza", value: "pizza" }, 
			{ label: "Sandwich", value: "sandwich" }, 
			{ label: "Soup", value: "soup" }
		]
	},
	no_of_slices: {
		name: "no_of_slices",
		label: "Number of slices",
	},
	diameter: {
		name: "diameter",
		label: "Diameter"
	},
	spiciness_scale: {
		name: "spiciness_scale",
		label: "Spiciness scale"
	},
	slices_of_bread: {
		name: "slices_of_bread",
		label: "Slices of bread"
	}
}

export const CONDITIONAL_FIELDS = [
	"no_of_slices",
	"slices_of_bread",
	"spiciness_scale",
	"diameter"
]