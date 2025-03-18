const allowedOrigins = ["http://localhost:3000/", "http://localhost:5173/"];

export const corsOptions = (req, callback) => {
  const origin = req.header("Origin");

  if (allowedOrigins.includes(origin)) {
    callback(null, { origin: true, credentials: true });
  } else {
    callback(null, { origin: false });
  }
};
