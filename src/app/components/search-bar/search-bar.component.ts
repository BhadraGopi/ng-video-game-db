import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {}
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
  @Output() messageEmitter = new EventEmitter<string>();
  btnClick!: string;
  showPopUp(): void {
    this.btnClick = 'on';
    this.messageEmitter.emit(this.btnClick);
  }
}
