import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import demos from '../amp-demos/index.js';
import ComponentFilterBar from '../components/ComponentFilterBar';


const demoEntries = Object.entries(demos);

function chooseImage(thumbnail) {
  if (thumbnail.webp) {
    return <source srcSet={thumbnail.webp} type="image/webp" media="(prefers-reduced-motion: no-preference)" />;
  }
  return null
}

function getFilteredComponentsFromQuery(query) {
  if(!query.components) {
    return [];
  }
  if(Array.isArray(query.components)) {
    return query.components;
  } else {
    return [query.components];
  }
}

function getFilteredDemoEntries(filteredComponents) {
  return demoEntries.filter(([, demo]) => {
    if (filteredComponents.length > 0) {
      for (const componentName of demo.componentsUsed) {
        if (filteredComponents.indexOf(componentName) > -1) {
          return true;
        }
      }
      return false;
    }
    return true;
  });
}

export default function Demos() {
  const router = useRouter();
  const [filteredComponents, setFilteredComponents] = useState(getFilteredComponentsFromQuery(router.query));
  const [filteredDemos, setFilteredDemos] = useState(getFilteredDemoEntries(filteredComponents));

  // Update filterComponents list when URL query params change
  useEffect(() => {
    setFilteredComponents(getFilteredComponentsFromQuery(router.query));
  }, [router.query.components])

  // Update filteredDemos when filterComponents change
  useEffect(() => {
    setFilteredDemos(getFilteredDemoEntries(filteredComponents));
  }, [filteredComponents])

  return (
    <div>
      <Head>
        <title>AMP for Email demo templates</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="AMP for Email demo templates" />
      </Head>

      <header>
        <h1>AMP for Email Demos</h1>
        <p>This is a collection of AMP for Email examples written for and tested in SFMC. They have been validated in the <a href="https://amp.gmail.dev/playground/">Gmail</a> and <a href="https://playground.amp.dev/">AMP</a> online playgrounds.</p>
        <p>Most of the content is generated via <code>.json</code>, and hosted on SFMC as code resource. Some of these code resources may be generated dynamically using <a href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_serverSideJavaScript.htm">Server-Side JavaScript</a> and utilize a third party API.</p>
        <p>Visit <a href="https://github.com/salesforce-marketingcloud/amp-demos">github.com/salesforce-marketingcloud/amp-demos</a> to report any issues, or access the raw files for more detail.</p>
        <p>⚡</p>
        <ComponentFilterBar filteredComponents={filteredComponents} router={router} />
      </header>

      <main>

        <ul className="demos">
          {filteredDemos.map(([dirKey, demo]) =>
            <li id={`${dirKey}`} key={`${dirKey}`}>
              <h2>{demo.title}</h2>
              <a href={`https://playground.amp.dev/?runtime=amp4email#share=${Buffer.from(demo.html).toString('base64')}`} target="_blank">
                <picture>
                  {chooseImage(demo.thumbnail)}
                  <source srcSet={demo.thumbnail.jpg} type="image/jpg" />
                  <img src={demo.thumbnail.jpg} alt={`${demo.title} preview`} />
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
                {demo.additionalFiles.map(({ href, text }) => {
                  return <li key={href}>
                    <a href={`${href}`}>{text}</a>
                  </li>;
                })}
                <li><a href={`#${dirKey}`}>Link to this <span aria-label={`of ${demo.title}`}></span>demo</a></li>
              </ul>
            </li>
          )}
        </ul>
      </main>

      <footer>

        <h2 id="ExternalResources"><strong>External Resources</strong></h2>

          <ul>
            <li><a href="https://salesforce.quip.com/HEauAZ5Gzwa7">AMP for Email: Delivery Email Code Samples</a></li>
            <li><a href="https://salesforce.quip.com/ab4eAaM5GL0C">CloudPage Code Resources and AMP for Email</a></li>
            <li><a href="https://amp.dev/documentation/guides-and-tutorials/start/create_email/?format=email">Official AMP for Email docs</a></li>
          </ul>

        <h2 id="TrailheadLiveSeries"><strong>Trailhead Live Series</strong></h2>

          <ul>
            <li><a href="https://trailhead.salesforce.com/live/videos/a2r3k000001vD1P/getting-started-with-amp-for-email-code-part-1/">Getting Started with AMP for Email</a></li>
            <li><a href="https://trailhead.salesforce.com/live/videos/a2r3k000001vD6K/building-advanced-interactions-in-amp-for-emails/">Building Advanced Interactions in AMP for Email</a></li>
            <li><a href="https://trailhead.salesforce.com/live/videos/a2r3k000001vD6A/episode-3-sending-and-receiving-data-with-amp-for-email/">Sending and Receiving Data with AMP for Email</a></li>
          </ul>

      </footer>
    </div>
  )
}
