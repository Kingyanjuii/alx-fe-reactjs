export default function UserProfile() {
  return (
    <div className="bg-white shadow-lg rounded-lg sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto w-24 h-24 md:w-36 md:h-36 object-cover"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
        Alex Kinyanjui
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-2">
        Frontend Developer & Designer passionate about building responsive and
        visually engaging user interfaces.
      </p>
    </div>
  );
}
