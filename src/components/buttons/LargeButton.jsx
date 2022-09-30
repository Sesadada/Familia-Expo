const LargeButton = ({ children, href, onClick }) => (
  <div
    href={href}
    onClick={onClick}
    className="w-full my-4 focus:bg-blue-500 border-none py-3 px-8 border bg-blue-300 text-white rounded-full shadow-md text-center cursor-pointer"
  >
    {children}
  </div>
);

export default LargeButton;
