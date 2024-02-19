import { SHOW_ALL } from "./action-types";
import { FIND_NAME } from "./action-types";
import { FIND_ID } from "./action-types";
import { NO_ID } from "./action-types";
import axios from 'axios';

export const showAll = () => {
    const point = 'http://localhost:3002/pokemons';
    return async (distpach) => {
        try {
            let { data } = await axios.get(point);
            data.key = data.id;
            return distpach({
                type: SHOW_ALL,
                payload: data
            });
        } catch(error){
            // alert(error.message);
            return distpach({
                type:Error,
                payload: error.message
            })
        }
    }
};

export const findName = (pok) => {
    const poin = `http://localhost:3002/pokemons/name?name=${pok}`;
    return async (distpach) => {
        try {
            const { data } = await axios.get(poin);
            return distpach({
                type: FIND_NAME,
                payload: data
            })
        } catch(error){
            // alert(error.message);
            return distpach({
                type: Error,
                payload: error.message
            })
        }
    }
};

export const findId = (id) => {
    const elId = `http://localhost:3002/pokemon/${id}`;
    return async (distpach) => {
        try {
            const { data } = await axios.get(elId);
            data.map((ele)=>{ele.key = ele.id})
            return distpach({
                type: FIND_ID,
                payload: data
            })
        } catch(error){
            //alert(error.message);
            return distpach({
                type: Error,
                payload: error.message
            })
        }
    }
};

export const noId = () => {
    return async (distpach) => {
        try {
            return distpach({
                type: NO_ID,
                payload: []
            })
        } catch(error){
            //alert(error.message);
            return distpach({
                type: Error, 
                payload: error.message
            })
        }
    }
};