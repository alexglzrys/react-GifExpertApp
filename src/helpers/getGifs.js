export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=qEwcf9g4v22MQ9MHFgaB2bOviHGCTR9o&q=${category}&limit=5`;

  const response = await fetch(URL);
  const {data} = await response.json();

  // Preparar el objeto para cada gif localizado
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  console.log(gifs);
  return gifs;
};
