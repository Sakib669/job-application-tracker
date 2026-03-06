import KanbanBoard from "@/components/KanbanBoard";
import connectDB from "@/lib/db";
import Board from "@/lib/models/board";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {}

const getBoard = async (userId: string) => {
  "use cache";
  await connectDB();

  const boardDoc = await Board.findOne({
    userId: userId,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
    },
  });

  if (!boardDoc) {
    return null;
  }

  const board = JSON.parse(JSON.stringify(boardDoc));

  return board;
};

const DashboardPageWrapper = async () => {
  const session = await getSession();
  const board = await getBoard(session?.user.id ?? "");

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Job Hunt</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        <KanbanBoard board={board} userId={session.user.id} />
      </div>
    </div>
  );
};

const Dasboard = async ({}: Props) => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <DashboardPageWrapper />
    </Suspense>
  );
};

export default Dasboard;
