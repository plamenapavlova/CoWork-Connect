import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { CoworkingSpaceMapViewComponent } from './coworking-space-map-view.component';

describe('CoworkingSpaceMapViewComponent', () => {
  let component: CoworkingSpaceMapViewComponent;
  let fixture: ComponentFixture<CoworkingSpaceMapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoworkingSpaceMapViewComponent, NoopAnimationsModule, FormsModule, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkingSpaceMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
