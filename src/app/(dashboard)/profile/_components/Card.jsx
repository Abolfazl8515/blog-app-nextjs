import { toPersianDigits } from "@/utils/numberFormatter";

function Card({ item }) {
  return (
    <div className="w-1/3 h-28 flex flex-col gap-y-2 p-2 bg-secondary-200 rounded-md">
      <h5 className="w-full font-bold text-secondary-700 text-base flex items-center gap-x-2">
        {item.icon}
        <span>{item.title}</span>
      </h5>
      <div className="w-full h-4/5 bg-secondary-300 rounded-lg">
        <p className="w-full h-full flex justify-center items-center text-secondary-700 text-2xl">
          {toPersianDigits(item.num)}
        </p>
      </div>
    </div>
  );
}

export default Card;
