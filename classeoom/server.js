const express = require("express");
const app = express();
const users = require("./routes/user");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const sessionOptions = session({
  secret: "success",
  resave: false,
  saveUninitialized: true,
});
app.use(sessionOptions);

app.use(flash());
app.get("/greet", (req, res) => {
  let { name = "ananya pandey" } = req.cookies;
  res.send(`hii!!! ${name}`);
});
app.get("/register", (req, res) => {
  let { name = "annaya" } = req.query;
  req.session.name = name;
  req.flash("success", "user succesfully registered");
  res.redirect("./hello");
});
app.get("/hello", (req, res) => {
  res.locals.msg = req.flash("success");
  res.render("page.ejs", { name: req.session.name });
});

app.listen(3000, () => {
  console.log(" server running at 3000 ");
});

// const cookieParser = require("cookie-parser");
// // app.use(cookieParser());

// app.use(cookieParser("secretcode"));
// app.get("/getSigned", (req, res) => {
//   res.cookie("made-in", "china", { signed: true });
//   res.send("cookie send ");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verified");
// });
// // route created
// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("hiii !! I am room");
// });

// app.get("/getCookie", (req, res) => {
//   res.cookie("greet", "hello");
//   res.send("Some cookie for you sir");
// });

// app.use("/users", users);
// app.use("/posts", posts);

// app.get("/test", (req, res) => {
//   res.send("mission succesful");
// });
// app.get("/reaccount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   //   req.session.count = 1;
//   res.send(`you send it ^ x time ${req.session.count}`);
// });
