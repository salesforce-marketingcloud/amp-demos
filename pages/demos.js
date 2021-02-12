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
            <li id="store-locator">
              <h2>{demo.title}</h2>
              <img src={demo.thumbnailUrl} alt="Store Locator preview" />
              <p>{demo.description}</p>
              <h3>Components used</h3>
              <ul>
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
                  <a href="https://github.exacttarget.com/amp4email/sfmc-amp-resource/tree/master/store-locator">list.json</a>
                </li>
                <li>
                  <a href="https://github.exacttarget.com/amp4email/sfmc-amp-resource/tree/master/store-locator">form.json</a>
                </li>
                <li><a href="#store-locator">Link to this demo</a></li>
              </ul>
            </li>
          )}
          <li id="store-locator">
            <h2>Store Locator</h2>
            <img src="https://assets.codepen.io/51773/image+%2810%29.png" alt="Store Locator preview" />
            <p>Within the email, the recipient is able to search for a store location by entering a US postal code, and selecting additional search criteria. </p>
            <h3>Components used</h3>
            <ul>
              <li><a href="https://amp.dev/documentation/examples/components/amp-bind/?format=email">amp-bind</a></li>
              <li><a href="https://amp.dev/documentation/examples/components/amp-form/?format=email">amp-form</a></li>
              <li><a href="https://amp.dev/documentation/examples/components/amp-mustache/?format=email">amp-mustache</a></li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="https://playground.amp.dev/?runtime=amp4email#share=PCEtLSB7ez17PCA+fT19fSAtLT4KPCFkb2N0eXBlIGh0bWw+CjxodG1sIGFtcDRlbWFpbCBkYXRhLWNzcy1zdHJpY3QgbGFuZz0iZW4iPgo8aGVhZD4KPG1ldGEgY2hhcnNldD0idXRmLTgiPgo8c2NyaXB0IGFzeW5jIHNyYz0iaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanMiPjwvc2NyaXB0Pgo8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PSJhbXAtZm9ybSIgc3JjPSJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtZm9ybS0wLjEuanMiPjwvc2NyaXB0Pgo8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PSJhbXAtc2VsZWN0b3IiIHNyYz0iaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLXNlbGVjdG9yLTAuMS5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgYXN5bmMgY3VzdG9tLXRlbXBsYXRlPSJhbXAtbXVzdGFjaGUiIHNyYz0iaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLW11c3RhY2hlLTAuMi5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9ImFtcC1iaW5kIiBzcmM9Imh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1iaW5kLTAuMS5qcyI+PC9zY3JpcHQ+CjxzdHlsZSBhbXA0ZW1haWwtYm9pbGVycGxhdGU+Ym9keXt2aXNpYmlsaXR5OmhpZGRlbn08L3N0eWxlPgo8c3R5bGUgYW1wLWN1c3RvbT4KLndyYXBwZXIgewogIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjsKICBmb250LXNpemU6IDFyZW07CiAgYmFja2dyb3VuZDojZmZmOwogIGNvbG9yOiMzOTM5Mzk7Cn0KLmhlYWRlciB7CiAgcGFkZGluZzogM2VtIDEuMjVlbTsKICB0ZXh0LWFsaWduOmNlbnRlcjsKfQouaGVhZGVyIGFtcC1pbWcgewogIG1hcmdpbjowIGF1dG87CiAgbWF4LXdpZHRoOiAyMjBweDsKfQoubWFpbiB7CiAgcGFkZGluZzogMWVtOwp9CmgxewogIGZvbnQtc2l6ZToyZW07CiAgdGV4dC1hbGlnbjpjZW50ZXI7Cn0KLmZvb3RlciB7CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHBhZGRpbmc6IDFlbSAxZW0gM2VtOwogIGZvbnQtc2l6ZTouOGVtOwp9Ci5mb290ZXIgcCB7CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIG1hcmdpbjogMS4xZW0gMS4zM2VtOwp9Ci5mb290ZXIgYSB7CiAgY29sb3I6IzM5MzkzOTsKfQouZm9vdGVyIC5saW5rewogIGZvbnQtd2VpZ2h0OmJvbGQ7CiAgY29sb3I6IzZEQ0NFRTsKfQouZm9vdGVyIC5zb2NpYWx7CiAgd2lkdGg6MTRlbTsKICBtYXJnaW46MS4xZW0gYXV0bzsKICBkaXNwbGF5OmZsZXg7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwp9Ci5mb290ZXIgLmZvb3Rlci1uYXZ7CiAgcGFkZGluZzoxZW0gMWVtIDJlbTsKfQouZm9vdGVyIC5mb290ZXItbmF2IGF7CiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Cn0KCmgyLCBwIHsKICBtYXJnaW46IDA7Cn0KaW5wdXRbdHlwZT0icmFkaW8iXSB7CiAgZGlzcGxheTppbmxpbmUtYmxvY2s7CiAgb3BhY2l0eTowOwogIHdpZHRoOjA7CiAgaGVpZ2h0OjA7CiAgbWFyZ2luOjAgMCAwIC05OTk5cHg7CiAgZmxvYXQ6bGVmdDsKICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZQp9CmZpZWxkc2V0LCAuaWMtYW1wLXppcGNvZGUgewogIGJvcmRlcjpub25lOwogIG1hcmdpbjowOwogIHBhZGRpbmc6MDsKfQpsZWdlbmQsIC5pYy1hbXAtbGVnZW5kIHsKICBkaXNwbGF5OiBibG9jazsKICBmb250LXdlaWdodDogYm9sZDsKICBwYWRkaW5nOiAwLjhlbSAwIDAuNGVtIDA7CiAgZm9udC1zaXplOiAxLjNlbTsKfQouaWMtYW1wLWhlYWRlciB7CiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmOwogIGJhY2tncm91bmQ6ICNlZGZhZmQ7CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHBhZGRpbmc6IDNlbTsKfQouaWMtYW1wLWhlYWRlciBhbXAtaW1nIHsKICBtYXJnaW46MCBhdXRvOwogIG1heC13aWR0aDogNTBweDsKfQouaWMtYW1wLWhlYWRlci1sb2dvIHsKICBtYXJnaW46IDJlbSAwOwogIHRleHQtYWxpZ246IGNlbnRlcjsKfQouaWMtYW1wLWhlYWRlciBoMiB7CiAgY29sb3I6ICMwOTdmYjM7CiAgcGFkZGluZzogMC44ZW0gMDsKICBmb250LXNpemU6IDIuMmVtOwp9Ci5pYy1hbXAtaGVhZGVyIHAgewogIGRpc3BsYXk6IGJsb2NrOwogIG1hcmdpbjogMCBhdXRvOwogIG1heC13aWR0aDogNTAwcHg7CiAgZm9udC1zaXplOiAxLjZlbTsKICBjb2xvcjogIzM5MzkzOTsKfQouaWMtYW1wLXN0b3JlLWxvY2F0b3ItZm9ybSB7CiAgbWF4LXdpZHRoOiA2MDBweDsKICBtYXJnaW46IDAgYXV0bzsKICBwYWRkaW5nOiAwIC41ZW07CiAgY29sb3I6ICMzOTM5Mzk7Cn0KLmljLWFtcC10aXRsZS13cmFwcGVyIHsKICBkaXNwbGF5OiBncmlkOwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87CiAgLyogZ3JpZC1nYXA6IC42ZW07ICovCiAgcGFkZGluZzogMi44ZW0gMCAxLjRlbSAwOwp9Ci5pYy1hbXAtdGl0bGUgewogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgY29sb3I6ICMwOTdmYjM7CiAgZm9udC1zaXplOiAxLjVlbTsKICBtYXJnaW46IDAgMCAwIC41ZW07Cn0KLmljLWFtcC16aXBjb2RlIHsKICBkaXNwbGF5OiBibG9jazsKICBib3gtc2l6aW5nOiBib3JkZXItYm94OwogIHdpZHRoOiAxMDAlOwogIHBhZGRpbmc6IC43ZW07CiAgYm9yZGVyOiAwLjAyZW0gc29saWQgI2I2YjZiNjsKICBiYWNrZ3JvdW5kOiBub25lOwogIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsKICBmb250LXNpemU6IGluaGVyaXQ7Cn0KLmljLWFtcC1vcHRpb25zLXJhZGl1cyB7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7Cn0KLmljLWFtcC1vcHRpb25zLWxpbWl0IHsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7Cn0KLmljLWFtcC1vcHRpb25zIHsKICBkaXNwbGF5OiBncmlkOwp9Ci5pYy1hbXAtb3B0aW9ucyBkaXYgewogIGNvbG9yOiAjMzkzOTM5OwogIGJvcmRlcjogMC4wMmVtIHNvbGlkICNiNmI2YjY7CiAgcGFkZGluZzogLjdlbSAuM2VtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKfQouaWMtYW1wLW9wdGlvbnMgZGl2OmhvdmVyLAouaWMtYW1wLXN1Ym1pdCBkaXY6aG92ZXIgewogIGN1cnNvcjpwb2ludGVyOwp9Ci5pYy1hbXAtb3B0aW9ucyBkaXY6aG92ZXIgewogIGJhY2tncm91bmQ6IzA5N2ZiMzFmCn0KLmljLWFtcC1zdWJtaXQgZGl2OmhvdmVyIHsKICBiYWNrZ3JvdW5kOiAjMDk3ZmIzZTY7Cn0KLmljLWFtcC1vcHRpb25zIGlucHV0OmNoZWNrZWQgfiBkaXYgewogIGJhY2tncm91bmQ6ICMwOTdmYjM7CiAgY29sb3I6ICNmZmZmZmY7CiAgb3V0bGluZToxcHggYXV0byBIaWdobGlnaHQ7Cn0KLmljLWFtcC1vcHRpb25zIGlucHV0OmFjdGl2ZSB+IGRpdiB7CiAgYmFja2dyb3VuZDogIzA5N2ZiMzUwOwogIGNvbG9yOiAjMzkzOTM5Owp9Ci5pYy1hbXAtemlwY29kZTpmb2N1cywKLmljLWFtcC1vcHRpb25zIGlucHV0OmZvY3VzIH4gZGl2LAouaWMtYW1wLXN1Ym1pdCBpbnB1dDpmb2N1cyB+IGRpdiB7CiAgb3V0bGluZToxcHggYXV0byBIaWdobGlnaHQ7Cn0KLmljLWFtcC1jcml0ZXJpYS1kaXNwbGF5IHsKICBmb250LXdlaWdodDogbm9ybWFsOwogIGZvbnQtc3R5bGU6IGl0YWxpYzsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgY29sb3I6ICM5YTlhOWE7CiAgZm9udC1zaXplOiAxZW07CiAgcGFkZGluZzogMmVtIDAuNWVtOwp9Ci5pYy1hbXAtc3VibWl0IHsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgZGlzcGxheTogYmxvY2s7Cn0KLmljLWFtcC1zdWJtaXQgZGl2IHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgbWFyZ2luOiAwIGF1dG87CiAgYmFja2dyb3VuZDogIzA5N2ZiMzsKICBjb2xvcjogI2ZmZmZmZjsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIGJvcmRlcjogbm9uZTsKICBwYWRkaW5nOiAwLjhlbSAzZW07CiAgYm9yZGVyLXJhZGl1czogMmVtOwogIGZvbnQtc2l6ZTogMS4yZW07Cn0KLmljLWFtcC1zdWJtaXQgaW5wdXQgewogIGJvcmRlcjogbm9uZTsKICBwYWRkaW5nOiAwOwogIGZsb2F0OiBsZWZ0OwogIGJhY2tncm91bmQ6IG5vbmU7CiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOwp9Ci5pYy1hbXAtcmVzdWx0cyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7CiAgZm9udC1zaXplOiAxLjJlbTsKICBtYXJnaW46IDEuMmVtIDA7Cn0KLmljLWFtcC1yZXN1bHRzLWRldGFpbHMgLm5hbWUgewogIGZvbnQtd2VpZ2h0OmJvbGQ7Cn0KLmljLWFtcC1yZXN1bHRzLWRldGFpbHMgYSwKLmljLWFtcC1yZXN1bHRzLWRldGFpbHMgLnBob25lIHsKICBjb2xvcjojMDk3ZmIzOwp9Ci5pYy1hbXAtcmVzdWx0cy1zaG9wIHsKICB0ZXh0LWFsaWduOiByaWdodDsKfQouaWMtYW1wLXJlc3VsdHMtc2hvcCBhIHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgYmFja2dyb3VuZDogI2ZmZmZmZjsKICBjb2xvcjogIzA5N2ZiMzsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIGJvcmRlcjogMC4xNWVtIHNvbGlkICMwOTdmYjM7CiAgcGFkZGluZzogMC43ZW0gMS43ZW07CiAgYm9yZGVyLXJhZGl1czogMmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBmb250LXNpemU6IDAuN2VtOwogIGZvbnQtd2VpZ2h0OiBib2xkOwogIG1hcmdpbjogMCAxZW0gMCAwOwp9Ci5pYy1hbXAtcmVzdWx0cy1zdWNjZXNzLWVycm9yIHsKICBkaXNwbGF5OiBncmlkOwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgbWFyZ2luOiAzZW0gMCA1ZW0gMDsKICBoZWlnaHQ6NDAwcHg7CiAgb3ZlcmZsb3cteTogc2Nyb2xsOwogIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlLnM0LnNmbWMtY29udGVudC5jb20vbGliL2ZlOTgxNTc0NzI2NjAxN2Q3MS9tLzEvZTljMjE1MjEtZTYyZC00OWY0LTg1ZjEtYWJlYjdhOThjODhiLnBuZyk7CiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tOwogIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsKICBiYWNrZ3JvdW5kLXNpemU6IDUwJTsKICBib3JkZXItdG9wOiBzb2xpZCAjZTllOWU5IC4xZW07CiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2U5ZTllOSAuMWVtOwp9Ci5pYy1hbXAtcmVzdWx0cy1zdWJtaXR0aW5nLAouaWMtYW1wLXJlc3VsdHMtZXJyb3IsCi5pYy1hbXAtcmVzdWx0cy1lbXB0eSwKLmljLWFtcC1yZXN1bHRzLXNpZ25hbCB7CiAgY29sb3I6ICMwOTdmYjM7CiAgZm9udC1zaXplOiAuOGVtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKfQouaWMtYW1wLXJlc3VsdHMgKyAuaWMtYW1wLXJlc3VsdHMtZW1wdHkgewogIGRpc3BsYXk6IG5vbmU7Cn0KCkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHsKICAuaWMtYW1wLWhlYWRlciBoMiB7CiAgICBwYWRkaW5nOiAwLjRlbSAwOwogICAgZm9udC1zaXplOiAxLjVlbTsKICB9CiAgLmhlYWRlciB7CiAgICBwYWRkaW5nOiAxLjRlbSAxLjI1ZW07CiAgfQogIC5oZWFkZXIgYW1wLWltZyB7CiAgICBtYXgtd2lkdGg6IDEwMHB4OwogIH0KLmljLWFtcC1oZWFkZXIgewogICAgcGFkZGluZzogMmVtIDAuNWVtOwp9CiAgLmljLWFtcC1oZWFkZXIgYW1wLWltZyB7CiAgICBtYXgtd2lkdGg6IDI4cHg7CiAgfQouaWMtYW1wLWhlYWRlciBwIHsKICAgIGZvbnQtc2l6ZTogMS4xZW07CiAgICBwYWRkaW5nOiAwIDJlbTsKfQogIGxlZ2VuZCwgLmljLWFtcC1sZWdlbmQgewogICAgZm9udC1zaXplOiAuOWVtOwogIH0KICAuaWMtYW1wLXRpdGxlLXdyYXBwZXIgewogICAgcGFkZGluZzogMC44ZW0gMDsKICB9CiAgLmljLWFtcC10aXRsZSB7CiAgICBmb250LXNpemU6IDFlbTsKICB9CiAgLmljLWFtcC1zdWJtaXQgZGl2IHsKICAgIGZvbnQtc2l6ZTogMC44ZW07CiAgICBwYWRkaW5nOiAwLjhlbSAyZW07CiAgfQogIC5pYy1hbXAtY3JpdGVyaWEtZGlzcGxheSB7CiAgICBwYWRkaW5nOiAxZW0gMC41ZW07CiAgICBmb250LXNpemU6IDAuOGVtOwogIH0KICAuaWMtYW1wLXJlc3VsdHMtc3VjY2Vzcy1lcnJvciB7CiAgICBtYXJnaW46IDFlbSAwIDJlbSAwOwogIH0KICAuaWMtYW1wLXJlc3VsdHMgewogICAgZGlzcGxheTogYmxvY2s7CiAgfQogIC5pYy1hbXAtcmVzdWx0cy1zaG9wIHsKICAgIHRleHQtYWxpZ246IGxlZnQ7CiAgfQogIC5pYy1hbXAtcmVzdWx0cy1zaG9wIGEgewogICAgbWFyZ2luOiAxZW0gMDsKICB9CiAgLmljLWFtcC1vcHRpb25zLWxpbWl0IHsKICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDJmcjsKICB9Cn0KCjwvc3R5bGU+CjwvaGVhZD4KPGJvZHk+Cgo8YW1wLXN0YXRlIGlkPSJzdGF0ZSI+CiAgPHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9qc29uIj4KICAgIHsKICAgICAgIm15UmFkaXVzVGV4dCI6ICI1MCBtaWxlIiwKICAgICAgIm15TGltaXRUZXh0IjogImFsbCBsb2NhdGlvbnMiCiAgICB9CiAgPC9zY3JpcHQ+CjwvYW1wLXN0YXRlPgoKPGRpdiBjbGFzcz0id3JhcHBlciI+CjxkaXYgY2xhc3M9ImJvZHkiPgoKPGRpdiBjbGFzcz0iaGVhZGVyIj4KICAgIDxhbXAtaW1nIGxheW91dD0icmVzcG9uc2l2ZSIgc3JjPSJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3JkLWluZHVzdHJ5LWVtYWlscy9yZXRhaWwvbnRvL2JyYW5kLWFzc2V0cy9lbWFpbC10ZW1wbGF0ZXMvYnJhbmRpbmctbnRvLXNlY29uZGFyeS1sb2dvLWhvcml6b250YWwtYmx1ZS0yeC5wbmciICB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjE0MiIgYWx0PSJOb3J0aGVybiBUcmFpbCBPdXRmaXR0ZXJzIj48L2FtcC1pbWc+CjwvZGl2PgoKPGRpdiBjbGFzcz0iaWMtYW1wLWhlYWRlciI+CiAgPGFtcC1pbWcgbGF5b3V0PSJyZXNwb25zaXZlIiBzcmM9Imh0dHBzOi8vaW1hZ2UuczQuc2ZtYy1jb250ZW50LmNvbS9saWIvZmU5ODE1NzQ3MjY2MDE3ZDcxL20vMS9kOTdjNGFhOS05M2U4LTQxZWUtYjAxOC1kNDEwNjI1ZWQ2ODAucG5nIiB3aWR0aD0iNjYiIGhlaWdodD0iMTIzIiBhbHQ9IiI+PC9hbXAtaW1nPgogIDxoMj5CdXkgb25saW5lLCBwaWNrIHVwIHRvZGF5ITwvaDI+CiAgPHA+RmluZCBhIE5UTyBzdG9yZSBuZWFyIHlvdSBhbmQgZ2V0IHRoZSBnZWFyIHlvdSBuZWVkIGZvciB5b3VyIG5leHQgYWR2ZW50dXJlLjwvcD4KPC9kaXY+CgogIDxmb3JtIGlkPSJpYy1hbXAtc3RvcmUtbG9jYXRvci1mb3JtIiBjbGFzcz0iaWMtYW1wLXN0b3JlLWxvY2F0b3ItZm9ybSIgbWV0aG9kPSJnZXQiIGFjdGlvbi14aHI9Imh0dHBzOi8vcHViLnM0LmV4YWN0dGFyZ2V0LmNvbS9vYWhiajNld3UxZyI+CgogICAgPGRpdiBjbGFzcz0iaWMtYW1wLXRpdGxlLXdyYXBwZXIiPgogICAgICA8YW1wLWltZyBzcmM9Imh0dHBzOi8vaW1hZ2UuczQuc2ZtYy1jb250ZW50LmNvbS9saWIvZmU5ODE1NzQ3MjY2MDE3ZDcxL20vMS81OTRjODgwZS0zODJlLTRiYjItYWMxMS0zZDMwN2ExMzExZmEucG5nIiB3aWR0aD0iMjAiIGhlaWdodD0iMjciIGFsdD0iIj48L2FtcC1pbWc+CiAgICAgIDxoMiBjbGFzcz0iaWMtYW1wLXRpdGxlIj5GaW5kIGEgc3RvcmU8L2gyPgogICAgPC9kaXY+CgogICAgPGxhYmVsIGZvcj0iaWMtYW1wLXppcGNvZGUiIGNsYXNzPSJpYy1hbXAtbGVnZW5kIj5aaXAgQ29kZTwvbGFiZWw+CiAgICA8aW5wdXQgdHlwZT0ic2VhcmNoIiBpZD0iaWMtYW1wLXppcGNvZGUiIGNsYXNzPSJpYy1hbXAtemlwY29kZSIgbmFtZT0iemlwIj4KCiAgICA8ZmllbGRzZXQ+CiAgICAgIDxsZWdlbmQ+UmFkaXVzPC9sZWdlbmQ+CiAgICAgICAgPGRpdiBjbGFzcz0iaWMtYW1wLW9wdGlvbnMgaWMtYW1wLW9wdGlvbnMtcmFkaXVzIj4KICAgICAgICAgIDxsYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9InJhZGlvIiBuYW1lPSJyYWRpdXMiIHZhbHVlPSI1IiBvbj0iQU1QLnNldFN0YXRlKHtzdGF0ZTp7IG15UmFkaXVzVGV4dDogJzUgbWlsZSd9fSkiPgogICAgICAgICAgICA8ZGl2PjA1IG1pbGVzPC9kaXY+CiAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgPGxhYmVsPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0icmFkaW8iIG5hbWU9InJhZGl1cyIgdmFsdWU9IjE1IiBvbj0iQU1QLnNldFN0YXRlKHtzdGF0ZTp7IG15UmFkaXVzVGV4dDogJzE1IG1pbGUnfX0pIj4KICAgICAgICAgICAgPGRpdj4xNSBtaWxlczwvZGl2PgogICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgIDxsYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9InJhZGlvIiBuYW1lPSJyYWRpdXMiIHZhbHVlPSIzMCIgb249IkFNUC5zZXRTdGF0ZSh7c3RhdGU6eyBteVJhZGl1c1RleHQ6ICczMCBtaWxlJ319KSI+CiAgICAgICAgICAgIDxkaXY+MzAgbWlsZXM8L2Rpdj4KICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICA8bGFiZWw+CiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJyYWRpbyIgbmFtZT0icmFkaXVzIiB2YWx1ZT0iNTAiIG9uPSJBTVAuc2V0U3RhdGUoe3N0YXRlOnsgbXlSYWRpdXNUZXh0OiAnNTAgbWlsZSd9fSkiPgogICAgICAgICAgICA8ZGl2PjUwIG1pbGVzPC9kaXY+CiAgICAgICAgICA8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgPC9maWVsZHNldD4KCiAgICA8ZmllbGRzZXQ+CiAgICAgIDxsZWdlbmQ+TGltaXQgUmVzdWx0czwvbGVnZW5kPgogICAgICAgIDxkaXYgY2xhc3M9ImljLWFtcC1vcHRpb25zIGljLWFtcC1vcHRpb25zLWxpbWl0Ij4KICAgICAgICAgIDxsYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9InJhZGlvIiBuYW1lPSJsaW1pdCIgdmFsdWU9IjUiIG9uPSJBTVAuc2V0U3RhdGUoe3N0YXRlOnsgbXlMaW1pdFRleHQ6ICc1IGxvY2F0aW9ucyd9fSkiPgogICAgICAgICAgICA8ZGl2PjA1PC9kaXY+CiAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgPGxhYmVsPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0icmFkaW8iIG5hbWU9ImxpbWl0IiB2YWx1ZT0iMTAiIG9uPSJBTVAuc2V0U3RhdGUoe3N0YXRlOnsgbXlMaW1pdFRleHQ6ICcxMCBsb2NhdGlvbnMnfX0pIj4KICAgICAgICAgICAgPGRpdj4xMDwvZGl2PgogICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgIDxsYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9InJhZGlvIiBuYW1lPSJsaW1pdCIgdmFsdWU9IjIwIiBvbj0iQU1QLnNldFN0YXRlKHtzdGF0ZTp7IG15TGltaXRUZXh0OiAnMjAgbG9jYXRpb25zJ319KSI+CiAgICAgICAgICAgIDxkaXY+MjA8L2Rpdj4KICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICA8bGFiZWw+CiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJyYWRpbyIgbmFtZT0ibGltaXQiIHZhbHVlPSI1MCIgb249IkFNUC5zZXRTdGF0ZSh7c3RhdGU6eyBteUxpbWl0VGV4dDogJzUwIGxvY2F0aW9ucyd9fSkiPgogICAgICAgICAgICA8ZGl2PjUwPC9kaXY+CiAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgPGxhYmVsPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0icmFkaW8iIG5hbWU9ImxpbWl0IiB2YWx1ZT0iMzAwIiBvbj0iQU1QLnNldFN0YXRlKHtzdGF0ZTp7IG15TGltaXRUZXh0OiAnYWxsIGxvY2F0aW9ucyd9fSkiPgogICAgICAgICAgICA8ZGl2PlNob3cgQWxsPC9kaXY+CiAgICAgICAgICA8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgPC9maWVsZHNldD4KCiAgICA8aDIgY2xhc3M9ImljLWFtcC1jcml0ZXJpYS1kaXNwbGF5Ij4KICAgICAgU2VhcmNoaW5nIGZvciA8c3BhbiBbdGV4dF09J3N0YXRlLm15TGltaXRUZXh0Jz5hbGwgbG9jYXRpb25zPC9zcGFuPiwgaW4gYSA8c3BhbiBbdGV4dF09J3N0YXRlLm15UmFkaXVzVGV4dCc+NTAgbWlsZTwvc3Bhbj4gcmFkaXVzCiAgICA8L2gyPgoKICAgIDxsYWJlbCBjbGFzcz0iaWMtYW1wLXN1Ym1pdCI+CiAgICAgIDxpbnB1dCB0eXBlPSJzdWJtaXQiIHZhbHVlPSIiPgogICAgICA8ZGl2PkZpbmQgYSBzdG9yZTwvZGl2PgogICAgPC9sYWJlbD4KCiAgICA8ZGl2IGNsYXNzPSJpYy1hbXAtcmVzdWx0cy1zdWNjZXNzLWVycm9yIj4KCiAgICAgIDxkaXYgc3VibWl0LXN1Y2Nlc3M+CiAgICAgICAgPHRlbXBsYXRlIHR5cGU9ImFtcC1tdXN0YWNoZSI+CiAgICAgICAge3sjaXRlbXN9fXt7I0lEfX0KICAgICAgICAgIDxkaXYgY2xhc3M9ImljLWFtcC1yZXN1bHRzIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iaWMtYW1wLXJlc3VsdHMtZGV0YWlscyI+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibmFtZSI+e3tuYW1lfX08L2Rpdj4KICAgICAgICAgICAgICA8YSBjbGFzcz0iYWRkcmVzcyIgaHJlZj0ie3ttYXBzTGlua319Ij57e2FkZHJlc3N9fSwge3tzdGF0ZUNvZGV9fSB7e3Bvc3RhbENvZGV9fTwvYT4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJob3VycyI+e3t7c3RvcmVIb3Vyc319fTwvZGl2PgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InBob25lIj7wn5Oee3twaG9uZX19PC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJpYy1hbXAtcmVzdWx0cy1zaG9wIj4KICAgICAgICAgICAgICA8YSBocmVmPSJodHRwczovL3d3dy5ub3J0aGVybnRyYWlsb3V0Zml0dGVycy5jb20vIiBjbGFzcz0iYnRuLXNob3AtcmVzdWx0cyI+U2hvcCBOb3c8L2E+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAge3svSUR9fXt7L2l0ZW1zfX0KICAgICAgICAgIDxkaXYgY2xhc3M9ImljLWFtcC1yZXN1bHRzLWVtcHR5Ij4KICAgICAgICAgICAgPGgyPldlIGRpZG4ndCBmaW5kIGFueSBzdG9yZXMsIHRyeSB5b3VyIHNlYXJjaCBhZ2FpbiE8L2gyPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IHN1Ym1pdC1lcnJvcj4KICAgICAgICA8ZGl2IGNsYXNzPSJpYy1hbXAtcmVzdWx0cy1zaWduYWwiPgogICAgICAgICAgPGgyPlRoZXJlIG11c3QgYmUgYSB3ZWFrIHNpZ25hbCwgdHJ5IHlvdXIgc2VhcmNoIGFnYWluITwvaDI+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBzdWJtaXR0aW5nPgogICAgICAgIDxkaXYgY2xhc3M9ImljLWFtcC1yZXN1bHRzLXN1Ym1pdHRpbmciPgogICAgICAgICAgPGFtcC1pbWcgYWx0PSJTZWFyY2hpbmcuLi4gVGhhbmsgeW91IGZvciB3YWl0aW5nIiBzcmM9Imh0dHBzOi8vdGh1bWJzLmdmeWNhdC5jb20vUmVsaWV2ZWRTaWxlbnRBcmN0aWN3b2xmLXNtYWxsLmdpZiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvYW1wLWltZz4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgPC9kaXY+CgogIDwvZm9ybT4KCiAgPGRpdiBjbGFzcz0iZm9vdGVyIj4KICAgIDxhbXAtaW1nIHNyYz0iaHR0cHM6Ly9yZC1pbmR1c3RyeS1lbWFpbHMuczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcmV0YWlsL250by9icmFuZC1hc3NldHMvZW1haWwtdGVtcGxhdGVzL2JyYW5kaW5nLW50by1sb2dvLXNlY29uZGFyeS1mb290ZXIucG5nIiBoZWlnaHQ9IjMuMjVlbSIgd2lkdGg9IjMuMjVlbSIgYWx0PSIiPjwvYW1wLWltZz4KCiAgICA8cD4gVG8gdmlldyB0aGlzIGVtYWlsIGFzIGEgd2ViIHBhZ2UsIGNsaWNrIDwhLS0gPGEgY2xhc3M9ImxpbmsiIGhyZWY9IiUldmlld19lbWFpbF91cmwlJSI+aGVyZS48L2E+IC0tPjxhIGNsYXNzPSJsaW5rIj5oZXJlLjwvYT48L3A+CiAgICA8cD48c3BhbiBzdHlsZT0iZm9udC13ZWlnaHQ6Ym9sZDsiPiUlTWVtYmVyX0J1c25hbWUlJTwvc3Bhbj48YnI+PGJyPiUlTWVtYmVyX0FkZHIlJTxicj4lJU1lbWJlcl9DaXR5JSUsICUlTWVtYmVyX1N0YXRlJSUsICUlTWVtYmVyX1Bvc3RhbENvZGUlJSwgJSVNZW1iZXJfQ291bnRyeSUlPGJyPjwvcD4KCiAgICA8ZGl2IGNsYXNzPSJzb2NpYWwiPgogICAgICA8YW1wLWltZyBzcmM9Imh0dHBzOi8vcmQtaW5kdXN0cnktZW1haWxzLnMzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3JldGFpbC9udG8vYnJhbmQtYXNzZXRzL2VtYWlsLXRlbXBsYXRlcy9icmFuZGluZy1udG8tc29jaWFsLWZhY2Vib29rLnBuZyIgd2lkdGg9IjEuOGVtIiBoZWlnaHQ9IjEuOGVtIj48L2FtcC1pbWc+CiAgICAgIDxhbXAtaW1nIHNyYz0iaHR0cHM6Ly9yZC1pbmR1c3RyeS1lbWFpbHMuczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcmV0YWlsL250by9icmFuZC1hc3NldHMvZW1haWwtdGVtcGxhdGVzL2JyYW5kaW5nLW50by1zb2NpYWwtaW5zdGFncmFtLnBuZyIgd2lkdGg9IjEuOGVtIiBoZWlnaHQ9IjEuOGVtIj48L2FtcC1pbWc+CiAgICAgIDxhbXAtaW1nIHNyYz0iaHR0cHM6Ly9yZC1pbmR1c3RyeS1lbWFpbHMuczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcmV0YWlsL250by9icmFuZC1hc3NldHMvZW1haWwtdGVtcGxhdGVzL2JyYW5kaW5nLW50by1zb2NpYWwtdHdpdHRlci5wbmciIHdpZHRoPSIxLjhlbSIgaGVpZ2h0PSIxLjhlbSI+PC9hbXAtaW1nPgogICAgICA8YW1wLWltZyBzcmM9Imh0dHBzOi8vcmQtaW5kdXN0cnktZW1haWxzLnMzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3JldGFpbC9udG8vYnJhbmQtYXNzZXRzL2VtYWlsLXRlbXBsYXRlcy9icmFuZGluZy1udG8tc29jaWFsLXBpbnRlcmVzdC5wbmciIHdpZHRoPSIxLjhlbSIgaGVpZ2h0PSIxLjhlbSI+PC9hbXAtaW1nPgogICAgICA8YW1wLWltZyBzcmM9Imh0dHBzOi8vcmQtaW5kdXN0cnktZW1haWxzLnMzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3JldGFpbC9udG8vYnJhbmQtYXNzZXRzL2VtYWlsLXRlbXBsYXRlcy9icmFuZGluZy1udG8tc29jaWFsLWFwcC5wbmciIHdpZHRoPSIxLjhlbSIgaGVpZ2h0PSIxLjhlbSI+PC9hbXAtaW1nPgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0iZm9vdGVyLW5hdiI+CiAgICAgIDxhIGhyZWY9Imh0dHBzOi8vbm9ydGhlcm50cmFpbG91dGZpdHRlcnMuY29tL2RlZmF1bHQvY29udGFjdC5odG1sIj5Db250YWN0IFVzPC9hPiZuYnNwOyZuYnNwO3wmbmJzcDsmbmJzcDsKICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9ub3J0aGVybnRyYWlsb3V0Zml0dGVycy5jb20vZGVmYXVsdC9zdG9yZXM/c2hvd01hcD10cnVlJmFtcDtob3Jpem9udGFsVmlldz10cnVlIj5TdG9yZSBMb2NhdG9yPC9hPiZuYnNwOyZuYnNwO3wmbmJzcDsmbmJzcDsKICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9ub3J0aGVybnRyYWlsb3V0Zml0dGVycy5jb20vZGVmYXVsdC9wcml2YWN5cG9saWN5Lmh0bWwiPlByaXZhY3kgUG9saWN5PC9hPiZuYnNwOyZuYnNwO3wmbmJzcDsmbmJzcDsKICAgICAgPCEtLSA8YSBocmVmPSIlJXByb2ZpbGVfY2VudGVyX3VybCUlIj5NYW5hZ2UgUHJlZmVyZW5jZXM8L2E+Jm5ic3A7Jm5ic3A7fCZuYnNwOyZuYnNwOyAtLT4KICAgICAgPCEtLSA8YSBocmVmPSIlJXVuc3ViX2NlbnRlcl91cmwlJSI+VW5zdWJzY3JpYmU8L2E+IC0tPgogICAgICA8YT5NYW5hZ2UgUHJlZmVyZW5jZXM8L2E+Jm5ic3A7Jm5ic3A7fCZuYnNwOyZuYnNwOwogICAgICA8YT5VbnN1YnNjcmliZTwvYT4KICAgIDwvZGl2PgoKICA8L2Rpdj4KCjwvZGl2Pgo8L2Rpdj4KCjwvYm9keT4KPC9odG1sPgo=">Store locator AMP playground</a>
              </li>
              <li>
                <a href="https://github.exacttarget.com/amp4email/sfmc-amp-resource/tree/master/store-locator">list.json</a>
              </li>
              <li>
                <a href="https://github.exacttarget.com/amp4email/sfmc-amp-resource/tree/master/store-locator">form.json</a>
              </li>
              <li><a href="#store-locator">Link to this demo</a></li>
            </ul>

          </li>
          <li id="demo2">
            <h2>Title</h2>
            <img src="" alt="preview" />
            <p>Description</p>
            <h3>Components used</h3>
            <ul>
              <li>amp-</li>
              <li>amp-</li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li><a href="">AMP playground preview</a></li>
              <li><a href="">list.json</a></li>
              <li><a href="">form.json</a></li>
              <li><a href="#demo2">Link to this demo</a></li>
            </ul>
          </li>
          <li id="demo3">
            <h2>Title</h2>
            <img src="" alt="preview" />
            <p>Description</p>
            <h3>Components used</h3>
            <ul>
              <li>amp-</li>
              <li>amp-</li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li><a href="">AMP playground preview</a></li>
              <li><a href="">list.json</a></li>
              <li><a href="">form.json</a></li>
              <li><a href="#demo3">Link to this demo</a></li>
            </ul>
          </li>
          <li id="demo4">
            <h2>Title</h2>
            <img src="" alt="preview" />
            <p>Description</p>
            <h3>Components used</h3>
            <ul>
              <li>amp-</li>
              <li>amp-</li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li><a href="">AMP playground preview</a></li>
              <li><a href="">list.json</a></li>
              <li><a href="">form.json</a></li>
              <li><a href="#demo4">Link to this demo</a></li>
            </ul>
          </li>
          <li id="demo5">
            <h2>Title</h2>
            <img src="" alt="preview" />
            <p>Description</p>
            <h3>Components used</h3>
            <ul>
              <li>amp-</li>
              <li>amp-</li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li><a href="">AMP playground preview</a></li>
              <li><a href="">list.json</a></li>
              <li><a href="">form.json</a></li>
              <li><a href="#demo5">Link to this demo</a></li>
            </ul>
          </li>
          <li id="demo6">
            <h2>Title</h2>
            <img src="" alt="preview" />
            <p>Description</p>
            <h3>Components used</h3>
            <ul>
              <li>amp-</li>
              <li>amp-</li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li><a href="">AMP playground preview</a></li>
              <li><a href="">list.json</a></li>
              <li><a href="">form.json</a></li>
              <li><a href="#demo6">Link to this demo</a></li>
            </ul>
          </li>
          <li id="demo7">
            <h2>Title</h2>
            <img src="" alt="preview" />
            <p>Description</p>
            <h3>Components used</h3>
            <ul>
              <li>amp-</li>
              <li>amp-</li>
            </ul>
            <h3>Links</h3>
            <ul>
              <li><a href="">AMP playground preview</a></li>
              <li><a href="">list.json</a></li>
              <li><a href="">form.json</a></li>
              <li><a href="#demo7">Link to this demo</a></li>
            </ul>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        This is a footer
      </footer>
    </div>
  )
}
