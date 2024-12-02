import { imageModel } from "../../../DB/models/image.mode.js";
import { postModel } from "../../../DB/models/post.model.js";
import { compare_faces } from "../../utils/cosine_similarity.js";
import { asyncHandler } from "../../utils/errorHandling.js";

export const matchImage = asyncHandler(async (req, res, next) => {
    // Fetch the latest post created by the user
    const userPosts = await postModel.find({ createdBy: req.user._id });
    if (userPosts.length === 0) {
        return res.status(404).json({ message: "No posts found for the user" });
    }

    const latestPostDoc = userPosts[userPosts.length - 1];
    const typePost = latestPostDoc.type === "Lost" ? "Found" : "Lost";
    const firstName = latestPostDoc.firstName;

    // Fetch all images related to the user's latest post
    const latestImagesDoc = await imageModel.findOne({ postId: latestPostDoc._id });
    if (!latestImagesDoc || !latestImagesDoc.images || latestImagesDoc.images.length === 0) {
        return res.status(404).json({ message: "No images found for the user's latest post" });
    }

    const latestImages = latestImagesDoc.images.map(img => img.url);

    // Fetch all posts of the opposite type with the same first name
    const oppositePosts = await postModel.find({ type: typePost, firstName: firstName });
    if (oppositePosts.length === 0) {
        return res.status(404).json({ message: `No ${typePost.toLowerCase()} posts found` });
    }

    // Extract IDs of opposite type posts
    const oppositePostIds = oppositePosts.map(post => post._id);

    // Fetch all images related to the opposite type posts
    const allOppositeImages = await imageModel.find({ postId: { $in: oppositePostIds } });

    for (let i = 0; i < allOppositeImages.length; i++) {
        if (!allOppositeImages[i].images || allOppositeImages[i].images.length === 0) continue;

        for (let img of allOppositeImages[i].images) {
            for (let latestImg of latestImages) {
                const resultMatch = await compare_faces(latestImg, img.url);

                // Log the result to understand its format
                console.log("Result Match:", resultMatch);

                // Check if resultMatch is an object and extract the message if necessary
                const matchMessage = typeof resultMatch === "object" ? resultMatch.result : resultMatch;

                if (typeof matchMessage === "string" && matchMessage.includes("Same person")) {
                    // Fetch the posts related to the matching images and populate images
                    const post1 = await postModel.findOne({ _id: latestImagesDoc.postId }).populate('imageId createdBy');
                    const post2 = await postModel.findOne({ _id: allOppositeImages[i].postId }).populate('imageId createdBy');

                    return res.json({
                        message: "match",
                        posts: [post1, post2]
                    });
                }
            }
        }
    }

    return res.json({ message: "Not-Match" });
});


export const matchPost = asyncHandler(async (req, res, next) => {
    const { postId } = req.params;

    // Fetch the specific post by postId
    const specificPost = await postModel.findById(postId);
    if (!specificPost) {
        return res.status(404).json({ message: "Post not found" });
    }

    const typePost = specificPost.type === "Lost" ? "Found" : "Lost";
    const firstName = specificPost.firstName;

    // Fetch all images related to the specific post
    const specificImagesDoc = await imageModel.findOne({ postId: specificPost._id });
    if (!specificImagesDoc || !specificImagesDoc.images || specificImagesDoc.images.length === 0) {
        return res.status(404).json({ message: "No images found for the specified post" });
    }

    const specificImages = specificImagesDoc.images.map(img => img.url);

    // Fetch all posts of the opposite type with the same first name
    const oppositePosts = await postModel.find({ type: typePost, firstName: firstName });
    if (oppositePosts.length === 0) {
        return res.status(404).json({ message: `No ${typePost.toLowerCase()} posts found` });
    }

    // Extract IDs of opposite type posts
    const oppositePostIds = oppositePosts.map(post => post._id);

    // Fetch all images related to the opposite type posts
    const allOppositeImages = await imageModel.find({ postId: { $in: oppositePostIds } });

    for (let i = 0; i < allOppositeImages.length; i++) {
        if (!allOppositeImages[i].images || allOppositeImages[i].images.length === 0) continue;

        for (let img of allOppositeImages[i].images) {
            for (let specificImg of specificImages) {
                const resultMatch = await compare_faces(specificImg, img.url);

                // Log the result to understand its format
                console.log("Result Match:", resultMatch);

                // Check if resultMatch is an object and extract the message if necessary
                const matchMessage = typeof resultMatch === "object" ? resultMatch.result : resultMatch;

                if (typeof matchMessage === "string" && matchMessage.includes("Same person")) {
                    // Fetch the posts related to the matching images and populate images
                    const post1 = await postModel.findOne({ _id: specificImagesDoc.postId }).populate('imageId createdBy');
                    const post2 = await postModel.findOne({ _id: allOppositeImages[i].postId }).populate('imageId createdBy');

                    return res.json({
                        message: "match",
                        posts: [post1, post2]
                    });
                }
            }
        }
    }

    return res.json({ message: "Not-Match" });
});
