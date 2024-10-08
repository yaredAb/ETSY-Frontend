import React from 'react'

const Filter = () => {
  return (
    <div className="flex justify-between mt-5">
      <button className="outlined-btn flex px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        All Filters
      </button>
      <div className="flex items-center gap-1">
        <p>255 results</p>
        <select className="outlined-btn px-2">
          Sorted By:
          <option value="bought">Most Sold</option>
          <option value="bought">Recent</option>
        </select>
      </div>
    </div>
  );
}

export default Filter
