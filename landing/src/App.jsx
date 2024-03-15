import { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-800 px-4 py-2.5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="#" className="flex items-center">
              <span className="dark:text-white self-center whitespace-nowrap text-xl font-semibold">
                Project Kardeshev
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0"
                  >
                    Paper
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <a
            href="#"
            className="text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 mb-7 inline-flex items-center justify-between rounded-full px-1 py-1 pr-4 text-sm"
            role="alert"
          >
            <span className="bg-blue-600 text-white mr-3 rounded-full px-4 py-1.5 text-xs">
              New
            </span>{' '}
            <span className="text-sm font-medium">
              Kardeshev is at Hack the Weave!
            </span>
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Knowledge Gamification.
            <br /> Incentivized Learning for All
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg font-normal sm:px-16 lg:text-xl xl:px-48">
            Project Kardeshev's main goal is to bring knowledge to everyone by
            gamifying and incentivizing learning the real world applications and
            tooling used to create solutions, by way of engineering and other
            disciplines.
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium focus:ring-4"
            >
              Start now
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="text-gray-400 font-semibold uppercase">
              IN COLLABORATION WITH
            </span>
            <div className="text-gray-500 mt-8 flex flex-wrap items-center justify-center sm:justify-between">
              <a
                href="#"
                className="hover:text-gray-800 dark:hover:text-gray-400 mb-5 mr-5 lg:mb-0"
              >
                <svg
                  fill="#6b7280"
                  id="Layer_2"
                  data-name="Layer 2"
                  className="h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1311.58 240.92"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <polygon
                        className="cls-1"
                        points="0 240.45 80.2 240.45 96.57 196.19 59.74 120.79 0 240.45"
                      />
                      <polygon
                        className="cls-1"
                        points="123.57 1.12 96.57 62.6 180.86 240.45 241.58 240.45 212.77 180.62 123.57 1.12"
                      />
                      <polygon
                        className="cls-1"
                        points="785.01 46.85 821.84 122.26 881.58 2.59 801.38 2.59 785.01 46.85"
                      />
                      <polygon
                        className="cls-1"
                        points="472 1.12 500.8 60.96 590 240.45 617.01 178.98 532.72 1.12 472 1.12"
                      />
                      <polygon
                        className="cls-1"
                        points="713.34 1.59 713.58 1.12 633.38 1.12 617.01 45.38 653.84 120.79 682.64 63.1 771 240.92 798.01 179.45 713.72 1.59 713.34 1.59"
                      />
                      <polygon
                        className="cls-1"
                        points="1231.38 2.59 1215.01 46.85 1251.84 122.26 1311.58 2.59 1231.38 2.59"
                      />
                      <polygon
                        className="cls-1"
                        points="902 1.12 930.8 60.96 1020 240.45 1047.01 178.98 962.72 1.12 902 1.12"
                      />
                      <polygon
                        className="cls-1"
                        points="1143.34 1.59 1143.58 1.12 1063.38 1.12 1047.01 45.38 1083.84 120.79 1112.64 63.1 1201 240.92 1228.01 179.45 1143.72 1.59 1143.34 1.59"
                      />
                      <path
                        className="cls-1"
                        d="m361.8,0c-66.4,0-120.23,53.83-120.23,120.23s53.83,120.23,120.23,120.23,120.23-53.83,120.23-120.23S428.2,0,361.8,0Zm0,193.26c-40.34,0-73.03-32.7-73.03-73.03s32.7-73.03,73.03-73.03,73.03,32.7,73.03,73.03-32.7,73.03-73.03,73.03Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-800 dark:hover:text-gray-400 mb-5 mr-1 lg:mb-0"
              >
                <svg
                  fill="#6b7280"
                  className="mb-2 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-59.625 -12.15 516.75 72.9"
                >
                  <path d="M36 29.8H9.4v-6.6h34.3c-.9-2.8-3.8-5.4-8.9-5.4H9.9c-5.7 0-9 2.1-9 6.7v4.9c0 4 3.4 6.3 8.4 6.3h26.9v7H0c.9 3.8 3.8 5.8 9 5.8h27.1c5.7 0 8.5-2.2 8.5-6.9v-4.9c0-4.3-3.3-6.6-8.6-6.9zm54.3-11.9H57.5v30.7h9.3V36.8H91c6.7 0 10.4-2.3 10.4-7.7v-3.4c-.1-5-4.3-7.8-11.1-7.8zm3 9.8c0 2.2-.4 3.4-4 3.4H66.8l.1-8h22c4 0 4.5 1.2 4.5 3.3v1.3zm39 8.9h-19.8l-4.9 5.2h28.6l4.9 6.8h11l-23.7-32-5.6 6.9zm37.6-13.4h34.8c-.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5 0-8.8 1.8-8.8 6.7v17.2c0 4.9 4.3 6.7 8.8 6.7h26.3c6 0 8.1-1.7 9.1-5.8h-34.8zm75.6 10.2v-5.2h-28.1v20.4h41.5v-5.8h-32.1v-9.4zm-27.1-15.5h41.9v5.4h-41.9zm67.7 0h-14.6l17.2 12.6c2.5-1.7 5.4-3.5 8-5zm21.2 15.7c-2.5 1.7-5 3.6-7.4 5.4l13 9.5h14.7z" />
                  <path d="M397.5 0c-80 4.6-117 38.8-125.3 46.9l-1.7 1.6h14.8C325.3 8.4 382.8 1.3 397.5 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-800 dark:hover:text-gray-400 mb-5 mr-3 lg:mb-0"
              >
                <img
                  className="opacity-30"
                  width="161px"
                  src="https://lucrecia-lins.com/wp-content/uploads/2024/03/ZNd0V9bDuKhNfCKEzFCslNZuw4U.webp"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 text-left lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold tracking-tight">
              Open World Quests: <br /> Innovative Solutions Deployed
            </h2>
            <p className="mb-4">
              Players will be able to work on their quests in an open world
              format similar to GTA or minecraft.
            </p>
            <p>
              Each quest will require the player to research the issue and
              develop novel solutions to it. Once they have one, the product is
              licensed and deployed to arweave.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              className="w-full rounded-lg opacity-20"
              src="https://i.ibb.co/jfVjhW7/image-1.png"
              alt="PK"
            />
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="https://i.ibb.co/XVFFsQj/image.png"
              alt="P.K-"
            />
          </div>
        </div>
      </section>

      <section id="roadmap" className="mb-24 mt-12">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold tracking-tight">
            Roadmap
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light sm:text-xl lg:mb-16">
            Our roadmap serves as the compass, outlining the strategic
            direction, key objectives, and critical milestones essential for
            achieving our goals. It is a dynamic document that evolves with our
            progress, adapting to changing circumstances and insights gained
            along the way.{' '}
          </p>
        </div>

        <ol className="border-gray-200 dark:border-gray-700 relative mx-auto max-w-screen-sm border-s text-left">
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 1
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Complete Whitepaper Draft
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-base font-normal">
              Completing the whitepaper draws near, anticipation fills the air,
              signaling the culmination of months of research, analysis, and
              collaboration
            </p>
            <a
              href="#"
              className="text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4"
            >
              Check current status{' '}
              <svg
                className="ms-2 h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 2
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Release Testnet Token
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              The Testnet Token represents a step towards realizing our
              project's goals and demonstrating its potential.{' '}
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 3
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Dashboard
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              The dashboard represents a collection of metrics and data; it is a
              visual representation of our project's progress and a testament to
              our commitment to transparency and accessibility.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 4
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Bounty Protocol testnet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              This milestone represents a pivotal step forward in our project's
              evolution, signaling the imminent introduction of a groundbreaking
              mechanism designed to incentivize and reward community
              participation.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 5
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Game Release Alpha
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              Years of creativity, iteration, and collaboration have been poured
              into crafting an immersive and engaging experience for players,
              and the alpha release will be a testament to our dedication to
              delivering quality and innovation.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 6
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Mainnet release
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              With anticipation building among team members, stakeholders, and
              the wider community, we stand on the threshold of a new era,
              poised to unleash the full potential of our platform and embark on
              a journey of growth, adoption, and impact in the broader
              ecosystem.
            </p>
          </li>
        </ol>
      </section>

      <section id="team" className="bg-white dark:bg-gray-900 text-left">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold tracking-tight">
              Our Team
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light sm:text-xl lg:mb-16">
              A dynamic blend of engineers, educators, and gaming enthusiasts,
              united by a common goal: democratizing knowledge access through
              innovative technology.{' '}
            </p>
          </div>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-82 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/388476?v=4"
                  alt="2n Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
                  <a href="#">2n1u0</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Interplanetary Product Manager
                </span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Drives the product like an electric Ferrari, while brings the
                  experience of a combustion engineer.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://ca.slack-edge.com/T06P2QET10V-U06NZF1KKK8-8b955705f4f5-512"
                  alt="LF"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
                  <a href="#">Louis-Philippe Bellier</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">CIX</span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Mr. Bellier drives the investors relations with finesse and
                  expertise.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/85306700?v=4"
                  alt="Founder"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
                  <a href="#">Atticus</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Founder
                </span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Hola! The founder is the glue. Doing other important stuff as
                  well.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-52 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/163219806?s=48&v=4"
                  alt="Stephan"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
                  <a href="#">Stephan</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Mistery man
                </span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Stephan is doing what cannot be revealed.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800 p-4 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <span className="dark:text-white self-center whitespace-nowrap text-2xl font-semibold">
                  Kardeshev
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Cookbook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      How to do it
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                  Come Home
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      101 xyi
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Magnetics
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                  Be there
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Slack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Farcaster
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-gray-200 dark:border-gray-700 my-6 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-center">
              © 2024{' '}
              <a href="#" className="hover:underline">
                Kardeshev
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/project-kardeshev/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
