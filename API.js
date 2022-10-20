import axios from "axios";

const createExercise = async (userID, exerciseID, date) => {
    try {
        console.log('createExercise');
        return await axios.post(`https://wqxovg4yuj.execute-api.us-east-1.amazonaws.com/test/user/${userID}/workout/exercise/${exerciseID}?date=${date}`)
    } catch (err) {
        return err
    }

}

const modifyExercise = async (userID, exerciseID, date, exerciseData) => {
    try {
        console.log('modifyExercise');
        return await axios.put(`https://wqxovg4yuj.execute-api.us-east-1.amazonaws.com/test/user/${userID}/workout/exercise/${exerciseID}?date=${date}`, {
            exerciseData
        })
    } catch (err) {
        console.log(err);
        return err
    }
}

const removeExercise = async (userID, exerciseID, date) => {
    try {
        console.log('removeExercise');
        return await axios.delete(`https://wqxovg4yuj.execute-api.us-east-1.amazonaws.com/test/user/${userID}/workout/exercise/${exerciseID}?date=${date}`)
    } catch (err) {
        return err
    }
}

const getWorkout = async (userID, date) => {

    try {
        return await axios.get(`https://wqxovg4yuj.execute-api.us-east-1.amazonaws.com/test/user/${userID}/workout?date=${date}`)
    } catch (err) {
        return err
    }
}



const search = async (searchValue) => {

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/name/${searchValue}`,
        headers: {
            'X-RapidAPI-Key': '3463652f28msh82d966b318cbdd5p1209bajsn6c41311a9c7a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const results = await axios.request(options).then((response) => {
        // console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
    return results

}



const API = {
    createExercise,
    modifyExercise,
    removeExercise,
    getWorkout,
    search
}
export default API