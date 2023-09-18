export default function loading() {
    return (
      <div className="pt-10 mx-2 md:pl-20 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42">
        <div className="animate-pulse">
          <div className="h-60 w-60 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-60 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
        <div className="hidden sm:inline-flex sm:space-x-4">
          <div className="animate-pulse">
            <div className="h-60 w-60 mb-4 bg-gray-200 rounded-md"></div>
            <div className="h-2 w-60 mb-2.5 bg-gray-200 rounded-md"></div>
            <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
          </div>
          <div className="animate-pulse">
            <div className="h-60 w-60 mb-4 bg-gray-200 rounded-md"></div>
            <div className="h-2 w-60 mb-2.5 bg-gray-200 rounded-md"></div>
            <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }
  