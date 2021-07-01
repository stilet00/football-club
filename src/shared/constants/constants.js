import moment from "moment";
export const DEFAULT_THUMBNAIL = {
  preview:
    "https://png.pngtree.com/element_origin_min_pic/17/03/14/0e25b73fd145aeda0903e471a9d8d7e4.jpg",
};
export const DEFAULT_PLAYER = {
  name: "",
  surname: "",
  photo: DEFAULT_THUMBNAIL,
  birthDate: moment(),
  gamesPlayed: "",
  price: "",
  timeOnField: "",
  goals: "",
};
export const PAGINATION_STEP = 4;
