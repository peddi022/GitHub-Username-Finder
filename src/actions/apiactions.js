import axios from "axios";

export const getusers = (username) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=$94f096b2f2f7d649f65c&clint_secret=4e11cbea722f9ae8478bd09acc7ce62e4d54ea51`);
        console.log(res.data.items[0].followers_url.length)
        dispatch({
            type: "users",
            data: res.data.items
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const getRepos = (username) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=94f096b2f2f7d649f65c&clint_secret=4e11cbea722f9ae8478bd09acc7ce62e4d54ea51`);
    
        dispatch({
            type: "repos",
            data: res.data
        })
    } catch (error) {
        console.error(error.message);
    }
}