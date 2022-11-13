export async function getBlogs(){
    const result = await fetch(`${process.env.API_URL}/posts?populate=image`);
    const data = await result.json();
    return data;
}

export async function getBlog(url){
    const result = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`);
    return await result.json();
}