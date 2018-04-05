export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DETAIL_DATA_AVAILABLE = 'DETAIL_DATA_AVAILABLE';
//Import the sample data
import Data from '../instructions.json';
 
export function getData(){
    return (dispatch) => {
 
        //Make API Call
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch({type: DATA_AVAILABLE, data:responseJson});
        })
        .catch((error) => {
        console.error(error);
        });
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        // setTimeout(() => {
        //     const data  = Data.instructions;
            
        // }, 2000);
 
    };
}

export function getDataById(id){
    return (dispatch) => {
 
        //Make API Call
        fetch('https://jsonplaceholder.typicode.com/photos/'+id)
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch({type: DETAIL_DATA_AVAILABLE, data:responseJson});
        })
        .catch((error) => {
        console.error(error);
        });
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        // setTimeout(() => {
        //     const data  = Data.instructions;
            
        // }, 2000);
 
    };
}