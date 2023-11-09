/* importation de l'API CAT https://rapidapi.com/rvaldezit/api/cat14/ */

const get_cat_object = async () => {

    const options = {
        method: 'GET',
        url: 'https://cat14.p.rapidapi.com/v1/images/search',
        headers: {
            'x-api-key': 'live_tkfn5Qu13T9qimIfGmAxBAFooC12t7GvENwLXIoJQRTgUv83zQ8mjz5cSpzahmyK',
            'X-RapidAPI-Key': '7653558c72msh4744c32ce35a248p148572jsn1385e9bed9b2',
            'X-RapidAPI-Host': 'cat14.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.request.response;
    } catch (error) {
        console.error(error);
    }


}

export {

    get_cat_object

}