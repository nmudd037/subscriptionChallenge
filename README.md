# Subscription Card Challenge

<h2 align="center">
  <img src="https://github.com/nmudd037/subscriptionChallenge/blob/master/examples/user-preferences.png" alt="User Preferences" width="100%">
</h2>

## Reguirements:

Based on the above picture as reference,

- In this implementation, a feature's sub-features only expand when selected on and only the leaves contribute to the overall cost.
- Create the supporting client-side view using React and TypeScript
- A feature may have N sub-features. In other words, features and their sub-features are
  arbitrarily nested.

## Working Interface

The working demo of the Challenge [Subscription Card](https://subscription-ts-chalenge.vercel.app/).

<h2 align="center">
  <img src="https://github.com/nmudd037/subscriptionChallenge/blob/master/examples/working-interface-gif.gif" alt="Working Interface GIF" width="660px" />
  <br>
</h2>

## Approach, Assumptions and Decision Making Process

- After going through the requirements, the first point I tried to solve was to arrange the code structure based on similar files (separating components) then created two components **Card and CardItem**. The Card component deals with the overall implementation of the Subscription Card and the CardItem deals with the implementation of the subscription features within the card.

- The next step was to make an assumption about the sample data and how to arrange it, so I came up with a identically nested tree data structure. The sample data is an array of subscription feature objects that has an **id, name, value(if no sub features), items(array of subscription feature objects, if only sub features exist)**. The id of each subscription feature is assumed to be of type that it helps us to easily identify the top-level features and the nested features.

```javascript
export const data = [
  {
    id: 1,
    name: 'Feature 1',
    items: [
      {
        id: 11,
        name: 'Sub-Feature 1_1',
        value: 15,
      },
      {
        id: 12,
        name: 'Sub-Feature 1_2',
        value: 35,
      },
    ],
  },
  {
    id: 2,
    name: 'Feature 2',
    items: [
      {
        id: 21,
        name: 'Sub-Feature 2_1',
        value: 47,
      },
      {
        id: 22,
        name: 'Sub-Feature 2_2',
        value: 55,
      },
    ],
  },
];
```

- The main challenge was to render a component that receives an arbitrarily nested data. The component treescan't be rendered in an iterative fashion, instead I relied on using recursion to display the data.

- One of the cool things about React is that React components are essentially functions which return JSX. Therefore, just like with any other functions, React components can be recursive.

- In the Card component apart from implementing the base features like the heading and footer of the card, we render the Card Item component inside a unordered list for each top-level feature (object) in the array of subscription feature sample data by passing it as a prop to it.

- We keep a state for managing the Accumulated sub total Price of nested Card Items and pass it's setState function as a prop to the Card Item component. Also, we calculate the total price of the selected features at any instance by

- In the Card Item component, We used a default prop **level** to let the component know how deep the instance of Card Item component is at any given time.

- We return for each feature a list item with a input type of checkbox that store the price of each feature on value attribute of its corresponding input checkbox and use this value to display the price on the card.

- Here, the recursive call is when the Card Item component renders itself, passing in a modified version of the props it received. We use base case that is a conditional check to determine whether it should render itself again or stop which fulfills our requirement for expanding sub-features only when the parent feature is selected. Each instance has its own state.

- We use two states, one to manage the Accumulated Sub Total Price of nested Card Items and one to manage the display of nested Card Items only when Parent Card Item is Checked.

- We use two functions one to calculate the Sub Total Price of nested Card Items for a feature at an instance. one to clear the nested Card Items when a Card Item is unchecked.

- We use the useEffect hook to do update price state by using its setState that is passed as prop for each instance of nested Card Item on each render. (The Sub Total Price is lifted to the Parent Card Item on each render that in turn return the total price if the card at that instance.)

- On the input type of checkbox for each feature, we attach a Change Event Handler. The onChange event handler does two things, one to toggle the display of nested Card Items and one to manage the subTotal state, when the Card Item is checked the price is stored in the state otherwise the price is cleared from the state.

- Considerations: If the data is too large, we could flatten the data received and follow a different approach to solve the problem.
