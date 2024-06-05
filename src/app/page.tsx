import Head from 'next/head';
import Image from 'next/image';
import { DocumentTextIcon, ChartBarIcon, BanknotesIcon, CursorArrowRaysIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

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

        <div className="mx-auto max-w-7xl px-6 bg-white relative isolate pt-14 py-24 sm:py-32 lg:pb-40 px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              &quot;AI isn&apos;t going to put you out of business. Someone using AI will.&quot;
            </h1>
            <p className="mt-6 mb-20 text-lg leading-8 text-gray-600">
              &mdash; Karim Lakhani, Harvard Business School.
            </p>
          </div>
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
          <div className="mt-2 mb-20 text-2xl text-center font-permanent-marker text-custom-color tracking-tight sm:text-4xl">
            <p>
              80% Faster. 80% Cheaper. Demonstrably Better.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="border border-gray-900/10 rounded-xl overflow-hidden shadow-full">
              <img
                src="/chains.jpg"
                alt="Graphic"
                width={744}
                height={562}
                className="rounded-md shadow-full ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-custom-color">Visceral Market Research</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your AI Insights Powerhouse</h1>
            <p className="mt-6 text-xl leading-8">
              Times are changing. No longer is it efficient or productive to spend hours doing complicated manual work. We all know market research is a key business practice for 
              identifying consumers and addressing their demands. What some don&apos;t know is that there&apos;s a better way to get through the time-consuming and difficult process
              that exists today. Visceral Market Research is that better way—a comprehensive, AI-driven platform that revolutionizes how you conduct research.
            </p>
            <div className="mt-10 max-w-2xl">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Current Issues:</h2>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Fragmented Tools & Process.</strong> Managing multiple tools leads to inefficiencies and high costs.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Lengthy Turnaround Times.</strong> Traditional methods delay actionable insights.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Complex Learning Curves.</strong> Specialized software requires extensive training.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Time Consuming Vendor Management.</strong> Managing vendors can be time-consuming and often involves project managers who don’t fully understand your business needs.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cumbersome Data Quality & Integration.</strong> Ensuring data quality and integrating multiple data sources can be cumbersome and unreliable.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Slow Actionable Insights.</strong> Difficulty in turning raw data into actionable insights quickly. 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <XCircleIcon className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Scalability Issues.</strong> Traditional solutions may not scale efficiently to handle large volumes of data or complex survey requirements.
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-xl leading-8">
                Visceral AI is your intelligent partner, transforming the way you conduct market research.
              </p>
              
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Visceral Market Research&apos;s Built-In Tools:</h2>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">End-To-End Solution.</strong> From identifying business needs 
                    to survey development and data visualization, VisceralMR seamlessly manages every step of the research process.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Collaborative Workspace. </strong> Facilitates team collaboration 
                    on methodologies and survey development, media monitoring, industry/category updates, and report development.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Qualitative Research. </strong> Utilizes AI to develop discussion guides, 
                    review and summarize all qualitative discussions (IDIs or groups).
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Survey Programming & Hosting. </strong> Capable of programming complex quantitative 
                    surveys and integrates panels with real-time data quality checks.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Efficient Panel Integration. </strong> Connect with panel sources more effectively, 
                    ensuring demographic balancing and quota management. AI monitors and updates panels in real time.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Data Processing. </strong> Generate comprehensive data tables with standard outputs, 
                    including stat testing, and more. Quickly synthesize and analyze large quantities of verbatims to identify themes and insights.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Advanced Analytics. </strong> Unlock deeper insights with sophisticated techniques like MaxDiff, 
                    factor analysis, correlations, conjoint analysis, and predictive modeling.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Data Visualization. </strong> Transform complex data sets into clear, actionable insights with intuitive visualization tools.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Custom Reporting. </strong> Generate customized reports that highlight key insights and trends, tailored to your specific needs.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Scalability & Flexibility. </strong> Easily scale your research efforts and adapt to changing needs without compromising on quality or speed.
                  </span>
                </li>
              </ul>
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
      </main>
    </>
  );
}
