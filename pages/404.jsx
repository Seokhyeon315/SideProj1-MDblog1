import Link from "next/link";


export default function NotFoundPage() {
    return (<div className="mt-20 flex flex-col justify-center items-center h-screen">
        <h1 className=" text-3xl">404 - Page Not Found</h1>
        <p>You have approached a wrong page.</p>

        <Link href="/">
            <button className="bg-red-500 mt-2 p-3 rounded-md">Go back to Home</button>
        </Link>


    </div>);
}