import connectDB from "./db";
import Board from "./models/board";

const DEFAULT_COLUMNS = [
  {
    name: "Wish List",
    order: 0,
  },
  { name: "Applied", order: 1 },
  { name: "Interview", order: 2 },
  { name: "Offer", order: 3 },
  { name: "Rejected", order: 4 },
];

export const initializeUserBaord = async (userId: string) => {
  try {
    await connectDB();

    // check if the board already exists
    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

    if (existingBoard) {
      return existingBoard;
    }

    // create the board
    const board = await Board.create({
      name: "Job Hunt",
      userId,
      column: [],
    });
  } catch (error) {
    throw error;
  }
};
