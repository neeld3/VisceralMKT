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
        <div className="bg-white">
          <div className="relative isolate pt-14">
            <div className="py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    &quot;AI isn&apos;t going to put you out of business. Someone using AI will.&quot;
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    &mdash; Kareem Lakani, Harvard Business School.
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
                <div className="mt-2 text-2xl text-center font-permanent-marker text-custom-color tracking-tight sm:text-4xl">
                  <p>
                    80% Faster. 80% Cheaper. Demonstrably Better.
                  </p>
                </div>
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <img
                      src="/chains.jpg"
                      alt="App screenshot"
                      width={744}
                      height={562}
                      className="rounded-md shadow-full ring-1 ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </main>
    </>
  );
}
