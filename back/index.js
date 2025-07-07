const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

const PORT = 3001;

dbCon().then((res) => {
  app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
  });
});
