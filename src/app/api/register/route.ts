import bcrypt from "bcrypt";
import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return new NextResponse("Missing name, email, or password", { status: 400 })
    }

    const isExist = await prisma.user.findUnique({
        where: {
            email: email,
        }
    })

    if (isExist) {
        return new NextResponse("User is already exits.", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            role: UserRole.USER,
        }
    })

    return NextResponse.json(user);
}