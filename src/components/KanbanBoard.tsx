import { Board, Column } from "@/lib/models/models.types";
import {
  Award,
  Calendar,
  CheckCircle2,
  Mic,
  Mic2,
  XCircle,
} from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface Props {
  userId: string;
  board: Board;
}

interface ColConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColConfig> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-purle-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];

const DroppableColumn = ({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: ColConfig;
  boardId: string;
}) => {
  return (
    <Card>
      <CardHeader className={`${config.color}`}>
        <div>
          <div>
            {config.icon}
            <CardTitle>{column.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const KanbanBoard = ({ board, userId }: Props) => {
  const columns = board?.columns;

  return (
    <>
      <div>
        <div>
          KanbanBaord
          {columns?.map((col, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-gray-500",
              icon: <Calendar className="h-4 w-4" />,
            };
            return (
              <DroppableColumn
                key={key}
                column={col}
                config={config}
                boardId={board._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;
