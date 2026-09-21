import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('FooterComponent', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
  });

  it('deve formatar hora no fuso America/Sao_Paulo', () => {
    const result = component.formatTime('America/Sao_Paulo');
    expect(result).toMatch(/\d{2}:\d{2}:\d{2}/);
  });
});
