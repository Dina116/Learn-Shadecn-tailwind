

export default function AuthIconSvg() {
  return (
    <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold">تسجيل الدخول</h2>
        </div>
  )
}
