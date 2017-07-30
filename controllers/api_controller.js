"use strict";
(function() {
  var express = require("express");
  var api = require("../models/api.js");
  var bodyParser = require("body-parser");
  var router = express.Router();

  /////////////////////////////////////////////////////
  router.get("/api/all", function(req, res) {
    api.all(function(data) {
      console.log("data", data);
      res.json(data);
    });
  });

  //==================================================
  router.post("/api/:authtype/setup", function(req, res) {
    var authtype = req.params.authtype;
    var phase = 'setup';
    console.log(`POST /api/${authtype}/${phase}`);
    var rb = req.body;
		console.log("rb", rb);
		
    api.create(
      ["username", "email", "pw", "firstname", "lastname"],
      [rb.username, rb.email, rb.pw, rb.firstname, rb.lastname],
      function() {
        console.log("res", res);
        res.redirect("/login/text");
      }
    );
	});
	
  //==================================================
  router.post("/api/:authtype/login", function(req, res) {
    var authtype = req.params.authtype;
    var phase = 'login';
    console.log(`POST /api/${authtype}/${phase}`);
    var rb = req.body;
		console.log("rb", rb);
		
    api.create(
      ["username", "email", "pw", "firstname", "lastname"],
      [rb.username, rb.email, rb.pw, rb.firstname, rb.lastname],
      function() {
        console.log("res", res);
        res.redirect("/login/text");
      }
    );
  });

  /////////////////////////////////////////////////////
  //  Add New User
  //   router.post("/", function(req, res) {
  //     console.log("req.body", req.body);

  //     api.insert(
  //       ["username", "text_password"],
  //       [req.body.username, text_password],
  //       function() {
  //         res.redirect("/");
  //       }
  // 	);

  //   });

  /////////////////////////////////////////////////////
  //   Update Existing User
  //   router.put("/:id", function(req, res) {
  //     var condition = "id = " + req.params.id;
  //     var devoured = req.body.devoured;
  //     var bool = false;
  //     if (devoured === "on") { bool = true; }

  //     api.update({ devoured: bool }, condition, function() {
  //       res.redirect("/");
  //     });
  //   });

  module.exports = router;
})();

// app.get('/', function(req, res) {
// 	res.render("home", {title: "MyPass"});
// });

// app.get('/boop', function(req, res) {
// 	res.render("home", {title: "boop"});
// });
