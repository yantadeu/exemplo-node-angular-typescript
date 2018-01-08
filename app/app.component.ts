import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

  <header class="mdl-layout__header">
  <div class="container">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title"><img src="../assets/images/logo.png" /></span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" [routerLink]="['/helltriangle']">Hell Triangle</a>
        <a class="mdl-navigation__link" [routerLink]="['/resizeimage']">Resize Image</a>
      </nav>
    </div>
    </div>
  </header>
  <div class="mdl-layout__drawer show_drawer">
				<nav class="mdl-navigation show">
				<a class="mdl-navigation__link" [routerLink]="['/helltriangle']">Hell Triangle</a>
        <a class="mdl-navigation__link" [routerLink]="['/resizeimage']">Resize Image</a>
				</nav>
		</div>
  <main class="container">
    <div class="mdl-grid"><router-outlet></router-outlet></div>
  </main>
</div>

`,
  // Deprecated
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent {}
