import Head from 'next/head'
import demos from '../amp-demos/index.js'

function chooseImage(thumbnail){
  if (thumbnail.webp){
    return <source srcSet={thumbnail.webp} type="image/webp" media="(prefers-reduced-motion: no-preference)"/>;
  }
  return null
}

export default function Demos() {

  return (
    <div>
      <Head>
        <title>AMP for Email demo templates</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="AMP for Email demo templates"/>
      </Head>

      <header>
        <h1>AMP for Email Demos</h1>
        <p>This is a collection of AMP for Email examples written for and tested in SFMC. They have been validated in the <a href="https://amp.gmail.dev/playground/">Gmail</a> and <a href="https://playground.amp.dev/">AMP</a> online playgrounds.</p>
        <p>Most of the content is generated via <code>.json</code>, and hosted on SFMC as code resource. Some of these code resources may be generated dynamically using <a href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_serverSideJavaScript.htm">Server-Side JavaScript</a> and utilize a third party API.</p>
        <p>Visit <a href="https://github.com/salesforce-marketingcloud/amp-demos">github.com/salesforce-marketingcloud/amp-demos</a> to report any issues, or access the raw files for more detail.</p>
        <p>⚡</p>
      </header>

      <main>

        <ul className="demos">
          {Object.entries(demos).map(([title, demo]) =>
            <li id={`${title}`} key={`${title}`}>
              <h2>{demo.title}</h2>
                <a href={`https://playground.amp.dev/?runtime=amp4email#share=${Buffer.from(demo.html).toString('base64')}`} target="_blank">
                  <picture>
                    {chooseImage(demo.thumbnail)}
                    <source srcSet={demo.thumbnail.jpg} type="image/jpg"/>
                    <img src={demo.thumbnail.jpg} alt={`${demo.title} preview`}/>
                  </picture>
                </a>
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
                  <a href={`https://playground.amp.dev/?runtime=amp4email#share=${Buffer.from(demo.html).toString('base64')}`} target="_blank">
                    View live <span aria-label={`of ${demo.title}`}></span>demo in AMP playground
                  </a>
                </li>
                {demo.additionalFiles.map(({href, text}) => {
                  return <li key={href}>
                    <a href={`${href}`}>{text}</a>
                  </li>;
                })}
                <li><a href={`#${title}`}>Link to this <span aria-label={`of ${demo.title}`}></span>demo</a></li>
              </ul>
            </li>
          )}
        </ul>
      </main>

      <footer>

        <h2><strong>External Resources</strong></h2>

          <ul>
            <li><a href="https://salesforce.quip.com/HEauAZ5Gzwa7">AMP for Email: Delivery Email Code Samples</a></li>
            <li><a href="https://salesforce.quip.com/ab4eAaM5GL0C">CloudPage Code Resources and AMP for Email</a></li>
            <li><a href="https://amp.dev/documentation/guides-and-tutorials/start/create_email/?format=email">Official AMP for Email docs</a></li>
          </ul>

      </footer>
    </div>
  )
}
