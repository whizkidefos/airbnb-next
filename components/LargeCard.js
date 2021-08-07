import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <article className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" className="rounded-xl" objectFit="cover" />
            </div>

            <div className="absolute top-32 left-12 text-white">
                <h3 className="text-4xl mb-3 font-semibold">{title}</h3>
                <p>{description}</p>
                <button className="text-sm bg-gray-900 py-2 px-4 rounded-lg mt-5">{buttonText}</button>
            </div>
        </article>
    )
}

export default LargeCard
