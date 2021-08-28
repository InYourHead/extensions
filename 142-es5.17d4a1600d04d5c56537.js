!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[142],{25142:function(e,s,a){"use strict";a.r(s),a.d(s,{ColorPickerApiComponent:function(){return C},ColorPickerModule:function(){return y},ColorPickerOverviewComponent:function(){return v}});var o,l=a(54655),r=a(81940),c=a(37716),p=a(98295),i=a(90156),h=a(3679),m=a(76627),f={title:"Basic",component:(o=function(){function e(){n(this,e),this.color="#3f51b5"}var s,a,o;return s=e,(a=[{key:"changeColor",value:function(n){console.log(n)}}])&&t(s.prototype,a),o&&t(s,o),e}(),o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=c.Xpm({type:o,selectors:[["color-picker-example"]],decls:10,vars:1,consts:[["required","",3,"ngModel","ngModelChange","colorChange"],["matSuffix",""]],template:function(n,t){1&n&&(c.TgZ(0,"mat-form-field"),c.TgZ(1,"mat-label"),c._uU(2,"Color picker"),c.qZA(),c.TgZ(3,"mtx-color-picker",0),c.NdJ("ngModelChange",function(n){return t.color=n})("colorChange",function(n){return t.changeColor(n)}),c.qZA(),c.TgZ(4,"mat-icon",1),c._uU(5,"palette"),c.qZA(),c.TgZ(6,"mat-hint"),c._uU(7,"Choose your favorite color"),c.qZA(),c.TgZ(8,"mat-error"),c._uU(9,"Please enter the color"),c.qZA(),c.qZA()),2&n&&(c.xp6(3),c.Q6J("ngModel",t.color))},directives:[p.KE,p.hX,i.J,h.Q7,h.JJ,h.On,m.Hw,p.R9,p.bx,p.TO],styles:[""]}),o),files:[{file:"app.component.html",content:a(19007),filecontent:a(96444)},{file:"app.component.ts",content:a(64021),filecontent:a(54797)},{file:"app.component.scss",content:a(73365),filecontent:a(5461)}]},u=a(38583),d=a(22281),g=a(29241);function x(n,t){if(1&n&&(c.ynx(0),c._UZ(1,"example-viewer",2),c.BQk()),2&n){var e=t.$implicit;c.xp6(1),c.Q6J("exampleData",e)}}function j(n,t){if(1&n&&(c.ynx(0),c.YNc(1,x,2,1,"ng-container",1),c.BQk()),2&n){var e=t.ngIf;c.xp6(1),c.Q6J("ngForOf",e.examples)}}function k(n,t){if(1&n&&(c.ynx(0),c._UZ(1,"doc-viewer",1),c.BQk()),2&n){var e=t.ngIf;c.xp6(1),c.Q6J("textContent",e.content.default)}}var v=function(){var t=function t(e){n(this,t),this.route=e};return t.\u0275fac=function(n){return new(n||t)(c.Y36(l.gz))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-color-picker-overview"]],decls:9,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,t){1&n&&(c.TgZ(0,"p"),c.TgZ(1,"code"),c._uU(2,"mtx-color-picker"),c.qZA(),c._uU(3," has used Chrome picker style of "),c.TgZ(4,"code"),c._uU(5,"ngx-color"),c.qZA(),c._uU(6,", it can't change the picker style now.\n"),c.qZA(),c.YNc(7,j,2,1,"ng-container",0),c.ALo(8,"async")),2&n&&(c.xp6(7),c.Q6J("ngIf",c.lcZ(8,1,t.route.data)))},directives:[u.O5,u.sg,d.B],pipes:[u.Ov],encapsulation:2}),t}(),C=function(){var t=function t(e){n(this,t),this.route=e};return t.\u0275fac=function(n){return new(n||t)(c.Y36(l.gz))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-color-picker-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(n,t){1&n&&(c.YNc(0,k,2,1,"ng-container",0),c.ALo(1,"async")),2&n&&c.Q6J("ngIf",c.lcZ(1,1,t.route.data))},directives:[u.O5,g.z],pipes:[u.Ov],encapsulation:2}),t}(),y=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.m,l.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:v,pathMatch:"full",data:{examples:[f]}},{path:"api",component:C,pathMatch:"full",data:{content:a(96089)}},{path:"**",redirectTo:"overview"}])]]}),t}()},19007:function(n){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Color picker<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span> (<span class="hljs-attr">colorChange</span>)=<span class="hljs-string">&quot;changeColor($event)&quot;</span> <span class="hljs-attr">required</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span> <span class="hljs-attr">matSuffix</span>&gt;</span>palette<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Choose your favorite color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-error</span>&gt;</span>Please enter the color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-error</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n'},64021:function(n){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;color-picker-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  color = <span class="hljs-string">&#x27;#3f51b5&#x27;</span>;\n\n  <span class="hljs-function"><span class="hljs-title">changeColor</span>(<span class="hljs-params">e: <span class="hljs-built_in">any</span></span>)</span> {\n    <span class="hljs-built_in">console</span>.log(e);\n  }\n}\n'},96089:function(n,t,e){"use strict";e.r(t),t.default='<h1 id="color-picker">Color Picker</h1>\n<h2 id="api-reference-for-material-extensions-color-picker">API reference for Material Extensions color-picker</h2>\n<p><code>import { MtxColorPickerModule } from &apos;@ng-matero/extensions/color-picker&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxcolorpicker"><code>MtxColorPicker</code></h4>\n<p>Selector: <code>[mtx-color-picker]</code></p>\n<p>Exported as: <code>mtxColorPicker</code></p>\n<h5 id="properties">Properties</h5>\n<p>The color picker component is just like a <code>matInput</code>.</p>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>value: string</code></td>\n<td align="left">Value of the color picker control.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>placeholder: string</code></td>\n<td align="left">Placeholder of the color picker control.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>disabled: boolean</code></td>\n<td align="left">Whether disabled the color picker control.</td>\n</tr>\n<tr>\n<td align="left">@Output() <code>colorChange: EventEmitter&lt;{ color: Color; $event: MouseEvent }&gt;</code></td>\n<td align="left">Event emitted when the color changed.</td>\n</tr>\n</tbody></table>\n'},96444:function(n,t,e){"use strict";e.r(t),t.default='<mat-form-field>\n  <mat-label>Color picker</mat-label>\n  <mtx-color-picker [(ngModel)]="color" (colorChange)="changeColor($event)" required>\n  </mtx-color-picker>\n  <mat-icon matSuffix>palette</mat-icon>\n  <mat-hint>Choose your favorite color</mat-hint>\n  <mat-error>Please enter the color</mat-error>\n</mat-form-field>\n'},54797:function(n,t,e){"use strict";e.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'color-picker-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  color = '#3f51b5';\n\n  changeColor(e: any) {\n    console.log(e);\n  }\n}\n"},73365:function(n){"use strict";n.exports='module.exports = "<span class=\\"hljs-comment\\">/** No CSS for this example */</span>\\n"'},5461:function(n){"use strict";n.exports='export default "/** No CSS for this example */\\n";'}}])}();