"use client";

import { useEffect, useState } from "react";
import { Board, Column } from "../models/models.types";

export const useBoard = (initialBoard?: Board | null) => {
  const [board, setBoard] = useState<Board | null>(initialBoard || null);
  const [columns, setColumns] = useState<Column[]>(initialBoard?.columns || []);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialBoard) {
      setBoard(initialBoard);
      setColumns(initialBoard.columns || []);
    }
  }, [initialBoard]);

  const moveJob = (
    jobApplicationId: string,
    newColumn: string,
    newOrder: number,
  ) => {
    // console.log(jobApplicationId, newColumn, newOrder);

    setColumns((prev) =>{
      const newColumns = prev.map((col) => ({
        ...col, jobApplications: [...col.jobApplications]
      }))

      // find and remove job from the old column
      
    })
  };

  return { board, columns, error, moveJob };
};
