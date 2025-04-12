import Image from "next/image";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <p className="text-xs text-gray-500 mb-1">Accessories</p>
      <h2 className="font-semibold text-base leading-tight text-green-500">
        {item.name}
      </h2>
      <div className="flex text-yellow-500">
        {Array.from({ length: 5 }, (_, i) =>
          i < item.stars ? (
            <StarFilled key={i} className="w-5 h-5" />
          ) : (
            <StarOutline key={i} className="w-5 h-5" />
          )
        )}
      </div>
    </div>
  );
}
