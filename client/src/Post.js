export function Post() {
  return (
    <div className="bg-memer_dark px-6 py-4 text-grey-400">
      <div className="border border-memer_border p-2 rounded-md flex">
        <form className="flex-grow bg-memer_dark-brighter border border-memer_border ml-4 mr-2 rounded-md">
          <input
            type="text"
            className="bg-memer_dark-brighter p-1 px-3 text-sm block w-full rounder-md"
            placeholder="New Post"
          />
        </form>
      </div>
    </div>
  );
}
