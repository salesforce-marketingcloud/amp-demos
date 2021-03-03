## AMP-Demos

This repo is a `next.js` project. It’s responsible for generating [amp-demos.herokuapp.com](https://amp-demos.herokuapp.com/) - *a collection of AMP for Email examples written for and tested in Salesforce Marketing Cloud (SFMC)*.

Here is a detailed list of the amp4email sample files which may be found in the `amp-demos` directory.

* `demo.html` - amp4email markup that has been tested and validated. Most likely, it is connected to an external `.json` data source. It may require customization in order to accommodate custom environments.
* `demo.json` - static example of the `.json` used in the related amp4email example. Some examples utilize data sources that are hard coded, while some utilize [Server-Side JavaScript](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_serverSideJavaScript.htm) to dynamically generate `.json`.
* `meta.json` - content for each example, and used purely for populating the layout and presentation with content.
* `demo.js` - examples of [Server-Side JavaScript](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_serverSideJavaScript.htm) responsible for generating the `.json`. Please let this serve as an example, as these represent minimal technique to ensure simplicity in the example.

## External Resources

* [AMP for Email: Delivery Email Code Samples](https://salesforce.quip.com/HEauAZ5Gzwa7)
* [CloudPage Code Resources and AMP for Email](https://salesforce.quip.com/ab4eAaM5GL0C)
* [Official AMP for Email docs](https://amp.dev/documentation/guides-and-tutorials/start/create_email/?format=email)
