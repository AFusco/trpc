import Link from 'next/link';
import { getServerSession } from '~/server/auth';

export const runtime = 'edge';

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex flex-col gap-4 text-gray-200">
      <h1 className="text-center text-2xl font-bold">tRPC App Playground</h1>

      <Link href="/product/1" className="rounded bg-gray-800 px-5 py-3">
        Go to product page
      </Link>
      {session && <span>Hello {session.user?.name}!</span>}
      <Link
        href={session ? '/api/auth/signout' : '/api/auth/signin'}
        className="rounded bg-gray-800 px-5 py-3"
      >
        {session ? 'Sign Out' : 'Sign In'}
      </Link>
    </div>
  );
}
