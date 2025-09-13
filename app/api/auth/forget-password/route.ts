import { db } from "@/lib/db";
import { randomBytes } from "crypto";
import { addMinutes } from "date-fns";
import { NextResponse } from "next/server";
// import { sendEmail } from "@/lib/mail"  // we'll define mailer later

export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "If user exists, reset email sent" }); // no info leak
  }

  // generate token
  const token = randomBytes(32).toString("hex");
  const expires = addMinutes(new Date(), 30); // valid 30 mins

  await db.passwordResetToken.create({
    data: { email, token, expires },
  });

  const resetLink = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

  // send email
  // await sendEmail(email, "Password Reset", `Click here to reset: ${resetLink}`)

  return NextResponse.json({ message: "Password reset email sent" });
}
