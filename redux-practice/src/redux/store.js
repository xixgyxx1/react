import { createStroe } from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

export default store;
