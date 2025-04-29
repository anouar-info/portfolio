import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

interface RevalidateBody {
  token: string;
  path?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { token, path } = (await request.json()) as RevalidateBody;

    if (token !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    if (path) {
      revalidatePath(path);
    } else {
      revalidatePath('/blog');
      revalidatePath('/projects');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { message: 'Error revalidating', error: errorMessage },
      { status: 500 }
    );
  }
}
