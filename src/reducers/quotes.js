export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_QUOTE':
    index = state.findIndex(quote => quote.id === action.quoteId)
    quote = state[index]
    if (quote.votes === 0) return state;
    return [
      ...state.slice(0, index),
      Object.assign({}, quote, {votes: quote.votes -= 1}),
      ...state.slice(index + 1)
    ];

    default:
      return state;
  }
}



// export default function manageRestaurants(state = {
//   restaurants: []
// }, action) {
//   switch (action.type) {
//
//     case 'ADD_RESTAURANT':
//       return Object.assign({}, state, {
//         restaurants: state.restaurants.concat(action.restaurant)
//       });
//
//     default:
//       return state;
//
//   }
// };
