import React from "react";

const Test = () => {
  return (
    <>
      {/* <div className="flex font-sans">
        <div class="relative w-48 flex-none">
          <img
            src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
            alt=""
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              Utility Jacket
            </h1>
            <div class="text-lg font-semibold text-slate-500">$110.00</div>
            <div class="mt-2 w-full flex-none text-sm font-medium text-slate-700">
              In stock
            </div>
          </div>
          <div class="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6">
            <div class="flex space-x-2 text-sm">
              <label>
                <input
                  class="peer sr-only"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input
                  class="peer sr-only"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input
                  class="peer sr-only"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input
                  class="peer sr-only"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input
                  class="peer sr-only"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div class="mb-6 flex space-x-4 text-sm font-medium">
            <div class="flex flex-auto space-x-4">
              <button
                class="h-10 rounded-md bg-black px-6 font-semibold text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                class="h-10 rounded-md border border-slate-200 px-6 font-semibold text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              class="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-200 text-slate-300"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div> */}
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Test;
