// import { Component } from '@angular/core';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatButtonModule} from '@angular/material/button';

// @Component({
//   selector: 'app-index',
//   standalone: true,
//   imports: [MatButtonToggleModule,MatSlideToggleModule,MatButtonModule, MatTooltipModule],
//   templateUrl: './index.component.html',
//   styleUrl: './index.component.scss'
// })

// export class IndexComponent {

// }

import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MatButtonToggleModule, MatSlideToggleModule, MatButtonModule, MatTooltipModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {

}
