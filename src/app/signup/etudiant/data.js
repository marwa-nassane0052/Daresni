'use client'
let data = {};

export function Data() {
    return {
        getData: () => data,
        setData: (newData) => {
            data = {...data,...newData};
        },
        removeData: () => {
            data = {};
        },
        removeValue: (key)=> { delete data.key ,console.log("deleted")}
    };
}