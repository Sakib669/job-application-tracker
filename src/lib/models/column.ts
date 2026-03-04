import mongoose, { Schema } from "mongoose";

export interface IColumn extends Document {
  name: string;
  boardId: string;
  order: number;
  jobApplications: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ColumnSchema = new Schema<IColumn>(
  {
    name: { type: String, required: true },
    boardId: { type: String, required: true, index: true, ref: "Board" },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
    jobApplications: [
      {
        type: Schema.Types.ObjectId,
        ref: "JobApplication",
      },
    ],
  },
  { timestamps: true },
);

const Column =
  mongoose.models.Column || mongoose.model<IColumn>("Column", ColumnSchema);

export default Column;
