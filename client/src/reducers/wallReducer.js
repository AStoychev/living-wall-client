export const wallReducer = (state, action) => {
    switch (action.type) {
        case 'WALL_FETCH':
            return {...action.payload}
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            username: action.userName,
                            email: action.userEmail,
                        }
                    }
                ],
            }
        default:
            return state;
    }
};