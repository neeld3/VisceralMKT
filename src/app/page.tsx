import Head from 'next/head';
import { UserGroupIcon, CheckBadgeIcon, BuildingStorefrontIcon, CursorArrowRaysIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <>
      <Head>
        <Image
            src="/vmr-logo.png" 
            alt="Logo"
            layout="responsive" 
            width={2125}
            height={183}
            objectFit="cover"
          />
        <title>Choosing the Right School</title>
        <meta name="description" content="A guide and community support for choosing the right school for your child" />
      </Head>

      <main className="">
        
        <div className="max-w-4xl mx-auto p-12">
          <h1 className="font-permanent-marker text-4xl font-bold text-center px-6 pt-12">EduGuru</h1>
          <h1 className="text-6xl text-custom-color font-bold text-center mb-12 px-6">Choose the Right School</h1>
          
          {/* Step 1 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Determine Your Criteria</h2>
            <p>Start by identifying what’s important for you and your child. Consider academic programs, location, size, and extracurricular activities as part of your criteria.</p>
          </section>
          
          {/* Step 2 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Research and Explore</h2>
            <p>Gather information about potential schools. Use our platform to access listings and connect with the parent community for first-hand experiences.</p>
          </section>
          
          {/* Step 3 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Visit Schools</h2>
            <p>Arrange visits to shortlisted schools. Observe the environment, meet the faculty, and see the facilities to get a feel for each school.</p>
          </section>
          
          {/* Step 4 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Evaluate Academic Programs</h2>
            <p>Look into the curriculum and academic performance of schools. Consider how each school&apos;s approach to learning aligns with your child&apos;s needs.</p>
          </section>
          
          {/* Step 5 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Consider Extracurriculars</h2>
            <p>Extracurricular activities play a crucial role in a child&apos;s development. Evaluate what each school offers outside the classroom.</p>
          </section>
          
          {/* Step 6 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Application Process</h2>
            <p>Understand the application and admission process for each school. Prepare your applications well in advance to meet deadlines.</p>
          </section>
          
          {/* Step 7 */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Make Your Decision</h2>
            <p>Consider all factors and inputs from your visits and community insights. Choose the school that best fits your child&apos;s needs and aspirations.</p>
          </section>
          
        </div>

        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="font-permanent-marker text-custom-color text-3xl font-semibold text-center leading-7 pt-12">Don&apos;t do it alone</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-4xl">
                A community and resources to guide you along the entire journey
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leverage expert advice and parent experiences to navigate the school selection process with confidence.
              </p>
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
