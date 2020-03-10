import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(public auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit(): void {
    
  }

}
