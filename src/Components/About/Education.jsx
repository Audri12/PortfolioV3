import React from 'react'

const Education = () => {
  return (
    <div>
        <div className="mt-8 font-aldrich">
        {/* Education Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <div className="text-3xl">Education</div>
            <h3 className="text-lg md:text-xl">
              <span>BSc. & MSc in CS, CCNA, MCP, MCSA, MCSE, RHCT, RHCSA, RHCE</span>
              <br />
              Has extensive experience in Cybersecurity, IT Infrastructure, and Technology Training
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center text-md">
                <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                Performed Excellent Result
              </li>
              <li className="flex items-center text-md">
                <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                Joined in Extra Curricular Activities
              </li>
              <li className="flex items-center text-md">
                <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                Wonderful achievement in sports
              </li>
            </ul>
          </div>

          {/* Passing Years */}
          <div>
            <h1 className="text-2xl sm:text-3xl mt-4 sm:mt-0 mb-5 md:mb-5">
              Passing Years
            </h1>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-base md:text-lg text-gray-300 gradient-border-b mb-5">
                  2000-2002
                </p>
                <p className="text-base md:text-lg tracking-tighter">
                  MSc. in Computer Science
                </p>
                <p className="mt-6 text-base md:text-lg text-gray-300 gradient-border-b mb-5">
                  1994-1996
                </p>
                <p className="text-base md:text-lg tracking-tighter mb-5">
                  Higher Secondary School Certificate
                </p>
              </div>
              <div>
                <p className="text-base md:text-lg text-gray-300 gradient-border-b">
                  1995-2000
                </p>
                <p className="text-base md:text-lg md:mb-5 sm:mb-5">
                  BSc. in Computer Science
                </p>
                <p className="mt-6 text-base md:text-lg text-gray-300 gradient-border-b">
                  1992-1994
                </p>
                <p className="text-base md:text-lg">
                  Secondary School Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education