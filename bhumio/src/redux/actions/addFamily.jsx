export function addFamily(family) {
    console.log(family)
    return {
        type: 'ADD_FAMILY',
        payload: family
    };
}