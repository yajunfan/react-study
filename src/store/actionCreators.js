
/**
 * 定义各个action --- 统一管理
 */
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_PLANLIST} from './actionType'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
});
export const addItemAction=()=>({
    type:ADD_ITEM
});
export const deleteItemAction=(value)=>({
    type:DELETE_ITEM,
    value
});
export const getPlanListAction=(value)=>({
    type:GET_PLANLIST,
    value
});

