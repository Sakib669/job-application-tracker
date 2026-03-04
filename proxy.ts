import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/sign-in", request.url));
};
