
import { DOCUMENT } from '@angular/common';
import { EventEmitter, HostListener, Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../models/nav.model';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  openItem = new EventEmitter<NavItem>();

  constructor() {}
  
}
