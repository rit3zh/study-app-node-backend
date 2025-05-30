import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        firebaseUid: string;
      };
    }
  }
}
