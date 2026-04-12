import expresss from "express";

const app = expresss();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
     message: "Hello from container!" ,
     service: "Hello-node",
     pod: process.env.POD_NAME || "unknown",
     time: new Date().toISOString(),
    });
});

app.get("/healthz", (req, res) => {
  res.status(200).send( "ok");
});

app.get("/readyz", (req, res) => {
  res.status(200).send("ready");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});