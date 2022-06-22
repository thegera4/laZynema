const API_CONFIG = {
    Url: 'https://api.themoviedb.org/3/',
    ApiKey: 'c6311c3a4ff449bdcfc4ebc0981cbd56',
    ogImg: (Path) => `https://image.tmdb.org/t/p/original/${Path}`,
    W500Img: (Path) => `https://image.tmdb.org/t/p/w500/${Path}`
};

export default API_CONFIG;