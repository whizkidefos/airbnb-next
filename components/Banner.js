import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="/images/banner.jpg" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-md sm:text-2xl font-semibold">Not sure where to go? Perfect.</p>
                <button className="text-white bg-gray-900 px-10 py-4 rounded-full shadow-sm my-3 font-bold hover:shadow-xl transition duration-150 active:scale-90">I'm Flexible</button>
            </div>
        </div>
    )
}

export default Banner
