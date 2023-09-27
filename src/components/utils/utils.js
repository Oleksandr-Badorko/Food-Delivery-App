import axios from "axios";

// API KEY
export const apiKey = "YOUR_API_KEY";

// GET OR POST DATA WITH AXIOS
export class Request {
  static get(url) {
    return axios(url).then((res) => res.data);
  }

  static post(url, body) {
    return axios({
      method: "post",
      url,
      body,
    }).then((res) => res.data);
  }
}

// GET DATA AND TURN IT INTO JSON()
export const getData = (apiUrl) => fetch(apiUrl).then((res) => res.json());

// CREATE, CLASSIFY AND TEXT
export function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// STYLY THE ELEMENT LIKE IN CSS
export function applyStylesToElement(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}

// TOGGLE ELEMENT
export function toggleClass(element, className) {
  element.classList.toggle(className);
}

// ADD EVENT LISTENER TO MULTIPLE ELEMENTS
export function addEventListenerToMultipleElements(
  elements,
  eventType,
  listener
) {
  elements.forEach((element) => {
    element.addEventListener(eventType, listener);
  });
}

// FORMATS A DATE OBJECT AS A STRING.
export function formatDate(date, format) {
  return new Intl.DateTimeFormat("en-US", format).format(date);
}
/* Usage example:
const currentDate = new Date();
const formattedDate = formatDate(currentDate, { year: "numeric", month: "long", day: "numeric" });
console.log(formattedDate); // e.g., August 25, 2023 */

// LOCALSTORAGE WRAPPER:
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

/* Usage example:
const data = { name: "John", age: 30 };
setLocalStorage("user", data);
const storedData = getLocalStorage("user");

if (storedData) {
  console.log(storedData.name); // Output: John
  console.log(storedData.age); // Output: 30
} else {
  console.log("No user data found.");
} */

// GENERATE RANDOM NUMBER:
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
