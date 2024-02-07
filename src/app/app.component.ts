import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api'; 

import { PanelModule } from 'primeng/panel'; 
import { ToastModule } from 'primeng/toast'; 
import { MenuModule } from 'primeng/menu';
import { PrimeNGConfig } from "primeng/api"; 
import { DialogModule } from "primeng/dialog";
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from './ui/layout/layout.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HeaderComponent } from './ui/header/header.component';
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
  LayoutComponent,
  FooterComponent,
  InputTextModule,
  NavbarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  CalendarModule,
  BreadcrumbModule,
  DividerModule,
  PasswordModule,
  InputMaskModule,
  ButtonModule,
  DialogModule,
  PanelModule, 
  ToastModule, 
  MenuModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime-ng';
  constructor(private primengConfig: PrimeNGConfig) {} 
  
  ngOnInit() { 
    this.primengConfig.ripple = true; 
  } 
  geeks: boolean = false; 
  
  gfg() { 
    this.geeks = true; 
  } 

  
}
