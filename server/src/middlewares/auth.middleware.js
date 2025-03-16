export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(201).json({ message: "Unauthorized" });
  }

  next();
};
