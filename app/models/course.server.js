export async function getCourse(){
    const data = await fetch(`${process.env.API_URL}/course?populate=image`);
    return await data.json();
}