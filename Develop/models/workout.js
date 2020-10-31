const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: true,
				},
				name: {
					type: String,
					trim: true,
					required: true,
				},
				duration: {
					type: Number,
					required: true,
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);
// Add more Things

// schema name, define virtual .virtual

workoutSchema.virtual('totalDuration').get(function() {  
    return this.exercises[duration] + ' ' + this.exercises[weight];
})




const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
