const express = require("express");
const router = express.Router();

const webhook = require("./webhook");
const login = require("./controllers/auth/login");
const register = require("./controllers/auth/register");
const getUser = require("./controllers/user/getUser");
const getUserPosts = require("./controllers/user/getUserPosts");
const editPost = require("./controllers/posts/editPost");
const profile = require("./controllers/user/profile");
const update = require("./controllers/user/update");
const upload = require("./controllers/posts/upload");
const post = require("./controllers/posts/post");
const similar = require("./controllers/posts/similar");
const getId = require("./controllers/user/getId");
const search = require("./controllers/posts/search");
const home = require("./controllers/home");
const deletePost = require("./controllers/posts/deletePost");
const buyVip = require("./controllers/posts/buyVip");
const renew = require("./controllers/posts/renew");
const reset = require("./controllers/auth/reset");
const code = require("./controllers/auth/code");
const confirmEmail = require("./controllers/auth/confirmEmail");
const cities = require("./utils/cities");
const payment = require("./controllers/auth/tbcPayment");
const checkPayment = require("./controllers/auth/checkPayment");
const paymentStatus = require("./controllers/auth/paymentStatus");
const warning = require("./controllers/auth/warning");

const rateLimit = require("express-rate-limit");

function limitRequests(maxValue, minutes, route) {
  return rateLimit({
    windowMs: minutes * 60 * 1000, // 2 minutes
    max: maxValue, // limit each IP to 3 request per windowMs
    message: "Too many requests. try again later.",
    onLimitReached: (req, res) => {
      const clientIP =
        req.headers["x-real-ip"] ||
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress;

      warning(clientIP, minutes, route);
    },
  });
}

router.post("/api/webhook", webhook);

router.post("/api/login", limitRequests(10, 1, "Login"), login);

router.post("/api/register", limitRequests(5, 1, "Register"), register);

router.post("/api/user", getUser);

router.post("/api/userPosts", getUserPosts);

router.post("/api/editPost", editPost);

router.post("/api/profile", profile);

router.post("/api/update", update);

router.post("/api/upload", limitRequests(5, 2, "Upload"), upload);

router.post("/api/post", post);

router.post("/api/similar", similar);

router.post("/api/getId", getId);

router.post("/api/search", search);

router.post("/api/home", home);

router.post("/api/delete", deletePost);

router.post("/api/buyVip", buyVip);

router.post("/api/renew", renew);

router.post("/api/reset", limitRequests(3, 2, "Reset"), reset);

router.post("/api/code", code);

router.post(
  "/api/confirmEmail",
  limitRequests(3, 2, "ConfirmEmail"),
  confirmEmail
);

router.get("/api/cities", cities);

router.post("/api/tbcpayment", payment);

router.post("/api/checkpayment", checkPayment);

router.post("/api/paymentstatus", paymentStatus);

module.exports = router;
