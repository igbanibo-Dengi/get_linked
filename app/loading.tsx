export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="m-auto flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-row space-x-16">
          <div className="flex">
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full absolute border-2 border-solid border-gray-200"
              ></div>

              <div
                className="w-12 h-12 rounded-full animate-spin absolute border-2 border-solid border-blue-500 border-t-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
