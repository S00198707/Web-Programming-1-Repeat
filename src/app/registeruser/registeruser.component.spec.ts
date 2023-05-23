import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisteruserComponent } from './registeruser.component';
import { FormsModule } from '@angular/forms';

describe('RegisteruserComponent', () => {
  let component: RegisteruserComponent;
  let fixture: ComponentFixture<RegisteruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteruserComponent],
      imports: [HttpClientTestingModule, RouterTestingModule,FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the register method', () => {
    spyOn(component, 'register');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.register).toHaveBeenCalled();
  });
});
