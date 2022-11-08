export function updateFamily(family) {
    console.log(family)
    return {
        type: 'UPDATE_FAMILY',
        payload: family
    };
}