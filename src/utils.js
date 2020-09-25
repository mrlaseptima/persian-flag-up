export const pushError = msg => {
    throw new Error(msg);
};

export const isString = string => (typeof string === "string" || string instanceof String)


export const detectErrorMessage = (arg, ...types) => {
    if (typeof arg === "undefined")
        pushError(
            `This method must have at least one input instead of ${typeof arg}`
        );

    if (!types.includes(typeof arg)) {
        pushError(
            `Invalid input type , you cant assign  '${typeof arg}'  to this method`
        );
    }
};
