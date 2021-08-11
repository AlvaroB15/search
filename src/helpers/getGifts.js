export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=BfnLiVzCOa17QLnjXjgqoav74F6XJAvY&q=${encodeURI(category)}&limit=5`;

    const res = await fetch(url);
    console.log(res);
    const {data} = await res.json();
    console.log(data);

    return data.map(image => {
        return {
            id: image.id,
            title: image.title,
            image: image.images?.downsized_still.url
        }
    });
}