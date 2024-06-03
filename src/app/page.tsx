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
          <div className="w-3/4 mx-auto mt-5 mb-5">
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
              <br /><br />Tony Stark relies on no one. The Ironman suit is a well-oiled, optimized machine always working at its best. Unlike Tony Stark or the Ironman suit, current market research methods are messy. They take too long and there&apos;s always a snag in the process. <br /><br />
            </p>
            <p className="mb-4">
              Does this sound familiar? Debating adding extra links in your chain of command by outsourcing. Or you could decide to do it in-house. But now you need to buy a million different licenses for every small thing that may need it. And you need the talent to be able to use those complex and outdated software in the first place. <br /><br /> 
            </p>
            <p className="mb-4">
              Introducing Visceral Market Research. No more juggling multiple licenses. No more dealing with outdated software. No more outsourcing headaches. <br /><br />
            </p>
            <p className="mb-4">
              It&apos;s the &apos;Swiss army knife&apos; of market research. With one subscription you get access to ALL the licenses and information you could ever need. Not to mention with an easy-to-use interface. Seamlessly transform your ideas into surveys with us. Equip yourself with Visceral Market Research today and streamline your market research process like never before!
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
