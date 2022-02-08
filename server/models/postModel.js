import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectID,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const postSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectID,
			required: true,
			ref: "User",
		},
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		upVote: {
			type: Number,
			required: true,
			default: 0,
		},
		downVote: {
			type: Number,
			required: true,
			default: 0,
		},
		comments: [commentSchema],
		numComments: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model("Post", postSchema);

export default Post;