const { Photo } = require("../../models");

const getDataForFirstRender = async (req, res) => {
  // console.log("res",res);
  const photos = await Photo.find({});
  // const fotos = await Foto.findById("qwe X");

  res.json({
    success: true,
    code: 200,
    data: {
      result: photos,
    },
  });
};

module.exports = getDataForFirstRender;
