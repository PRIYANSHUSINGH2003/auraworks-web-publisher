import React from 'react';
import Screen from './Screen';

export default function Dashboard() {
    return (
        <div className="relative left-0 lg:left-[11%] bg-[#F7F9FC] w-full min-h-screen text-gray-900 font-sans p-8">

            {/* Dashboard Title */}
            <div className="mb-8 text-3xl font-bold text-gray-400">
                홈
            </div>

            {/* Greeting Section with Profile Image */}
            <div className="flex items-center mb-12 space-x-4 border-b border-gray-200 pb-6">
                {/* Profile Image */}
                <div className="relative" style={{ width: '85px', height: '85px' }}>
                    <svg width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_23_386)">
                            <path opacity="0.4" d="M82 42.8887C82 54.9421 76.6686 65.7504 68.2353 73.084C61.2122 79.1912 52.0379 82.8887 42 82.8887C31.9621 82.8887 22.7878 79.1912 15.7647 73.084C7.33139 65.7504 2 54.9421 2 42.8887C2 20.7973 19.9086 2.88867 42 2.88867C64.0914 2.88867 82 20.7973 82 42.8887Z" fill="#B6C2D9" />
                            <circle cx="42" cy="34.8887" r="12" fill="#B6C2D9" />
                            <path d="M68.2363 73.084C64.2626 62.4558 54.0155 54.8887 42.001 54.8887C29.9865 54.8887 19.7394 62.4558 15.7656 73.084C22.7887 79.1912 31.963 82.8887 42.001 82.8887C52.0389 82.8887 61.2132 79.1912 68.2363 73.084Z" fill="#B6C2D9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_23_386">
                                <rect width="84" height="83.9456" fill="white" transform="translate(0 0.888672)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                {/* Greeting Text */}
                <div className="space-y-3">
                    <div className="flex gap-2 text-4xl font-bold text-gray-900">
                        <span>박의사님,</span>
                        <span>안녕하세요</span>
                    </div>
                    <div className="text-xl text-gray-600">
                        의사 코드 - UH2406001
                    </div>
                </div>
            </div>

            {/* Greeting Section */}
            <div className="mb-6 space-y-3">
                <div className="flex gap-2 text-4xl font-bold text-gray-900">
                    <span>Quick Menu</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full px-4 mb-10">
                {/* Total Users Card */}
                <div className="flex flex-col justify-between bg-white shadow-xl rounded-[14px] p-7 gap-3 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-medium text-[#8395AC]">빠르고 간편하게</p>
                            <p className="text-2xl font-bold tracking-wide text-[#343F4E]">처방하기</p>
                        </div>
                        <div className="w-[60px] h-[60px] relative flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 rounded-full"></div>
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full">
                                <svg width="70" height="70" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_23_355)">
                                        <path opacity="0.21" d="M37 0C49.7025 0 60 10.2975 60 23V37C60 49.7025 49.7025 60 37 60H23C10.2975 60 0 49.7025 0 37V23C0 10.2975 10.2975 0 23 0H37Z" fill="#8280FF" />
                                        <path opacity="0.8" d="M24.7109 22.0586H35.2992" stroke="#8280FF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                                        <path opacity="0.6" d="M24.7109 26.4707H35.2992" stroke="#8280FF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                                        <path opacity="0.4" d="M24.7109 30.8828H30.0051" stroke="#8280FF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M31.7656 37.0586H37.0597" stroke="#8280FF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                                        <mask id="path-6-inside-1_23_355" fill="white">
                                            <rect x="17.6484" y="15" width="24.7059" height="30" rx="2" />
                                        </mask>
                                        <rect x="17.6484" y="15" width="24.7059" height="30" rx="2" stroke="#8280FF" stroke-width="5.2" stroke-linecap="round" stroke-linejoin="round" mask="url(#path-6-inside-1_23_355)" />
                                        <path d="M34.4141 34.4121V39.7062" stroke="#8280FF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_23_355">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Users Card */}
                <div className="flex flex-col justify-between bg-white shadow-xl rounded-[14px] p-7 gap-3 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-medium text-[#8395AC]">처음 진료 받는</p>
                            <p className="text-2xl font-bold tracking-wide text-[#343F4E]">환자 등록하기</p>
                        </div>
                        <div className="w-[60px] h-[60px] relative flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 rounded-full"></div>
                            <div className="relative z-10 flex items-center justify-center w-12 h-1 rounded-full">
                                <svg width="70" height="70" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M37 0C49.7025 0 60 10.2975 60 23V37C60 49.7025 49.7025 60 37 60H23C10.2975 60 0 49.7025 0 37V23C0 10.2975 10.2975 0 23 0H37Z" fill="#FEC53D" />
                                    <path opacity="0.587821" d="M38 24.667C40.2091 24.667 42 26.4579 42 28.667C41.9997 30.8759 40.209 32.667 38 32.667C35.791 32.667 34.0003 30.8759 34 28.667C34 26.4579 35.7909 24.667 38 24.667ZM25.999 18C28.9444 18 31.3328 20.3876 31.333 23.333C31.333 26.2785 28.9445 28.667 25.999 28.667C23.0537 28.6668 20.666 26.2784 20.666 23.333C20.6662 20.3877 23.0538 18.0002 25.999 18Z" fill="#FEC53D" />
                                    <path d="M25.9774 31.3335C32.3611 31.3335 37.6061 34.391 37.997 40.9331C38.0125 41.1937 37.9966 42.0005 36.995 42.0005H14.9696C14.6351 42.0001 13.9727 41.2787 14.0009 40.9321C14.5178 34.5688 19.6824 31.3336 25.9774 31.3335ZM37.4686 34.0015C42.0107 34.051 45.7197 36.3466 45.9989 41.1997C46.0102 41.3952 45.9986 41.9995 45.2753 41.9995H40.1327C40.1325 38.9989 39.1416 36.2294 37.4686 34.0015Z" fill="#FEC53D" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Divider */}
            <hr className="border-gray-200 my-8" />

            {/* Order Lists Section */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">처방 대기</h2>
                        <span className="text-lg text-gray-600 font-medium">(최근 30일 기준)</span>
                    </div>

                    <button className="px-4 py-2 bg-blue-800 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                        버튼 추가
                    </button>
                </div>

                {/* Orders Table */}
                <div className="overflow-x-auto">
                    <div className="relative w-full overflow-x-auto">
                        <Screen />
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-start mt-6">
                <div className="flex gap-4 items-center">
                    {/* Prev */}
                    <button className="w-8 h-8 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    {/* Page Numbers */}
                    <div className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded-full text-xs font-bold">
                        <span>1</span>
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center hover:bg-gray-200 rounded-full text-xs font-bold">
                        <span>2</span>
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center hover:bg-gray-200 rounded-full text-xs font-bold">
                        <span>3</span>
                    </div>
                    {/* Next */}
                    <button className="w-8 h-8 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
