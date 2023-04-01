const express = require("express");

const { photos: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
// console.log("ctrl", ctrl);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getDataForFirstRender));

module.exports = router;

// const fotos = [
//   { _id: "12345", foto: "bla=bla" },
//   { _id: "54321", waiding: "oba-na" },
// ];

// router.post("/", (req, res) => {
//   //   console.log(req.body);
//   const newFoto = { ...req.body, _id: "6666" };
//   fotos.push(newFoto);

//   //   console.log("fotos", fotos);

//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result: newFoto,
//     },
//   });
// });
