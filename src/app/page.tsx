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
          <h1 className="font-permanent-marker text-5xl text-custom-color font-bold text-center px-6 pt-12">Fully Loaded for all Markets<br /><br /></h1>
          <div className="w-full mx-auto mb-5">
            
            <Image
              src="/ironman.jpg"
              alt="Ironman"
              width={500}
              height={300}
              className="mt-8 mx-auto border border-black"
            />
          </div>
          <div className="w-4/5 mx-auto mt-5 mb-5">
            <Image
              src="/vmr-logo-black.png" 
              alt="Logo"
              layout="responsive" 
              width={2125}
              height={183}
              objectFit="cover"
            />
          </div>
          
          {/* Step 1 */}
          <section className="mt-6 mb-6 font-medium text-lg">
            <p className="mb-4">
              <br /><br />Are you tired of the tedious, time-consuming nature of traditional market research methods? Say goodbye to cumbersome surveys, expensive subcontractors, and endless back-and-forth.<br /><br /></p>
            <p className="mb-4">
              Introducing Visceral Marketing Research- Your All-in-One Market Research Solution. Our intuitive platform simplifies the entire process. From survey creation to data analysis, saving you time and resources.<br /><br />With Visceral Marketing Research, you can:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Create surveys effortlessly with our user-friendly interface.</li>
              <li>Cut down on research time and reduce overhead costs.</li>
              <li>Ensure data integrity with our advanced AI fraud detection system.</li>
            </ul>
          </section>
        </div>

        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="font-permanent-marker text-custom-color text-3xl font-semibold text-center leading-7 pt-12">Don&apos;t waste time & money</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-4xl">
                Embrace the new seamless process with us.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leverage expert large databases and fraud detection to meet all your data needs.
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
          <a href="#" className="inline-flex items-center px-12 font-permanent-marker text-5xl text-white bg-custom-color hover:bg-custom-color-dark focus:ring-custom-color-light font-medium rounded-full p-12 text-center shadow-lg transition-colors dark:bg-custom-color dark:hover:bg-custom-color-dark dark:focus:ring-custom-color-dark">
            <CursorArrowRaysIcon className="h-16 w-16 text-white mr-5" aria-hidden="true" />
            Join the Community
          </a>
        </div>

        <a href="#" className="inline-flex items-center font-permanent-marker fixed top-4 right-4 z-50 text-white bg-custom-color hover:bg-custom-color-dark focus:ring-custom-color-light font-medium rounded-full text-lg px-6 py-6 text-center shadow-lg transition-colors dark:bg-custom-color dark:hover:bg-custom-color-dark dark:focus:ring-custom-color-dark">
            <CursorArrowRaysIcon className="h-8 w-8 text-white mr-2" aria-hidden="true" />
        Join the Community
      </a>
      </main>
    </>
  );
};
