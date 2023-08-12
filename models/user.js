const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const secret = process.env.ACCESS_TOKEN_SECRET;

const SALT_ROUNDS = 6;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 3
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: 5
			// match: /^(?=.*[!@#$%^&*()-])/ //! comment out till i figure out how to show error to user
		}
	},
	{
		timestamps: true,
		// takes off password in the returned json
		toJSON: {
			transform: function (doc, ret) {
				delete ret.password;
				return ret;
			}
		}
	}
);

userSchema.pre('save', async function (next) {
	// this === instance (document)
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(`${this.password}${secret}`, SALT_ROUNDS);
	return next();
});

// Capitalizes the first letter of each word in 'name' field
userSchema.pre('save', async function (next) {
	let names = this.name.toLowerCase().split(' ');
	for (let i = 0; i < names.length; i++) {
		names[i] = names[i][0].toUpperCase() + names[i].slice(1);
	}
	this.name = names.join(' ');
	next();
});

module.exports = model('User', userSchema);
