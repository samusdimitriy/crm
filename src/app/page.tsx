import Link from 'next/link';
import Button from './components/button';

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-40 my-40 ">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
        Welcome to Our Website
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Explore companies based on categories, sales, representation in
        different countries, and more. Create your own narrative for what makes
        our platform special!
      </p>
      <Link href="/dashboard">
        <Button className="btn btn-primary mt-4">Go To Dashboard</Button>
      </Link>
    </main>
  );
}
