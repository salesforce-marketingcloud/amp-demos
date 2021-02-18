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

        <ul className="demos">
          {Object.entries(demos).map(([title, demo]) =>
            <li id="dynamic-hash">
              <h2>{demo.title}</h2>
              <img src={demo.thumbnailUrl} alt="dynamic alt text" />
              <p>{demo.description}</p>
              <h3>Components used</h3>
              <ul className="components">
                {demo.componentsUsed.map((componentName) => {
                  return <li key={componentName}>
                    <a href={`https://amp.dev/documentation/examples/components/${componentName}/?format=email`}>{componentName}</a>
                  </li>;
                })}
              </ul>
              <h3>Links</h3>

              <ul>
                <li>
                  <a href={`https://playground.amp.dev/?runtime=amp4email#share=${Buffer.from(demo.html).toString('base64')}`}>AMP playground</a>
                </li>
                <li>
                  <a href="#">list.json</a>
                </li>
                <li>
                  <a href="#">form.json</a>
                </li>
                <li><a href="#dynamic-hash">Link to this demo</a></li>
              </ul>
            </li>
          )}
        </ul>
      </main>

      <footer className={styles.footer}>
        This is a footer
      </footer>
    </div>
  )
}
