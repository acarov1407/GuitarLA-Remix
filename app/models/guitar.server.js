export async function getGuitars(){
    const result = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    const data = await result.json();
    return data;
}

export async function getGuitar(url){
    const result = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
    const data = await result.json();
    return data;
}