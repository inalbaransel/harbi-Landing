import { NextResponse } from "next/server";
import { runSiteAudit } from "../../../../backend/services/audit/auditService";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "A valid URL is required" },
        { status: 400 }
      );
    }

    // Call isolated backend service
    const result = await runSiteAudit(url);

    return NextResponse.json(result);

  } catch (error: any) {
    console.error("Backend Audit Error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred while analyzing the site." },
      { status: 500 }
    );
  }
}
