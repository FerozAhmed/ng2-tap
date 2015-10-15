/// <reference path="../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

// import {tabs} from 'ng2-bootstrap';
import {TapDemo} from './tap/tap-demo';

let name = 'Tap';
let src = 'https://github.com/valor-software/ng2-tap/blob/master/components/tap/tap.ts';
// webpack html imports
let doc = require('../../components/tap/readme.md');
let titleDoc = require('../../components/tap/title.md');
let ts = require('!!prismjs?lang=typescript!./tap/tap-demo.ts');
let html = require('!!prismjs?lang=markup!./tap/tap-demo.html');

@Component({
  selector: 'tap-section'
})
@View({
  template: `
  <br>
  <section id="${name.toLowerCase()}">
    <div class="row"><h1>${name}<small>(<a href="${src}">src</a>)</small></h1></div>

    <hr>

    <div class="row"><div class="col-md-12">${titleDoc}</div></div>

    <div class="row">
      <h2>Example</h2>
      <div class="card card-block panel panel-default panel-body">
        <tap-demo></tap-demo>
      </div>
    </div>

    <br>

    <div class="row">
      <!--<tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html" ng-non-bindable>${html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${ts}</code></pre>
          </div>
        </tab>
      </tabset>-->
    </div>

    <br>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  // directives: [TapDemo, tabs, CORE_DIRECTIVES]
  directives: [TapDemo, CORE_DIRECTIVES]
})
export class TapSection {
}
