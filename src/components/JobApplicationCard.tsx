"use client"
import { Column, JobApplication } from "@/lib/models/models.types";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Props {
  job: JobApplication;
  columns: Column[];
}

const JobApplicationCard = ({ job, columns }: Props) => {
  return (
    <>
      <Card>
        <CardContent>
          <div>
            <div>
              <h3>{job.position}</h3>
              <p>{job.company}</p>
              {job.description && <p>{job.description}</p>}
              {job.tags && job.tags.length > 0 && (
                <div>
                  {job.tags.map((tag, key) => (
                    <span key={key}>{tag}</span>
                  ))}
                </div>
              )}

              {job.jobUrl && (
                <Link
                  href={job.jobUrl}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default JobApplicationCard;
