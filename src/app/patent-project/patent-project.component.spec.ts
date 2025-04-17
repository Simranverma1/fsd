import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentProjectComponent } from './patent-project.component';

describe('PatentProjectComponent', () => {
  let component: PatentProjectComponent;
  let fixture: ComponentFixture<PatentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
