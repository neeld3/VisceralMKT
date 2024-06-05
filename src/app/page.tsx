import Head from 'next/head';
import Image from 'next/image';
import { DocumentTextIcon, ChartBarIcon, BanknotesIcon, CursorArrowRaysIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Analyze data in natural language',
    description:
      'Utilize AI to develop discussion guides and summarize qualitative discussions, ensuring that even complex data can be understood and acted upon. Engage respondents in real-time conversations for richer, more insightful verbatims.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Generate and export reports',
    description:
      'Transform raw data into customized, actionable reports that highlight key insights and trends. Tailor your reports to meet specific business needs, enabling informed decision-making and strategic planning.',
    icon: ChartBarIcon,
  },
  {
    name: 'Earn revenue with collaborate client tools',
    description:
      'Facilitate seamless team collaboration on survey development, media monitoring, and report generation. Leverage advanced analytics and data visualization tools to provide valuable insights that drive revenue growth for your clients.',
    icon: BanknotesIcon,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketing Research Made Easy</title>
        <meta name="description" content="A more streamlined way to meet your surveying needs." />
      </Head>

      <main className="">
        <div className="py-24 sm:py-32 lg:pb-40 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold italic tracking-tight text-gray-900 sm:text-6xl">
              &quot;AI isn&apos;t going to put you out of business. Someone using AI will.&quot;
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              &mdash; Kareem Lakani, Harvard Business School.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto p-12">
          <div className="w-2/5 mx-auto mt-5 mb-5">
            <Image
              src="/vmr-logo-black.png"
              alt="Logo"
              layout="responsive"
              width={2125}
              height={183}
              objectFit="cover"
            />
          </div>
          <div className="mt-2 text-2xl text-center font-permanent-marker text-custom-color tracking-tight sm:text-4xl">
            <p>
              80% Faster. 80% Cheaper. Demonstrably Better.
            </p>
          </div>
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
              </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-lg font-semibold leading-7 text-custom-color">Visceral AI: Your Insights Powerhouse</p>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Tony Stark&apos;s Iron Man Suit for Market Research
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Imagine having Tony Stark&apos;s Iron Man suit, powered by the AI genius of Jarvis, tailored specifically for market research. Visceral Market Research is that suit—a comprehensive, AI-driven platform that revolutionizes how you conduct research.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  src="/chains.jpg"
                  alt="graphic"
                  width={912}
                  height={684}
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p className="mb-4">
                      <strong className="text-xl font-bold">Challenges with Current Solutions</strong>
                    </p>
                    <ul className="list-disc text-lg font-semibold text-gray-900 list-inside ml-6 mb-4">
                      <li>Fragmented Tools & Processes </li>
                      <li>Lengthy Turnaround Times</li>
                      <li>Complex Learning Curves</li>
                      <li>Vendor Management</li>
                      <li>Data Quality & Integration</li>
                      <li>Actionable Insights</li>
                      <li>Scalability Issues</li>
                    </ul>
                    <p className="mb-4">
                      Like Jarvis to Tony Stark, Visceral AI is your intelligent partner, transforming the way you conduct market research.
                    </p>
                    <p className="mb-4 text-xl font-bold">
                      Built-In Tools
                    </p>
                    <p className="mb-4 text-lg font-bold">
                      &nbsp;1. End-to-End Solution
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>From identifying business needs to survey development and data visualization, VisceralMR seamlessly manages every step of the research process.</li>
                      </ul>
                      &nbsp;2. Collaborative Workspace
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Facilitates team collaboration on methodologies and survey development, media monitoring, industry/category updates, and report development.</li>
                      </ul>
                      &nbsp;3. Qualitative Research
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Utilizes AI to develop discussion guides, review and summarize all qualitative discussions (IDIs or groups), and potentially leverage AI for one-on-one conversations.</li>
                      </ul>
                      &nbsp;4. Survey Programming & Hosting
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Capable of programming complex quantitative surveys and integrates panels with real-time data quality checks. Allows respondents to chat with AI for richer verbatims.</li>
                      </ul>
                      &nbsp;5. Efficient Panel Integration
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Connect with panel sources more effectively, ensuring demographic balancing and quota management. AI monitors and updates panels in real-time.</li>
                      </ul>
                      &nbsp;6. Data Processing
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Generate comprehensive data tables with standard outputs, including stat testing, and more. Quickly synthesize and analyze large quantities of verbatims to identify themes and insights.</li>
                        <li>Efficient end-user tool for running banners and cross tabs, allowing for quick and easy data manipulation and analysis.</li>
                      </ul>
                      &nbsp;7. Advanced Analytics
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Unlock deeper insights with sophisticated techniques like MaxDiff, factor analysis, correlations, conjoint analysis, and predictive modeling. Dive into the data to uncover patterns and trends that drive strategic decisions.</li>
                      </ul>
                      &nbsp;8. Data Visualization
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Transform complex data sets into clear, actionable insights with intuitive visualization tools.</li>
                      </ul>
                      &nbsp;9. Custom Reporting
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Generate customized reports that highlight key insights and trends, tailored to your specific needs.</li>
                      </ul>
                      &nbsp;10. Scalability & Flexibility
                      <ul className="list-disc text-lg font-medium list-inside ml-6 mb-4">
                        <li>Easily scale your research efforts and adapt to changing needs without compromising on quality or speed.</li>
                      </ul>
                    </p>
                    <p className="mb-4">
                      It&apos;s the &apos;Iron Man suit&apos; of market research. With one subscription you get access to ALL the tools you need. With an easy-to-use interface, you can rely on VisceralMR for fast, efficient, and impactful market research. Step into the future of market research with VisceralMR—where every challenge meets its match.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="font-permanent-marker text-custom-color text-3xl font-semibold text-center leading-7 pt-12">And That&apos;s Not All</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-4xl">
                An end-to-end suite that saves you time and makes you money.
              </p>
             
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon className="h-5 w-5 flex-none text-custom-color" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

          <div className="mb-24 flex justify-center">
            <a
              href="https://calendly.com/christian-e2w/visceral-intro?month=2024-06"
              className="inline-flex items-center px-12 font-permanent-marker text-5xl text-white bg-custom-color hover:bg-custom-color-dark focus:ring-custom-color-light font-medium rounded-full p-12 text-center shadow-lg transition-colors dark:bg-custom-color dark:hover:bg-custom-color-dark dark:focus:ring-custom-color-dark"
            >
              <CursorArrowRaysIcon className="h-16 w-16 text-white mr-5" aria-hidden="true" />
              Get Free Demo
            </a>
          </div>

          <a
            href="https://calendly.com/christian-e2w/visceral-intro?month=2024-06"
            className="inline-flex items-center font-permanent-marker fixed top-4 right-4 z-50 text-white bg-custom-color hover:bg-custom-color-dark focus:ring-custom-color-light font-medium rounded-full text-lg px-6 py-6 text-center shadow-lg transition-colors dark:bg-custom-color dark:hover:bg-custom-color-dark dark:focus:ring-custom-color-dark"
          >
            <CursorArrowRaysIcon className="h-8 w-8 text-white mr-2" aria-hidden="true" />
            Get Free Demo
          </a>
        </div>
      </main>
    </>
  );
}
