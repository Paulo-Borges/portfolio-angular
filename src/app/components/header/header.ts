import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',

})
export class Header {
  protected readonly title = signal('BORGES');

  protected readonly themeService = inject(ThemeService);
}
