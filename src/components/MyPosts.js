import React from 'react';
import PostItem from "./PostItem";

const MyPosts = ({posts, setPosts}) => {
    return (
        <div>
            {posts.map((post) => {
                    return (
                        <PostItem key={post.id} posts={posts} setPosts={setPosts} post={post}/>
                    )
                }
            )}
        </div>
    );
};

export default MyPosts;