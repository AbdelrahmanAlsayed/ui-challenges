import { useMemo, useState } from "react";
import toaster from "../toaster";

interface Icon {
  icon: JSX.Element;
  value: number;
}

const createIcon = (value: number, ratingHover: number) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-current text-yellow-500 hover:scale-125 hover:text-yellow-600 transition-colors duration-300"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill={`${ratingHover >= value ? "currentColor" : ""}`}
    />
  </svg>
);

function Rating() {
  const [rating, setRating] = useState<number>(1);
  const [ratingHover, setRatingHover] = useState<number>(rating);

  const icons = useMemo<Icon[]>(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        return { value, icon: createIcon(value, ratingHover) };
      }),
    [ratingHover]
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message") as string;

    if (message.trim() === "") {
      toaster.error("Please enter the message first!");
      return;
    } else {
      toaster.success(`Your rate is ${rating} and your message is ${message}`);
    }
    (e.target as HTMLFormElement).reset();
    setRating(1);
    setRatingHover(1);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col justify-center items-center min-screen-height gap-5"
    >
      <h1 className="text-lg font-semibold">Rate us ..</h1>
      <div className="flex gap-3">
        {icons.map((icon) => (
          <button
            type="button"
            role="button"
            title={`The rating now is ${icon.value} out of 5`}
            aria-label={`Rate ${icon.value} out of 5`}
            className="cursor-pointer"
            key={icon.value}
            onClick={() => setRating(icon.value)}
            onMouseOver={() => setRatingHover(icon.value)}
            onMouseLeave={() => setRatingHover(rating)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setRating(icon.value);
                setRatingHover(icon.value);
              }
            }}
          >
            {icon.icon}
          </button>
        ))}
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Write your message"
        className="border rounded-lg focus:outline-none focus:border-gray-400 w-1/2 md:w-1/3 p-2 resize-none"
      ></textarea>
      <button
        type="submit"
        className="border px-4 py-1 w-1/2 md:w-1/3 rounded-lg bg-slate-50 duration-200 transition-all hover:bg-slate-200"
      >
        Send
      </button>
    </form>
  );
}

export default Rating;
