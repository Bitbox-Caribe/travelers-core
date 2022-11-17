import moment from "moment";

const { v4: uuidv4 } = require("uuid");

/* eslint-disable */

export const apiUrl = (path) => {
  if (/^\/([^/]|$)/.test(path)) {
    const apiRoute = process.env ? process.env.API : "";
    return `${apiRoute}${path}`;
  }
  return "invalid-path";
};

export const imagesApiUrl = (path) => {
  if (/^\/([^/]|$)/.test(path)) {
    const apiRoute = process.env ? process.env.IMAGES_API : "";
    return `${apiRoute}${path}`;
  }
  return "invalid-path";
};

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toCamel(s) {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}

export function keysToCamel(obj) {
  const newObject = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  keys.forEach((k, i) => {
    const prop = toCamel(k);
    newObject[prop] = values[i];
  });
  return newObject;
}

export const toggleScrolling = () => {
  const bodyNode = document.body;
  const bodyClasses = bodyNode.className;

  if (bodyClasses.includes("scrolling-disabled")) {
    bodyNode.className = "";
    return;
  }
  bodyNode.classList.add("scrolling-disabled");
};

export const toOptionValue = (str) => {
  return str.replace(/\s/g, "-").toLowerCase();
};

export const generateId = () => uuidv4();

export const mapToOptions = (
  arr = [],
  valueProperty = "id",
  labelProperty = "name"
) => {
  return arr.map((item) => ({
    id: generateId(),
    value: toOptionValue(item[valueProperty].toString()),
    label: item[labelProperty],
  }));
};

export const toLowerCase = (str) => String(str).toLocaleLowerCase();

export const formatDate = (str, format = "DD-MM-YYYY") =>
  moment(str).format(format);

export const makeFakeRequest = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
};
