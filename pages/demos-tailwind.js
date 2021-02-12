import Head from 'next/head'
import styles from '../styles/Demos.module.css'
import demos from '../amp-demos/index.js'

export default function Demos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>AMP for Email demos</h1>
        <p>Here are some demos of AMP for Email.  Please use them, they are cool.</p>
        <div className="lg:flex items-center container mx-auto my-auto">
          {Object.entries(demos).map(([title, demo]) =>
            <div className="lg:m-4 shadow-md hover:shadow-lg bg-white hover:bg-gray-100 rounded-lg  dark:bg-gray-900 dark:hover:bg-gray-800 my-12 mx-8">
              <img src={demo.thumbnailUrl} alt="" className="object-cover h-72 w-full overflow-hidden" />
              <div className="p-4">
                <h3 className="font-medium text-gray-600 text-lg my-2">{demo.title}</h3>
                <p className="text-justify">{demo.description}</p>
                <h3>Links</h3>
                <ul>
                  <li>
                    <a href={`https://playground.amp.dev/?runtime=amp4email#share=${Buffer.from(demo.html).toString('base64')}`}>AMP playground</a>
                  </li>
                  <li>
                    <a href="https://github.exacttarget.com/amp4email/sfmc-amp-resource/tree/master/store-locator">list.json</a>
                  </li>
                  <li>
                    <a href="https://github.exacttarget.com/amp4email/sfmc-amp-resource/tree/master/store-locator">form.json</a>
                  </li>
                  <li><a href="#store-locator">Link to this demo</a></li>
                </ul>
                <div className="flex flex-row gap-2">
                <h4>Components Used: </h4>
                  {demo.componentsUsed.map(componentName => <div className="mt-3">
                    <a href={`https://amp.dev/documentation/examples/components/${componentName}/?format=email`} className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"><span>{componentName}</span></a>
                  </div>)}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        This is a footer
      </footer>
    </div>
  )
}
