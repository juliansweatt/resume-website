import { Component, OnInit } from '@angular/core';
import { ThemeControlService } from '../../services/theme-control.service';

@Component({
  selector: 'theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {
  constructor(public themeService: ThemeControlService) {}

  ngOnInit() {}
}
