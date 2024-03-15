import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Project Kardeshev
                        </span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="#"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get
                            started</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Paper</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Roadmap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
                <a href="#"
                   className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                   role="alert">
                    <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span
                    className="text-sm font-medium">Kardeshev is at Hack the Weave!</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"></path>
                    </svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Knowledge Gamification.<br/> Incentivized Learning for All
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Project Kardeshev's main goal is to bring knowledge to everyone by gamifying and incentivizing learning the real world applications and tooling used to create solutions, by way of engineering and other disciplines.

                </p>
                <div
                    className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#"
                       className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Start now
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase">IN COLLABORATION WITH</span>
                    <div className="flex flex-wrap items-center justify-center mt-8 text-gray-500 sm:justify-between">
                        <a href="#" className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                            <svg fill="#6b7280" id="Layer_2" data-name="Layer 2" className="h-8" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 1311.58 240.92">

                                <g  id="Layer_1-2" data-name="Layer 1">
                                    <g>
                                        <polygon className="cls-1"
                                                 points="0 240.45 80.2 240.45 96.57 196.19 59.74 120.79 0 240.45"/>
                                        <polygon className="cls-1"
                                                 points="123.57 1.12 96.57 62.6 180.86 240.45 241.58 240.45 212.77 180.62 123.57 1.12"/>
                                        <polygon className="cls-1"
                                                 points="785.01 46.85 821.84 122.26 881.58 2.59 801.38 2.59 785.01 46.85"/>
                                        <polygon className="cls-1"
                                                 points="472 1.12 500.8 60.96 590 240.45 617.01 178.98 532.72 1.12 472 1.12"/>
                                        <polygon className="cls-1"
                                                 points="713.34 1.59 713.58 1.12 633.38 1.12 617.01 45.38 653.84 120.79 682.64 63.1 771 240.92 798.01 179.45 713.72 1.59 713.34 1.59"/>
                                        <polygon className="cls-1"
                                                 points="1231.38 2.59 1215.01 46.85 1251.84 122.26 1311.58 2.59 1231.38 2.59"/>
                                        <polygon className="cls-1"
                                                 points="902 1.12 930.8 60.96 1020 240.45 1047.01 178.98 962.72 1.12 902 1.12"/>
                                        <polygon className="cls-1"
                                                 points="1143.34 1.59 1143.58 1.12 1063.38 1.12 1047.01 45.38 1083.84 120.79 1112.64 63.1 1201 240.92 1228.01 179.45 1143.72 1.59 1143.34 1.59"/>
                                        <path className="cls-1"
                                              d="m361.8,0c-66.4,0-120.23,53.83-120.23,120.23s53.83,120.23,120.23,120.23,120.23-53.83,120.23-120.23S428.2,0,361.8,0Zm0,193.26c-40.34,0-73.03-32.7-73.03-73.03s32.7-73.03,73.03-73.03,73.03,32.7,73.03,73.03-32.7,73.03-73.03,73.03Z"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="#" className="mb-5 mr-1 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                            <svg fill="#6b7280" className="h-12 mb-2" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-59.625 -12.15 516.75 72.9">
                                <path
                                    d="M36 29.8H9.4v-6.6h34.3c-.9-2.8-3.8-5.4-8.9-5.4H9.9c-5.7 0-9 2.1-9 6.7v4.9c0 4 3.4 6.3 8.4 6.3h26.9v7H0c.9 3.8 3.8 5.8 9 5.8h27.1c5.7 0 8.5-2.2 8.5-6.9v-4.9c0-4.3-3.3-6.6-8.6-6.9zm54.3-11.9H57.5v30.7h9.3V36.8H91c6.7 0 10.4-2.3 10.4-7.7v-3.4c-.1-5-4.3-7.8-11.1-7.8zm3 9.8c0 2.2-.4 3.4-4 3.4H66.8l.1-8h22c4 0 4.5 1.2 4.5 3.3v1.3zm39 8.9h-19.8l-4.9 5.2h28.6l4.9 6.8h11l-23.7-32-5.6 6.9zm37.6-13.4h34.8c-.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5 0-8.8 1.8-8.8 6.7v17.2c0 4.9 4.3 6.7 8.8 6.7h26.3c6 0 8.1-1.7 9.1-5.8h-34.8zm75.6 10.2v-5.2h-28.1v20.4h41.5v-5.8h-32.1v-9.4zm-27.1-15.5h41.9v5.4h-41.9zm67.7 0h-14.6l17.2 12.6c2.5-1.7 5.4-3.5 8-5zm21.2 15.7c-2.5 1.7-5 3.6-7.4 5.4l13 9.5h14.7z"/>
                                <path
                                    d="M397.5 0c-80 4.6-117 38.8-125.3 46.9l-1.7 1.6h14.8C325.3 8.4 382.8 1.3 397.5 0z"/>
                            </svg>
                        </a>
                        <a href="#" className="mb-5 mr-3 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                            <img className="opacity-30" width="161px" src="https://lucrecia-lins.com/wp-content/uploads/2024/03/ZNd0V9bDuKhNfCKEzFCslNZuw4U.webp" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="items-center text-left max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Open World Quests: <br/> Innovative Solutions Deployed</h2>
                    <p className="mb-4">Players will be able to work on their quests in an open world format similar to GTA or minecraft.
                    </p>
                    <p>Each quest will require the player to research the issue and develop novel solutions to it. Once they have one, the product is licensed and deployed to arweave.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg opacity-20"
                         src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTExIDExMTEiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmMmYyZjI7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIxMTExIiBoZWlnaHQ9IjExMTEiLz4KICA8L2c+Cjwvc3ZnPg=='
                         alt="PK" />
                        <img className="w-full mt-4 rounded-lg lg:mt-10"
                             src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTExIDExMTEiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmMmYyZjI7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIxMTExIiBoZWlnaHQ9IjExMTEiLz4KICA8L2c+Cjwvc3ZnPg=='
                             alt="P.K-" />
                </div>
            </div>
        </section>




        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kardeshev</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Cookbook</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">How to do it</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Come Home</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">101 xyi</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Magnetics</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Be there</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Slack</a>
                                </li>
                                <li >
                                    <a href="#" className="hover:underline ">Farcaster</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                href="#" className="hover:underline">Kardeshev</a>. All Rights Reserved.
            </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                        </a>
                        <a href="https://github.com/project-kardeshev/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default App
