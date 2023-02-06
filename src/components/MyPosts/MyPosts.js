import React, {Fragment} from 'react';
import PostItem from "../PostItem/PostItem";
import { ReactSortable } from "react-sortablejs";

const MyPosts = ({posts, setPosts, s}) => {
    const Comp = !s ? ReactSortable : Fragment // Не используется перемещение при поиске
    return (
        <Comp list={posts} setList={setPosts}>
            {posts.map((post) => {
                    return (
                        <PostItem key={post.id} posts={posts} setPosts={setPosts} post={post}/>
                    )
                }
            )}
        </Comp>
    );
};

export default MyPosts;
