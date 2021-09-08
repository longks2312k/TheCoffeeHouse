// https://forever21.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
// "uploads/2021-01-23T16:10:10.184Z00419031-01.jpg"

// split
export const getImage = (path) => { // path: "uploads/2021-01-23T16:10:10.184Z00419031-01.jpg"
  const imgName = path.replace('https:\/\/minio.thecoffeehouse.com\/image\/admin\/store\/', '') // output: 2021-01-23T16:10:10.184Z00419031-01.jpg
  return `https://minio.thecoffeehouse.com//image//admin//store//${imgName}` // output: https://forever21.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
}