import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  const reset = await db.passwordResetToken.findUnique({ where: { token } });
  if (!reset || reset.expires < new Date()) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const hashedPassword = await hash(password, 10);

  await db.user.update({
    where: { email: reset.email },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({ where: { token } });

  return NextResponse.json({ message: "Password reset successful" });
}
