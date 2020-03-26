let initialState = {};
type IInitialState = typeof initialState;
export const reducer = (state = initialState, action: any): IInitialState => {
    switch (action.type) {
        default: {
            return state
        }
    }
};
