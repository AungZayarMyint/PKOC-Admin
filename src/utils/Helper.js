import { Slide, toast } from "react-toastify";
import CryptoJS from "crypto-js";
import SweetAlert from "sweetalert2";
import moment from "moment";
import noti_song from "../assets/songs/noti_song.mp3";

export const errorToaster = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: "colored",
  });
};

export const successToaster = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: "colored",
  });
};

export const playNotiEffect = () => {
  const audio = new Audio();
  audio.src = noti_song;
  audio.play();
};

export const encodeData = (data) => {
  const deText = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SECRET_KEY
  ).toString();
  return deText;
};

export const decodeData = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    localStorage.removeItem("r_c_a");
  }
};

export const logoutHandler = () => {
  const token = localStorage.getItem("r_c_a");
  if (token) {
    localStorage.removeItem("r_c_a");
    window.location.reload();
  }
};

export const numericeValueFilter = (input) => {
  const numericValue = input.replace(/\D/g, "");
  return numericValue;
};

export const copyToClipboard = async (title, text) => {
  await navigator.clipboard.writeText(text);
  SweetAlert.fire({
    icon: "success",
    width: 300,
    title: "Copied",
    text: `${title} - ${text}`,
  });
};

export const calculateTotal = (data, name = "amount") => {
  if (data.length > 0) {
    return data
      .reduce((total, item) => total + item[name], 0)
      .toLocaleString("en-us");
  } else {
    return 0;
  }
};

export const calculateProfit = (data, first = "amount", second = "amount") => {
  if (data?.length > 0) {
    return data
      .reduce((total, item) => total + (item[first] - item[second]), 0)
      .toLocaleString("en-us");
  } else {
    return 0;
  }
};

export const formatDate = (date) => {
  return moment(date).utc().format("DD-MM-YYYY, hh:mm:ss A");
};
