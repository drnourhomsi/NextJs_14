import { getSlug } from "./slugify";

export async function getPosts(){
    const postsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await postsFetch.json();
    return posts;
}

export async function getPost(name) {
    const posts = await getPosts()
    const post = posts.filter((item) => getSlug(name) === getSlug(item.name))[0];
    return post;
}