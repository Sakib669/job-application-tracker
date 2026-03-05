import KanbanBoard from "@/components/KanbanBoard";
import connectDB from "@/lib/db";
import Board from "@/lib/models/board";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";

interface Props {}

const Dasboard = async ({}: Props) => {
  const session = await getSession();
  if (!session?.user) {
    redirect("/sign-in");
  }

  await connectDB();

  const board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
    },
  });

  console.log(board);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Job Hunt</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        <KanbanBoard
          board={JSON.parse(JSON.stringify(board))}
          userId={session.user.id}
        />
      </div>
    </div>
  );
};

export default Dasboard;
