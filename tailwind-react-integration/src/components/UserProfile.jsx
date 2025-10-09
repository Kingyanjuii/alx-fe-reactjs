export default function UserProfile() {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-lg sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto sm:w-24 sm:h-24 w-24 h-24 md:w-36 md:h-36 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        Alex Kinyanjui
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-2">
        Frontend Developer & Designer passionate about building responsive and
        visually engaging user interfaces.
      </p>
    </div>
  );
}
