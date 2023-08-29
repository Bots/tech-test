import { MouseEventHandler } from "react"

export function HeroSection(props: {
  page: any
  fetchData?: MouseEventHandler<HTMLButtonElement> | undefined
}) {
  let heroText = ""

  switch (props.page) {
    case "home":
      heroText =
        "Click the button below to send a GET request to the jsonplaceholder API, get the users, display them in a table, and commit them to the app state."
      break
    case "save":
      heroText =
        "This table has been populated using a state variable which stores the users. Click the button below to save this user data to the database."
      break
    case "fetch":
      heroText =
        "Click the button below to load the previously saved data from the database."
      break
    default:
      heroText = "Something isn't quite right..."
      break
  }

  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            FieldSync Technical Test
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            {heroText}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={props.fetchData}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
          >
            Download Users
          </button>
        </div>
      </div>
    </div>
  )
}
