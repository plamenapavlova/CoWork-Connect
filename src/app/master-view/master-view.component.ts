import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-master-view',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective, RouterLink],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {}
