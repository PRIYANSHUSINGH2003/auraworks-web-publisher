import React from 'react';

const Screen: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full h-full min-h-[400px] p-9 gap-10 bg-white shadow-lg rounded-xl">
            {/* Sales Section */}
            <div className="flex justify-between items-center gap-2 w-full">
                {/* Sales Section - left-aligned */}
                <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">Sales</span>
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">10</span>
                </div>

                {/* Search Section - right-aligned */}
                <div className="w-64 h-10 bg-gray-100 rounded-full flex items-center justify-end px-5">
                    <input className="w-full text-gray-500 text-sm bg-transparent outline-none" placeholder="Search" />
                    <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>

            {/* Data Row */}
            <div className="flex items-center justify-between w-full h-12 bg-gray-100 rounded-xl overflow-x-auto">
                <div className="flex items-center h-12 bg-[rgba(241,244,249,0.5)] rounded-xl overflow-x-auto whitespace-nowrap">
                    <div className="flex justify-center items-center w-full gap-4">
                        {[
                            { text: '등록번호', width: 'w-24' },
                            { text: '환자명', width: 'w-40' },
                            { text: '성별', width: 'w-24' },
                            { text: '생년월일', width: 'w-24' },
                            { text: 'S/A', width: 'w-24' },
                            { text: '근육 방향', width: 'w-36' },
                            { text: '치료 처방 기간', width: 'w-36' },
                            { text: '환자 등록일', width: 'w-36' },
                            { text: '최종 처방일', width: 'w-36' },
                            { text: '처방 상태', width: 'w-36' },
                        ].map((item, index) => (
                            <div key={index} className={`flex items-center justify-center ${item.width} h-auto`}>
                                <span className="text-base font-bold text-gray-900 opacity-80">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Order Lists */}
            <span className="w-full text-lg text-center text-gray-600 mt-4">
                Order Lists
            </span>

            {/* Centered Button Section */}
            <div className="w-full flex justify-center -mt-6">
                <div className="h-12 px-4 py-2 bg-blue-600 text-white flex items-center justify-center rounded-xl">
                    <span className="text-base font-bold">Button</span>
                </div>
            </div>

        </div>
    );
};

export default Screen;
