import Head from 'next/head';
import Image from 'next/image';
import { DocumentTextIcon, ChartBarIcon, BanknotesIcon, CursorArrowRaysIcon } from '@heroicons/react/20/solid';
const features = [
  {
    name: 'Analyze data in natural language',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra varius orci hendrerit interdum. Maecenas vitae justo ligula. Maecenas sit amet dapibus tortor, vel accumsan magna.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Generate and export reports',
    description:
      'In hac habitasse platea dictumst. Maecenas iaculis dolor eu metus auctor dapibus. Curabitur pretium velit vehicula turpis convallis placerat. Fusce tempor finibus mi, a pretium massa gravida quis. Mauris faucibus nisl eu gravida interdum.',
    icon: ChartBarIcon,
  },
  {
    name: 'Earn revenue with collaborate client tools',
    description:
      'In hac habitasse platea dictumst. Maecenas iaculis dolor eu metus auctor dapibus. Curabitur pretium velit vehicula turpis convallis placerat. Fusce tempor finibus mi, a pretium massa gravida quis. Mauris faucibus nisl eu gravida interdum.',
    icon: BanknotesIcon,
  },
]
export default function Home() {
  return (
    <>
      <Head>
        <title>Marketing Research Made Easy</title>
        <meta name="description" content="A more streamlined way to meet your surveying needs." />
      </Head>

      <main className="">
        <div className="max-w-4xl mx-auto p-12">
          <h1 className="font-permanent-marker text-5xl text-custom-color font-bold text-center px-6 pt-12">Run Surveys Like Tony Stark<br /><br /></h1>
          <div className="w-full mx-auto mb-5">
            
            <Image
              src="/ironman.jpg"
              alt="Ironman"
              width={500}
              height={300}
              className="mt-8 mx-auto border border-black"
            />
          </div>
          <div className="w-3/5 mx-auto mt-5 mb-5">
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
              <br />80% Faster. 80% Cheaper. <br />Demonstrably Better.
            </p>
          </div>  
        
          {/* Step 1 */}
          <section className="mt-6 mb-6 font-medium text-lg">
            <p className="mb-4">
              <br /><br />Tony Stark relies on no one, just his tools. Imagine having Tony Stark&apos;s Iron Man suit, powered by the AI genius of Jarvis, tailored specifically for market research. VisceralMR is that suit—a comprehensive, AI-driven platform that revolutionizes how you conduct research.<br /><br />
            </p>
            <p className="mb-4 font-bold">
              Challenges with Current Solutions
            </p>
            <p className="mb-4">
              Like Jarvis to Tony Stark, Visceral AI is your intelligent partner, transforming the way you conduct market research. <br /><br />
            </p>
            <p className="mb-4 text-xl font-bold">
              Built-In Tools
              <ul class="list-disc list-inside ml-6 mb-4">
                <li>Fragmented Tools & Processes: Managing multiple tools leads to inefficiencies and high costs.</li>
                <li>Lengthy Turnaround Times: Traditional methods delay actionable insights.</li>
                <li>Complex Learning Curves: Specialized software requires extensive training.</li>
                <li>Vendor Management: Managing vendors can be time-consuming and often involves project managers who don’t fully understand your business needs.</li>
                <li>Data Quality & Integration: Ensuring data quality and integrating multiple data sources can be cumbersome and unreliable.</li>
                <li>Actionable Insights: Difficulty in turning raw data into actionable insights quickly.</li>
                <li>Scalability Issues: Traditional solutions may not scale efficiently to handle large volumes of data or complex survey requirements.</li>

              </ul>
            </p>
            <p className="mb-4">
              VisceralMR equips you with powerful, intuitive tools that transform tedious tasks into streamlined processes. Just as Tony Stark overcomes challenges with his Iron Man suit, you can rely on VisceralMR to deliver fast, efficient, and impactful market research.   Step into the future of market research with VisceralMR—where every challenge meets its match. Take the next step and equip your market research with the power of VisceralMR. Discover how VisceralMR can be your trusted companion in the quest for insights.
            </p>
          </section>
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
          <a href="https://calendly.com/christian-e2w/visceral-intro?month=2024-06" className="inline-flex items-center px-12 font-permanent-marker text-5xl text-white bg-custom-color hover:bg-custom-color-dark focus:ring-custom-color-light font-medium rounded-full p-12 text-center shadow-lg transition-colors dark:bg-custom-color dark:hover:bg-custom-color-dark dark:focus:ring-custom-color-dark">
            <CursorArrowRaysIcon className="h-16 w-16 text-white mr-5" aria-hidden="true" />
            Get Free Demo
          </a>
        </div>

        <a href="https://calendly.com/christian-e2w/visceral-intro?month=2024-06" className="inline-flex items-center font-permanent-marker fixed top-4 right-4 z-50 text-white bg-custom-color hover:bg-custom-color-dark focus:ring-custom-color-light font-medium rounded-full text-lg px-6 py-6 text-center shadow-lg transition-colors dark:bg-custom-color dark:hover:bg-custom-color-dark dark:focus:ring-custom-color-dark">
            <CursorArrowRaysIcon className="h-8 w-8 text-white mr-2" aria-hidden="true" />
        Get Free Demo
      </a>
      </main>
    </>
  );
};
