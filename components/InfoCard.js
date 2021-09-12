import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="sm:flex-col md:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <article className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </article>
                <h4 className="text-xl">{title}</h4>
                <div className="w-10 border-b pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div className="">
                        <p className="text-lg font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard;