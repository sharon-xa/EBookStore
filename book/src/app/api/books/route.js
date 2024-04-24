import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query") || undefined;

  try {
    const books = await prisma.books.findMany({
      where: {
        title: {
            contains: query,
          },
      },
    });
    return NextResponse.json({
      success: true,
      books: books,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req, res) => {
  const body = await req.json();
  
  try {
    const book = await prisma.books.create({
      data: body
    });
    return NextResponse.json({
      success: true,
      book: book,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
